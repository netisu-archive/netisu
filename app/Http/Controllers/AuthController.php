<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Avatar;
use App\Models\UserSettings;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;
use App\Providers\RouteServiceProvider;
use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Cache;
use App\Models\Item;
use Illuminate\Auth\Events\Lockout;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;

/**
 * @OA\Info(title="Netisu API", version="1.14")
 */
class AuthController extends Controller
{
    use AuthenticatesUsers;


    public function LoginVal(Request $request): RedirectResponse
    {

        $credentials = $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);
        $this->ensureIsNotRateLimited();



    if (!Auth::attempt(['username' => $credentials['username'], 'password' => $credentials['password']], $remember = true)) {
        RateLimiter::hit($this->throttleKey());

        // Authentication failed
        throw ValidationException::withMessages([
            'password' => __('auth.failed'),
        ]);
        } else {
        // Authentication passed

        return redirect()->route('my.dashboard.page');
        RateLimiter::clear($this->throttleKey());
    };
    }

    public function LoginIndex()
    {
        return Inertia::render('Authentication/Login');
    }

    public function ForgotIndex()
    {
        return Inertia::render('Authentication/Forgot');
    }

    public function RegisterIndex()
    {
        $items = Cache::remember('obtainable_items', 60, function () {
            return $this->getItemData(config('ObtainableItems.starter_item_ids'));
        });

        return inertia('Authentication/Create', [
            'themes' => array_filter(config('themes.roster'), function ($theme) {
                return $theme['available'];
            }),
            'items' => $items,
        ]);
    }
    private function getItemData(array $itemIds): array
    {
        // Logic to fetch item data from database or other source
        $items = Item::whereIn('id', $itemIds)->get();

        $itemData = []; // Create an empty array to store processed item data
        foreach ($items as $item) {
            $itemData[] = [  // Add an object with name and thumbnail to the array
                'name' => $item->name,
                'thumbnail' => $item->thumbnail(),
            ];
        }

        return $itemData;
    }
    /**
     * @OA\Post(
     *     path="/auth/register/validate",
     *     summary="Register a new user",
     *     @OA\Parameter(
     *         name="username",
     *         in="query",
     *         description="User's username",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="displayname",
     *         in="query",
     *         description="User's display name",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="email",
     *         in="query",
     *         description="User's email",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="password",
     *         in="query",
     *         description="User's password",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(response="201", description="User registered successfully"),
     *     @OA\Response(response="422", description="Validation errors")
     * )
     */
    public function registerVal(Request $request)
    {
        $request->validate([
            'username' => 'required|alpha_num|min:3|max:25|profane|unique:' . User::class,
            'displayname' => 'required|alpha_num|min:3|max:25|profane',
            'birthdate.day' => 'required|numeric|min:1|max:31',
            'birthdate.month' => 'required|numeric|min:1|max:12',
            'birthdate.year' => 'required|numeric|min:1900|max:' . date('Y'),
            'email' => 'required|string|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        // Check if the username field is present in $request
        if (!$request->username) {
            throw ValidationException::withMessages(['username' => 'The Username Field is empty']);
        }

        if (User::where('username', $request->username)->exists()) {
            throw ValidationException::withMessages(['username' => 'The Username is taken']);
        }

        if (User::where('email', $request->email)->exists()) {
            throw ValidationException::withMessages(['email' => 'You cannot use the same email for mutiple accounts']);
        }

        $birthdate = sprintf(
            '%02d/%02d/%04d',
            $request->input('birthdate.month'),
            $request->input('birthdate.day'),
            $request->input('birthdate.year')
        );

        $user = User::create([
            'username' => $request->username,
            'display_name' => $request->displayname,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'birthdate' => $birthdate,
            'status' => 'Hey, Im new to ' . config('Values.name'),
            'about_me' => 'Greetings! Im new to ' . config('Values.name'),
        ]);

        UserSettings::create([
            'user_id' => $user->id,
        ]);

        // Create associated avatar
        Avatar::create([
            'user_id' => $user->id,
        ]);

        if ($user->id === 1) {
            Admin::create([
                'user_id' => $user->id,
                'role_id' => 1,

            ]);
        }

        event(new Registered($user));



        Auth::login($user, $remember = true);
    }
    /**
     * Ensure the login request is not rate limited.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function ensureIsNotRateLimited(Request $request): void
    {
        if (!RateLimiter::tooManyAttempts($this->throttleKey(), 5)) {
            return;
        }

        event(new Lockout($request));

        $seconds = RateLimiter::availableIn($this->throttleKey());

        throw ValidationException::withMessages([
            'email' => trans('auth.throttle', [
                'seconds' => $seconds,
                'minutes' => ceil($seconds / 60),
            ]),
        ]);
    }

    /**
     * Get the rate limiting throttle key for the request.
     */
    public function throttleKey(): string
    {
        return Str::transliterate(Str::lower('attempts_on_'.$this->input('username')).'_from'.$this->ip());
    }

    public function UserExit(): RedirectResponse
    {
        Auth::guard('web')->logout();

        return redirect()->intended(route("auth.login.page"))->with([
            'type' => 'success',
            'message' => 'You have logged out.'
        ]);
    }
}
