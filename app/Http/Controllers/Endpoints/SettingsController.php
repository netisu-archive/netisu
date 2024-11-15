<?php

namespace App\Http\Controllers\Endpoints;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\{
 Contracts\Auth\MustVerifyEmail,
 Validation\ValidationException,
 Support\Facades\Redirect, 
 Support\Facades\Password,
 Http\RedirectResponse, 
 Support\Facades\Auth,  
 Support\Facades\Hash,
 Http\JsonResponse,  
 Validation\Rules,
 Support\Carbon,
 Http\Request,
 Support\Str,
};

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Country;
use App\Models\User;

use App\Models\UserBan;
use App\Models\UserSettings;
use App\Http\Controllers\Controller;

use Auth\Events\PasswordReset;


class SettingsController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function changeCountry($country)
    {        // Get the user
        $user = Auth::user();

        // Get the user's settings record
        $settings = $user->settings;

        // Get the country code from the request

        // Check if country exists in the database
        $existingCountry = Country::where('code', $country)->first();

        if ($existingCountry) {
            // Country exists, update settings
            $settings->country_code = strtolower($country);
            $settings->save();

            // Success message (handled by frontend)
            return response()->json([
                "message" => "Country updated successfully.",
                "type" => "success",
            ], 200);
        } else {
            // Country does not exist (example unitedstates instead of us)
            return response()->json([
                "message" => "Invalid country code. Please select a valid country.",
                "type" => "error",
            ], 400); // Use 400 for Bad Request
        }
    }
    /**
     * Update the user's profile information.
     */

    public function resetPassword(Request $request): JsonResponse
    {
        $request->validate([
            'token' => ['required'],
            'email' => ['required', 'email'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        // Here we will attempt to reset the user's password. If it is successful we
        // will update the password on an actual user model and persist it to the
        // database. Otherwise we will parse the error and return the response.
        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($request->string('password')),
                    'remember_token' => Str::random(60),
                ])->save();

                event(new PasswordReset($user));
            }
        );

        if ($status != Password::PASSWORD_RESET) {
            throw ValidationException::withMessages([
                'email' => [__($status)],
            ]);
        }

        return response()->json(['status' => __($status)]);
    }

    /**
     * "Delete" the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current-password'],
        ]);

        $user = $request->user();

        $ban = new UserBan;
        $ban->user_id = $user->id;
        $ban->banner_id = config("Values.system_account_id");
        $ban->type = "self-deletion";
        $ban->active = true;
        $ban->note = "You have requested deletion of your account. To restore in a timely manner, Please contact support.";
        $ban->length = Carbon::createFromTimestamp(time() + 31536000)->format('Y-m-d H:i:s');
        $ban->save();

        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return back()->with('message', 'Account Deleted Successfully');
    }
}
