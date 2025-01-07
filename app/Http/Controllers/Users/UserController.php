<?php

namespace App\Http\Controllers\Users;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Status;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function UserIndex()
    {
        // Define a cache key for this query result
        $cacheKey = 'users_index';

        // Use caching to store the user list query result
        $users = Cache::remember($cacheKey, now()->addMinutes(30), function () {
            return User::orderBy('updated_at', 'desc')->paginate(12)->through(function ($user) {
                $isFollowing = Auth::check() && Auth::user()->isFollowing($user) ?? false;
                return [
                    'id' => $user->id,
                    'username' => $user->username,
                    'dname' => $user->display_name,
                    'staff' => $user->isStaff(),
                    'status' => $user->status,
                    'DateHum' => $user->DateHum,
                    'avatar' => $user->headshot(),
                    'online' => $user->online(),
                    'is_following' => $isFollowing,
                ];
            });
        });

        return inertia('Users/Index', [
            'users' => $users,
        ]);
    }


    public function ProfileIndex($username)
    {
        // Define a unique cache key for this user's profile
        $cacheKey = 'user_profile_' . $username;

        // Retrieve the user profile from the cache, ensuring `$user` is accessible
        $user = Cache::remember($cacheKey, now()->addMinutes(60), function () use ($username) {
            return User::where('username', $username)->first();
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

        $statuscacheKey = $username . 'profile_statuses';
        $friendcacheKey = $username . 'profile_friends';

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

        if ($user->settings->private_profile) {
            if (Auth::check()) {
                $loggedInUser = Auth::user();
                if ($user->id != $loggedInUser->id) {
                    $response = inertia('App/ProfileDisabled', [
                        'username' => $user->username,
                    ]);
                }
            } else {
                $response = inertia('App/ProfileDisabled', [
                    'username' => $user->username,
                ]);
            }
        } else {

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


        $response = inertia('Users/Profile', [
            'user' => [
                'id' => $user->id,
                'username' => $user->username,
                'display_name' => $user->display_name,
                'about_me' => $user->about_me,
                'posts' => $user->posts()->count(),
                'thumbnail' => $user->thumbnail(),
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
                'avatar' => [
                    'color_head' => $user->avatar()->color_head,
                    'color_left_arm' => $user->avatar()->color_left_arm,
                    'color_torso' => $user->avatar()->color_torso,
                    'color_right_arm' => $user->avatar()->color_right_arm,
                    'color_left_leg' => $user->avatar()->color_left_leg,
                    'color_right_leg' => $user->avatar()->color_right_leg,
                    'current_face' => env('STORAGE_URL') . (
                        $user->avatar()->face ? '/uploads/' . getItemHash($user->avatar()->face) . ".png" : '/assets/default.png'
                    ),
                ],
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
                ]
            ],
            'is_following' => $isFollowing,
            'statuses' => $statuses,
        ]);
    }
        return $response;
    }
}
