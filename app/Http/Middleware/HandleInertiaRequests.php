<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use App\Models\Item;
use App\Models\Space;
use Illuminate\Support\Carbon;

class HandleInertiaRequests extends Middleware
{
     /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

      /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $pendingItems = Item::where('status', 'pending')->with('creator')->get();

        $pendingSpaces = Space::where('thumbnail_pending', true)->with('creator')->get();

        $pendingItemsAndSpaces = $pendingItems->merge($pendingSpaces);

        return array_merge(parent::share($request), [
            'site' => config('Values'),
            'locale' => function () {
                return app()->getLocale();
            },
            'locales' => function () {
                return config('ActiveLocales');
            },
            'language' => function () {
                return translations(
                    resource_path('lang/' . app()->getLocale() . '.json')
                );
            },
            'auth' => function () use ($request, $pendingItemsAndSpaces) {
                return [
                    'user' => $request->user() ? [
                        'id' => $request->user()->id,
                        'username' => $request->user()->username,
                        'display_name' => $request->user()->display_name,
                        'email' => preg_replace('/[^@]+@([^\s]+)/', ''.substr($request->user()->email, 0, 3).'********@$1', $request->user()->email),
                        'birthdate' => $request->user()->birthdate,
                        'email_verified_at' => $request->user()->email_verified_at,
                        'event_currency' => shortNum($request->user()->event_currency),
                        'next_currency_payout' => Carbon::parse($request->user()->next_reward_payout)->diffForHumans(),
                        'coins' => shortNum($request->user()->coins),
                        'bucks' => shortNum($request->user()->bucks),
                        'status' => $request->user()->status,
                        'staff' => $request->user()->isStaff(),
                        'pendingAssets' => $request->user()->isStaff() ? $pendingItemsAndSpaces->count() : null,
                        'position' => $request->user()->CurrentPosition(),
                        'positionID' => $request->user()->CurrentPositionID(),
                        'about_me' => $request->user()->about_me,
                        'headshot' => $request->user()->headshot(),
                        'thumbnail' => $request->user()->thumbnail(),
                        'following' => $request->user()->following(),
                        'settings' => $request->user()->settings,
                        'level' => $request->user()->getLevel(),
                        'xp' => $request->user()->getPoints(),
                        'navSpaces' => $request->user()->navSpaces(),
                        'nextlevelxp' =>  $request->user()->nextLevelAt(),
                        'notifications' => $request->user()->unreadNotifications()->limit(5)->get()
                            ->each(function ($notification) {
                                $notification->DateHum = $notification->created_at->diffForHumans();
                            }),
                    ] : null,
                ];
            },
        ]);
    }
}
