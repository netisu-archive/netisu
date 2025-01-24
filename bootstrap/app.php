<?php

use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Models\Item;
use App\Models\Space;
use Illuminate\Support\Carbon;

return Application::configure(basePath: dirname(__DIR__))
    ->withExceptions(function (Exceptions $exceptionxceptions) {
        $exceptionxceptions->respond(function (Response $response, Throwable $exception, Request $request) {
            /**
             * A list of error messages
             *
             * @var array<int, string>
             */

            $messages = [
                500 => 'Sorry, we are doing some maintenance. Please check back soon.',
                503 => 'Whoops, something went wrong on our servers.',
                404 => 'The page you are looking for could not be found.',
                403 => 'You are not authorized to access this page.',
            ];

            /**
             * A list of backend development helpers
             *
             * @var array<int, string>
             */

            $routes = [
                500 => 'E_CANNOT_LOOKUP_ROUTE',
                503 => 'E_SERVICE_UNAVAILABLE',
                404 => 'E_ROUTE_NOT_FOUND',
                403 => 'E_AUTHORIZATION_FAILURE',
            ];

            $icons = [
                500 => 'fa-solid fa-bomb fa-gradient text-danger',
                503 => 'fa-solid fa-cloud-slash fa-gradient text-danger',
                404 => 'fa-solid fa-exclamation fa-gradient text-warning',
                403 => 'fa-solid fa-star-half-stroke fa-gradient text-danger',
            ];

            $pendingItems = Item::where('status', 'pending')->with('creator')->get();

            $pendingSpaces = Space::where('thumbnail_pending', true)->with('creator')->get();
    
            $pendingItemsAndSpaces = $pendingItems->merge($pendingSpaces);

            if (app()->environment(['local', 'testing'])) {
                return $response;
            }

            if (!array_key_exists($response->getStatusCode(), $messages)) {
                return $response;
            }

            if ($exception instanceof ModelNotFoundException && $request->wantsJson()) {
                return response()->json([
                    'data' => 'Resource not found'
                ], 404);
            }

            if (!$request->isMethod('GET')) {
                return response()->json([
                    'type' => 'error',
                    'message' => $this->messages[$response->getStatusCode()]
                ], $response->getStatusCode());
            }

            if ($request->wantsJson() || $request->isJson() && !Auth::check()) {
                return response()->json([
                    'type' => 'error',
                    'message' => 'Unauthentiated.'
                ], 403);
            }

            return inertia('App/Error', [
                'site' => config('Values'),
                'auth' => function () use ($request,  $pendingItemsAndSpaces) {
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
                'site_config' => [
                    'announcement_message' => siteSetting('announcement_message') ?? null,
                    'announcement' => siteSetting('announcement_enabled') ?? false,
                    'item_creation_enabled' => siteSetting('item_creation_enabled') ?? false,
                    'in_maintenance' => siteSetting('site_maintenance') ?? false,
                ],
                'status' => $response->getStatusCode(),
                'message' => $messages[$response->getStatusCode()],
                'adonis_error' => $routes[$response->getStatusCode()],
                'icon' => $icons[$response->getStatusCode()]
            ])
                ->toResponse($request)
                ->setStatusCode($response->getStatusCode());

            if ($response->getStatusCode() === 419) {
                return back()->with([
                    'message' => 'The page expired, please try again.',
                ]);
            }
        });
    })
    ->withRouting(
        api: __DIR__ . '/../routes/api.php',
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
        then: function () {
            Route::middleware(['web', 'admin'])->namespace('App\Http\Controllers\Admin')
                ->prefix('admin')
                ->name('admin.')
                ->group(base_path('routes/admin.php'));
        },
    )->withBroadcasting(
        __DIR__ . '/../routes/channels.php',
        ['prefix' => 'api', 'middleware' => ['api', 'auth:sanctum']],
    )->withMiddleware(function (Middleware $middleware) {
        $middleware->validateCsrfTokens(except: [
            //
        ]);
        $middleware->throttleApi();
        $middleware->statefulApi();
        $middleware->api(append: [
            \Illuminate\Session\Middleware\StartSession::class,
            \Illuminate\Session\Middleware\AuthenticateSession::class,
        ]);
        $middleware->replace(\Illuminate\Http\Middleware\TrustProxies::class, \App\Http\Middleware\TrustProxies::class);
        $middleware->web(append: [
            \App\Http\Middleware\Cors::class,
            \Fahlisaputra\Minify\Middleware\MinifyHtml::class,
            \Fahlisaputra\Minify\Middleware\MinifyCss::class,
            \App\Http\Middleware\CompressResponse::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
            \Fahlisaputra\Minify\Middleware\MinifyJavascript::class,
            \Illuminate\Session\Middleware\AuthenticateSession::class,
            \App\Http\Middleware\Localization::class,
            \App\Http\Middleware\HandleInertiaCrossDomainVisits::class,
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
            \App\Http\Middleware\SiteConfigMiddleware::class, // SiteSettings
            \App\Http\Middleware\WordFilterCheck::class,
            \App\Http\Middleware\Roles::class,
            \App\Http\Middleware\FeatureFlags::class,
            \App\Http\Middleware\UpdateOnlineStatus::class,
            \App\Http\Middleware\EnsureSettings::class,
            \App\Http\Middleware\RedirectIfBanned::class,
            // \App\Http\Middleware\PreventProxyConnections::class,
            \App\Http\Middleware\GiveDailyRewards::class,
            \Illuminate\Http\Middleware\TrustHosts::class,
            \App\Http\Middleware\UpdateOnlineStatus::class,
            \Inertia\EncryptHistoryMiddleware::class,
        ]);
        $middleware->alias([
            'admin' => \App\Http\Middleware\Admin::class,
        ]);
        $middleware->redirectGuestsTo(fn(Request $request) => route('auth.login.page'));
    })->create();
