<?php

namespace App\Http\Controllers\Endpoints;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Followers;
use App\Models\Avatar;
use App\Models\Status;
use App\Notifications\FollowerNotification;
use Illuminate\Support\Facades\Notification;
use App\Models\Inventory;
use Illuminate\Support\Facades\Cache;
use Carbon\Carbon;

class UserController extends Controller
{
    public function getStatus($userID)
    {
        $user = User::where('id', '=', $userID)->first();

        if ($user && $user->online()) {
            return response()->json(['online' => true]);
        } else {
            return response()->json(['online' => false]);
        }
    }

    public function getUserStatus(Request $request)
    {
        $statuses = Status::where([
            //['creator_id', '!=', Auth::user()->id],
            ['message', '!=', null]
        ])->orderBy('created_at', 'desc')->paginate(2)->through(function ($status) {
            return [
                'name' => $status->creator->username,
                'dname' => $status->creator->display_name,
                'timecreated' => $status->created_at,
                'message' => $status->message,
                'DateHum' => $status->DateHum,
            ];
        });

        return response()->json($statuses); // Convert the paginator to an array
    }

    public function getDashboardStatus(Request $request)
    {
        // Define a cache key for this query
        $cacheKey = 'dashboard_statuses';
        $statuses = Cache::remember($cacheKey, now()->addMinutes(5), function () {
            $s = Status::where([
                ['message', '!=', null]
            ])->orderBy('created_at', 'desc')->paginate(6);

            // Transform each status object into a desired structure
            $statuses = $s->transform(function ($status) {
                return [
                    'name' => $status->creator->username,
                    'dname' => $status->creator->display_name,
                    'timecreated' => $status->created_at, // assuming this is the desired format
                    'message' => $status->message,
                    'DateHum' => $status->DateHum,
                    'thumbnail' => $status->creator->headshot(),
                ];
            });

            // Return the transformed data as JSON
            return response()->json($statuses);
        });
        return $statuses;
    }


    public function getAvatar($userID)
    {
        $GetUser = Avatar::where('id', '=', $userID)->first();
        $url = config('Values.storage.url');
        $image = ($GetUser->image === 'default') ? config('Values.render.default_avatar') : $GetUser->image;
        $image =  "{$url}/{$image}.png";
        echo ($image);
    }

    public function getFollowingStatus($userID)
    {
        $userfollowing = Followers::where(['follower_id' => Auth::user()->id, 'following_id' => $userID])->exists()->first();
        dd($userfollowing);

        if ($userfollowing) {
            return response()->json(['online' => true]);
        } else {
            return response()->json(['online' => false]);
        }
    }

    public function follow(User $user)
    {
        $loggedInUser = Auth::user();

        if ($loggedInUser->id === $user->id) {
            // User is logged in and trying to follow themself
            return response()->json(['message' => 'You cannot follow yourself.'], 400);
        };

        if ($loggedInUser->isFollowing($user)) {
            return response()->json(['message' => 'You are already following this user.'], 400);
        };

        if ($loggedInUser !== null) {
            $loggedInUser->following()->attach($user->id);
            $user->notify(new FollowerNotification($loggedInUser));
            return response()->json(['message' => 'Successfully followed.'], 200);
            // ...
        } else {
            return response()->json(['message' => 'Login to follow this user.'], 503);
        }
    }

    public function getUser($id)
    {
        // Define a unique cache key for this user's profile
        $cacheKey = 'user_profile_' . $id;

        // Retrieve the user profile from the cache, ensuring `$user` is accessible
        $user = Cache::remember($cacheKey, now()->addMinutes(60), function () use ($id) {
            return User::where('id', $id)->first();
        });
        // Check if the user exists

        if (!$user) {
            abort(404);
        }

        // Load relationships and counts
        $userFollowing = $user->following()->get();
        $FollowingCount = $userFollowing->count();

        $userFollowers = $user->followers()->get();
        $FollowerCount = $userFollowers->count();

        // Determine if the authenticated user is following the profile user
        $isFollowing = Auth::check() && Auth::user()->isFollowing($user) ?? false;

        // Determine if the profile user is following the authenticated user
        $thisFollowing = Auth::check() && $user->isFollowing(Auth::user()) ?? false;

        // Format join date
        $joindate = Carbon::parse($user->created_at)->format('M d Y');

        $statuscacheKey = $id . 'profile_statuses';
        $friendcacheKey = $id . 'profile_friends';

        // Use caching to store the statuses query results
        $statuses = Cache::remember($statuscacheKey, now()->addMinutes(5), function () use ($user) {
            return Status::where([
                ['creator_id', '=', $user->id]
            ])->orderBy('created_at', 'desc')->paginate(3)->through(function ($status) {
                return [
                    'name' => $status->creator->username,
                    'dname' => $status->creator->display_name,
                    'timecreated' => $status->created_at,
                    'message' => $status->message,
                    'DateHum' => $status->DateHum,
                ];
            });
        });

        $friends = Cache::remember($friendcacheKey, now()->addMinutes(5), function () use ($user) {
            $mutualFollowers = $user->followers()->whereHas('following', function ($query) use ($user) {
                $query->where('following_id', $user->id)
                    ->whereHas('following', function ($innerQuery) use ($user) {
                        $innerQuery->where('following_id', $user->id);
                    });
            });

            return $mutualFollowers->paginate(5)->through(function ($friend) {
                return [
                    'name' => $friend->username,
                    'thumbnail' => $friend->thumbnail(),
                ];
            });
        });

        return [
            'id' => $user->id,
            'username' => $user->username,
            'display_name' => $user->display_name,
            'about_me' => $user->about_me,
            'posts' => $user->posts()->count(),
            'avatar' => $user->thumbnail(),
            'headshot' => $user->headshot(),
            'level' => $user->getLevel(),
            'following' => $user->following()->get(),
            'friends' => $friends,
            'followers' => $user->followers()->get(),
            'staff' => $user->isStaff(),
            'position' => $user->CurrentPosition(),
            'followsYou' => $thisFollowing,
            'followers_count' => $FollowerCount,
            'following_count' => $FollowingCount,
            'friend_count' => $friends->count(),
            'joindate' => $joindate,
            'DateHum' => $user->DateHum,
            'status' => $user->status,
            'online' => $user->online(),
            'settings' => [
                "verified" => $user->settings->is_verified,
                "beta_tester" => $user->settings->beta_tester,
                "private_profile" => $user->settings->private_profile,
                "followers_enabled" => $user->settings->followers_enabled,
                "trading_enabled" => $user->settings->trading_enabled,
                "posting_enabled" => $user->settings->posting_enabled,
                "chat_enabled" => $user->settings->chat_enabled,
                "alert_enabled" => $user->settings->alert_enabled,
                "alert_message" => $user->settings->alert_message,
                "calling_card_enabled" => $user->settings->calling_card_enabled,
                "calling_card_url" => $user->settings->calling_card_url,
                "profile_banner_enabled" => $user->settings->profile_banner_enabled,
                "profile_banner_url" => $user->settings->profile_banner_url,
                "primary_space" => $user->settings->primary_space,
                "secondary_space" => $user->settings->secondary_space,
                "ugc_creator" => $user->settings->ugc_creator,
                "content_creator" => $user->settings->content_creator,
                "country_code" => $user->settings->country_code,
            ],
            'is_following' => $isFollowing,
            'statuses' => $statuses,
        ];
    }

    public function unfollow(User $user)
    {
        $loggedInUser = Auth::user();

        // Check if the logged-in user is the same as the user they are trying to unfollow
        if ($loggedInUser->id === $user->id) {
            return response()->json(['message' => 'You cannot unfollow yourself.'], 400);
        }

        $loggedInUser->following()->detach($user->id);

        return response()->json(['message' => 'Successfully unfollowed.']);
    }

    public function getUserItems($userID)
    {
        $inventory = Inventory::where('user_id', $userID)->get();
        // Changed 'first()' to 'get()' to retrieve all items

        $items = $inventory->map(function ($itemData) {
            $item = $itemData->item;
            if ($item) {
                $item->creator = $item->creator;
                $item->thumbnail = $item->thumbnail();
                return $item;
            }
        })->filter();

        return response()->json($items);
    }

    public function getUserCurrentlyWearing($userID)
    {
        $avatar = Avatar::where('user_id', $userID)->first();

        if (!$avatar) {
            return response()->json(['error' => 'No avatar record found.']); // No avatar found for this user
        }

        $wearingItems = $avatar->WearingItems();

        $items = [];
        foreach ($wearingItems as $slot => $item) {
            if ($item) {
                $item->slot = $slot;
                $item->creator = $item->creator;
                $item->thumbnail = $item->thumbnail();
                $items[] = $item;
            }
        }

        return response()->json($items);
    }
}
