<?php

namespace App\Http\Controllers\Endpoints;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Kaankilic\WtFilter\Facades\WtFilter;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

use App\Models\{
    Item,
    User,
    Inventory,
    SiteSettings
};

class AdminController extends Controller
{
    private $site;

    private function __construct()
    {
        $isProduction = app()->environment('production');

        if ($isProduction) {
            // Check if the settings are cached
            $this->site = Cache::remember('siteSettings', now()->addMinutes(30), function () {
                return SiteSettings::find(1); // Change to use the find() method instead of where() + first()
            });
        } else {
            // If not in production, retrieve settings without caching
            $this->site = SiteSettings::find(1);
        }
    }

    public function enableMaintenance(Request $request)
    {

        if (!Auth::check() || !Auth::user()->isStaff() && !Auth::user()->rolePermissions("can_activate_maintenance")) {
            abort(403); // Immediately return a 403 for unauthorized users
        }

        $this->site->site_maintenance = 1;
        $this->site->save();
    }

    public function acceptPendingItem(Request $request)
    {

        if (!Auth::check() || !Auth::user()->isStaff() && !Auth::user()->rolePermissions("can_activate_maintenance")) {
            abort(403); // Immediately return a 403 for unauthorized users
        }
        $this->site = SiteSettings::find(1);

        $this->site->site_maintenance = 1;
        $this->site->save();
    }
    public function giftItem(Request $request, Item $itemId, User $userId)
    {

        if (!Auth::check() || !Auth::user()->isStaff() && !Auth::user()->rolePermissions("can_gift_users")) {
            abort(403); // Immediately return a 403 for unauthorized users
        }

        $inventory = new Inventory;

        $inventory->create([
            'user_id' => $userId,
            'item_id' => $itemId,
        ]);
    }

    public function disableMaintenance(Request $request)
    {

        if (!Auth::check() || !Auth::user()->isStaff() && !Auth::user()->rolePermissions("can_activate_maintenance")) {
            abort(403); // Immediately return a 403 for unauthorized users
        }
        $this->site = SiteSettings::find(1);

        $this->site->site_maintenance = 0;
        $this->site->save();
    }
}
