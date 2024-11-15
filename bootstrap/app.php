<?php

use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

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
                500 => 'E_GENERIC_EXCEPTION',
                503 => 'E_SERVICE_UNAVAILABLE',
                404 => 'E_ROUTE_NOT_FOUND',
                403 => 'E_FORBIDDEN',
            ];

            $icons = [
                500 => 'fa-duotone fa-bomb text-danger',
                503 => 'fa-duotone fa-cloud-slash text-danger',
                404 => 'fa-duotone fa-exclamation text-warning',
                403 => 'fa-duotone fa-star-half-stroke text-danger',
            ];

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
                        'message' => 'login nigga'
                    ], 403);
                }

                return inertia('App/Error', [
                    'site' => config('Values'),
                    'auth' => function () use ($request) {
                        return [
                            'user' => $request->user() ? [
                                'id' => $request->user()->id,
                                'username' => $request->user()->username,
                                'display_name' => $request->user()->display_name,
                                'email' => $request->user()->email,
                                'birthdate' => $request->user()->birthdate,
                                'coins' => $request->user()->coins,
                                'bucks' => $request->user()->bucks,
                                'status' => $request->user()->status,
                                'staff' => $request->user()->isStaff(),
                                'position' => $request->user()->CurrentPosition(),
                                'about_me' => $request->user()->about_me,
                                'headshot' => $request->user()->headshot(),
                                'following' => $request->user()->following(),
                                'settings' => $request->user()->settings,
                                'level' => $request->user()->getLevel(),
                                'xp' => $request->user()->getPoints(),
                                'nextlevelxp' =>  $request->user()->nextLevelAt(),
                                'notifications' => $request->user()->unreadNotifications()->limit(5)->get()
                                ->each(function ($notification) {
                                    $notification->DateHum = $notification->created_at->diffForHumans();
                                }),
                            ] : null,
                        ];
                    },
                    'site_config' => [
                        'announcement_message' => site_setting('announcement_message') ?? null,
                        'announcement' => site_setting('announcement_enabled') ?? false,
                        'item_creation_enabled' => site_setting('item_creation_enabled') ?? false,
                        'in_maintenance' => site_setting('site_maintenance') ?? false,
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
        web: __DIR__ . '/../routes/web.php',
        api: __DIR__ . '/../routes/api.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )->withBroadcasting(
        __DIR__.'/../routes/channels.php',
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
            \Illuminate\Session\Middleware\AuthenticateSession::class,
            \App\Http\Middleware\Localization::class,
            \App\Http\Middleware\HandleInertiaCrossDomainVisits::class,
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
            \App\Http\Middleware\SiteConfigMiddleware::class, // SiteSettings
            \App\Http\Middleware\WordFilterCheck::class,
            \App\Http\Middleware\FeatureFlags::class,
            \App\Http\Middleware\Roles::class,
            \App\Http\Middleware\UpdateOnlineStatus::class,
            \App\Http\Middleware\EnsureSettings::class,
            \App\Http\Middleware\RedirectIfBanned::class,
            \App\Http\Middleware\PreventProxyConnections::class,
            \App\Http\Middleware\GiveDailyRewards::class,
            \Illuminate\Http\Middleware\TrustHosts::class,
            \App\Http\Middleware\UpdateOnlineStatus::class,
            \App\Http\Middleware\VerifyAccount::class,
        ]);
        $middleware->redirectGuestsTo(fn (Request $request) => route('auth.login.page'));
    })->create();
