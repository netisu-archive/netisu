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
use App\Services\BBCodeService;

class HomeController extends Controller
{
    public function WelcomeIndex(BBCodeService $bbcodeService)
    {
        // Define a cache key for this query result
        $cacheKeyItems = 'landing_items';
        $cacheKeyPosts = 'landing_posts';

        // Use caching to store the item count query result
        $landingItems = Cache::remember($cacheKeyItems, now()->addHours(1), function () {
            return Item::where([
                ['status', '!=', 'pending']
            ])->inRandomOrder()->paginate(6)->through(function ($item) {
                return [
                    'id' => $item->id,
                    'name' => $item->name,
                    'thumbnail' => $item->thumbnail(),
                    'creator' => [
                        'username' => $item->creator->username,
                        'displayname' => $item->creator->display_name,
                    ],
                ];
            });
        });

        $landingPosts = Cache::remember($cacheKeyPosts, now()->addHours(1), function () use ($bbcodeService)  {
            return ForumThread::inRandomOrder()->paginate(4)->through(function ($post) use ($bbcodeService){
                return [
                    'id' => $post->id,
                    'title' => $post->title,
                    'body' => $bbcodeService->parse($post->body),
                    'creator' => [
                        'username' => $post->creator->username,
                    ],
                    'slug' => $post->slug(),
                ];
            });
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
            'position' => Auth::user()->CurrentPosition(),
        ]);
    }


    public function DashboardVal(Request $request)
    {
        $request->validate([
            'message' => ['max:124']
        ]);

        $this->ensureIsNotRateLimited();
        $limit = 5; // Allow 5 requests per minute (adjust as needed)
        $key = $this->throttleKey();

        $executed = RateLimiter::attempt(
            $key,
            $limit,
            function () use ($request) {
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

        }, 60);

        if (!$executed) {
            return response()->json([
                'message' => 'Too many requests. Please try again later.',
                'type' => 'error'
            ], 429); // Use status code 429 for Too Many Requests
          }


        return response()->json(
            [
                'message' => 'Your status has been changed.',
                'type' => 'success'
            ]
        );
    }

    private function throttleKey(): string
    {
        return 'latest_status_' . Auth::id();
    }

    public function ensureIsNotRateLimited()
    {
        if (RateLimiter::tooManyAttempts($this->throttleKey(), 5)) {
            return response()->json(
                [
                    'message' => 'You have posted too many times, try again later.',
                    'type' => 'danger'
                ]
            );
        }
    }
}
