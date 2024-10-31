<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Item;
use App\Models\Status;
use App\Models\ForumThread;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\Level;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Cache;

class HomeController extends Controller
{
    public function WelcomeIndex()
    {
        // Define a cache key for this query result
        $cacheKeyItems = 'landing_items';
        $cacheKeyPosts = 'landing_posts';

        // Use caching to store the item count query result
        $landingItems = Cache::remember($cacheKeyItems, now()->addHours(1), function () {
            return Item::where([
                ['status', '=', 'pending']
            ])->inRandomOrder()->limit(6)->paginate(6)->through(function ($item) {
                return [
                    'id' => $item->id,
                    'name' => $item->name,
                    'thumbnail' => $item->thumbnail(),
                    'creator_username' => $item->creator->username,
                    'creator_display_name' => $item->creator->display_name,
                ];
            });
        });

        $landingPosts = Cache::remember($cacheKeyPosts, now()->addHours(1), function () {
            return ForumThread::inRandomOrder()->limit(4)->get();
        });

        return inertia('Welcome', [
            'LandingItems' => $landingItems,
            'LandingPosts' => $landingPosts,
        ]);
    }


    public function DashboardIndex()
    {
        return inertia('Dashboard', [
            'nextlevelxp' => Auth::user()->getNextLevelExp(),
        ]);
    }


    public function DashboardVal(Request $request)
    {
        $this->validate($request, [
            'message' => ['max:124']
        ]);

        $this->ensureIsNotRateLimited();
        $limit = 5; // Allow 5 requests per minute (adjust as needed)
        $key = $this->throttleKey();

        if (!RateLimiter::attempt($key, $limit, 60)) {
            return response()->json([
                'message' => 'Too many requests. Please try again later.',
                'type' => 'error'
            ], 429); // Use status code 429 for Too Many Requests
        }


        if ($request->message != Auth::user()->latestStatus) {
            // Logging
            $status = new Status;
            $status->creator_id = Auth::id();
            $status->message = $request->message;
            $status->save();

            // Clear the cache for the latest status
            Cache::forget('latest_status_' . Auth::id());

            $user = User::find(Auth::id());
            $user->status = $request->message;
            $user->save();
        }
        return response()->json(
            [
                'message' => 'Your status has been changed.',
                'type' => 'success'
            ]
        );
    }

    private function throttleKey(): String
    {
        return 'status_for_id_' . Auth::id();
    }

    public function ensureIsNotRateLimited()
    {
        if (RateLimiter::tooManyAttempts($this->throttleKey(), 5)) {
            return response()->json(
                [
                    'message' => 'You have posted to many times try again later.',
                    'type' => 'danger'
                ]
            );
        }
    }
}
