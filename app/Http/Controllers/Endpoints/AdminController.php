<?php

namespace App\Http\Controllers\Endpoints;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Kaankilic\WtFilter\Facades\WtFilter;
use Illuminate\Support\Facades\Auth;

use App\Models\{
    User,
    SiteSettings
};

class AdminController extends Controller
{
    public function enableMaintenance(Request $request)
    {

        if (!Auth::check() || !Auth::user()->isStaff()) {
            abort(403); // Immediately return a 403 for unauthorized users
        }
        $site = SiteSettings::find(1);

        $site->site_maintenance = 1;
        $site->save();

    }
    public function disableMaintenance(Request $request)
    {

        if (!Auth::check() || !Auth::user()->isStaff()) {
            abort(403); // Immediately return a 403 for unauthorized users
        }
        $site = SiteSettings::find(1);

        $site->site_maintenance = 0;
        $site->save();

    }
}
