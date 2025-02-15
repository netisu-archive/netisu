<?php

namespace App\Models;

use Illuminate\{
    Database\Eloquent\Factories\HasFactory,
    Foundation\Auth\User as AeoAuthenticatable,
    Notifications\Notifiable,
    Database\Eloquent\Relations\HasMany,
    Database\Eloquent\Relations\HasOne,
    Contracts\Auth\MustVerifyEmail,
    Contracts\Auth\CanResetPassword
};

use App\Models\{
    Avatar,
    Admin,
    Level,
    Status,
    IpLog,
    ForumThread,
    UserPromocodes,
    UsernameHistory,
};

use Laravel\{
    Cashier\Billable,
    Sanctum\HasApiTokens,
    Scout\Searchable,
};

use LevelUp\Experience\Concerns\{
    GiveExperience,
    HasAchievements,
};

class User extends AeoAuthenticatable implements MustVerifyEmail, CanResetPassword
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use
        Billable,
        HasApiTokens,
        HasFactory,
        GiveExperience,
        HasAchievements,
        Notifiable,
        Searchable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

    protected $fillable = [
        'username',
        'display_name',
        'email',
        'password',
        'birthdate',
        'status',
        'about_me',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'coins',
        'bucks',
        'about_me',
        'latest_status',
        'social_id',
        'social_type',
        'wallet_address',
        'email',
        'password',
        'remember_token',
        'birthdate',
        'pm_type',
        'pm_last_four',
        'trial_ends_at',
        'latest_status',
        'created_at',
        'updated_at',
        'next_reward_payout',
        'event_currency',
        'email_verified_at',
        'stripe_id',


    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends = ['DateHum'];
    protected $guard = ['web', 'admin'];

    public function setHiddenAttributes()
    {
        if ($this->isStaff()) {
            $this->hidden = ['password'];
        } else {
            $this->hidden = ['password', 'email', 'birthdate'];
        }
    }

    /**
     * Meilisearch search array.
     *
     * @var array<string, string>
     */
    public function toSearchableArray(): array
    {
        // All model attributes are made searchable
        $array = $this->toArray();

        // Then we add some additional fields
        $array['id'] = $this->getKey();
        $array['username'] = $this->username;
        $array['display_name'] = $this->display_name;
        $array['headshot'] = $this->headshot();
        $array['thumbnail'] = $this->thumbnail();

        return $array;
    }

    // Classes
    public function avatar(): Avatar
    {
        return $this->hasOne(Avatar::class)->first();
    }

    public function promocodes(): HasOne
    {
        return $this->hasOne(UserPromocodes::class, 'user_id');
    }

    public function getNextLevelExp()
    {
        $currentLevel = min($this->getLevel() + 1, 100);
        $nextLevel = Level::where('level', $currentLevel)->first();
        return $nextLevel->next_level_experience;
    }

    public function getDateHumAttribute()
    {
        return $this->updated_at->diffForHumans();
    }

    // Define the followers relationship
    public function followers()
    {
        return $this->belongsToMany(User::class, 'followers', 'following_id', 'follower_id');
    }

    public function following()
    {
        return $this->belongsToMany(User::class, 'followers', 'follower_id', 'following_id');
    }

    public function isFollowing(User $user)
    {
        return $this->following()->where('following_id', $user->id)->exists();
    }

    /**
     * Checks if the user has an active ban.
     *
     * @return bool True if an active ban is found, false otherwise.
     */
    public function hasActiveBan(): bool
    {
        // Leverage the relationship to efficiently check for active bans
        return $this->bans()->where('active', 1)->exists();
    }

    public function bans(): HasMany
    {
        return $this->hasMany(UserBan::class, 'user_id', 'id');
    }

    public function isFollowedBy(User $userToCheck)
    {
        return $this->followers()->where('follower_id', $userToCheck->id)->exists();
    }

    public function isFriend(User $user)
    {
        return $this->isFollowing($user) && $user->isFollowing($user); // Check mutual following
    }

    public function posts(): HasMany
    {
        return $this->hasMany(ForumThread::class, 'creator_id');
    }

    public function messages(): HasMany
    {
        return $this->hasMany(Message::class);
    }

    public function sentMessages(): HasMany
    {
        return $this->hasMany(Message::class, 'sending_id');
    }

    public function receivedMessages(): HasMany
    {
        return $this->hasMany(Message::class, 'receiving_id');
    }
    public function TotalSales()
    {
        return ItemPurchase::where('seller_id', '=', $this->id)->count();
    }

    public function ownsItem($id)
    {
        return Inventory::where([
            ['user_id', '=', $this->id],
            ['item_id', '=', $id]
        ])->exists();
    }

    public function ipLogs(): HasMany
    {
        return $this->hasMany(IpLog::class, 'user_id');
    }

    public function lastIP(): string|null
    {
        $lastLog = $this->ipLogs()->latest()->first();

        return $lastLog ? $lastLog->ip : null;
    }

    public function resellableCopiesOfItem($id)
    {
        $i = 1;
        $resellableCopies = [];
        $copies = Inventory::where([
            ['user_id', '=', $this->id],
            ['item_id', '=', $id]
        ])->get();

        foreach ($copies as $copy) {
            $isReselling = ItemReseller::where('inventory_id', '=', $copy->id)->exists();

            if (!$isReselling) {
                $copy->number = $i;
                $resellableCopies[] = $copy;
                $i++;
            }
        }

        return $resellableCopies;
    }

    public function spaces()
    {
        return $this->hasManyThrough(
            Space::class,
            SpaceMembers::class,
            'user_id', // Foreign key on the SpaceMember table
            'id', // Foreign key on the Space table
            'id', // Local key on the User table
            'space_id' // Local key on the SpaceMember table
        );
    }

    public function isInSpace(Space $space)
    {
        return $this->spaces->contains($space);
    }

    public function favoriteSpaces()
    {
        return $this->spaces()->where('is_favorite', true);
    }

    public function primarySpace(): HasOne
    {
        return $this->hasOne(Space::class, 'id', $this->settings->primary_space);
    }

    public function navSpaces()
    {
        $spaces = $this->spaces()->take(5)->get();
        return $spaces->map(function ($space) {
            return [
                'id' => $space->id,
                'name' => $space->name,
                'slug' => $space->slug(),
                'thumbnail' => $space->thumbnail(),
            ];
        });
    }

    public function canEditItem($id): bool
    {
        $item = Item::findOrFail($id);

        return ($item->creator_type === 'user' && $this->id === $item->creator->id) || ($item->creator_type === 'group' && $this->id === $item->creator->owner_id);
    }


    public function online(): int
    {
        return $this->updated_at->diffInSeconds() < 300;
    }

    public function settings()
    {
        return $this->hasOne(UserSettings::class);
    }

    public function isStaff()
    {
        return Admin::where([
            ['user_id', '=', $this->id],
        ])->exists();
    }

    public function CurrentPosition()
    {
        if ($this->isStaff()) {
            $admin = Admin::where([
                ['user_id', '=', $this->id],
            ])->first();

            $adminRole = AdminRoles::where([
                ['id', '=', $admin->role_id],
            ])->first();

            return $adminRole->name;
        } else {
            return null;
        }
    }

    public function CurrentPositionID()
    {
        if ($this->isStaff()) {
            $admin = Admin::where([
                ['user_id', '=', $this->id],
            ])->first();
            return $admin->role_id;
        } else {
            return null;
        }
    }

    public function thumbnail()
    {
        $url = env('STORAGE_URL');
        $image = ($this->avatar()?->image === 'default') ? env('DEFAULT_AVATAR_FILE') : $this->avatar()?->image;
        if ($this->avatar()?->image === 'default') {
            return "{$image}.png";
        } else {
            return "{$url}/thumbnails/{$image}.png";
        }
    }
    public function usernameHistory()
    {
        return UsernameHistory::where('user_id', $this->id)->orderBy('created_at')->get();
    }

    public function headshot()
    {
        $url = env('STORAGE_URL');
        if ($this->settings->profile_picture_enabled != false) {
            $imageUrl = $this->settings->profile_picture_url;

            // Check if profile_picture_url doesn't contain an external domain
            if (!preg_match('/https?:\/\/[^\/]+/', $imageUrl)) {
                return "{$url}/thumbnails/profile-pictures/{$imageUrl}.png";
            } else {
                // Return the external URL from settings if present
                return $imageUrl;
            }
        } else {
            $image = ($this->avatar()?->image === 'default') ? env('DEFAULT_AVATAR_FILE') : $this->avatar()?->image;
            if ($this->avatar()?->image === 'default') {
                return "{$image}_headshot.png";
            } else {
                return "{$url}/thumbnails/{$image}_headshot.png";
            }
        }
    }

    public function pastUsernames(): HasMany
    {
        return $this->hasMany(UsernameHistory::class, 'user_id', 'id');
    }

    public function latestStatus(): HasOne
    {
        return $this->hasOne(Status::class, 'creator_id')->latest();
    }

    public function getStatusAttribute()
    {
        return $this->latestStatus?->message;
    }
}
