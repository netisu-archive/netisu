<?php

namespace App\Http\Controllers\Spaces;

use App\Models\User;
use App\Models\Item;
use App\Models\Space;

use App\Models\Status;
use App\Models\ForumThread;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\ItemPurchase;
use Illuminate\Support\Facades\Auth;
use App\Models\Level;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Cache;

class SpaceController extends Controller
{
    public function SpacesIndex(Request $request)
    {
        $search = $request->input('search', '');

        $spaces = Space::where([

            ['thumbnail_pending', '!=', true],
            ['name', 'like', "%$search%"]

        ])->orderBy('created_at', 'desc')->paginate(12)->through(function ($space) {
            return [
                'name' => $space->name,
                'id' => $space->id,
                'slug' => $space->slug(),
                'name' => $space->name,
                'creator' => $space->creator->display_name,
                'timecreated' => $space->created_at,
                'description' => $space->description,
                'DateHum' => $space->DateHum,
                'member_count' => $space->member_count,
                'thumbnail' => $space->thumbnail(),
            ];
        });


        return inertia('Spaces/Index', [
            'spaces' => $spaces,
            'search' => $search,
        ]);
    }
    public function SpaceCreate(){
        return inertia('Spaces/Create', [
        ]);
    }

    public function SpacesView(Request $request, $id)
    {
        $space = Space::where('id', $id)->with(['creator'])->first();

        return inertia('Spaces/View', [
            'space' => $space,
        ]);
    }
}
