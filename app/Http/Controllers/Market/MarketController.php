<?php

namespace App\Http\Controllers\Market;

use App\Models\User;
use App\Models\Item;
use App\Models\Inventory;
use App\Models\ItemReseller;
use App\Models\ItemPurchase;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Endpoints\RenderController;
use Illuminate\Support\Facades\Auth;
use App\Models\IpLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\UploadedFile;
use App\Jobs\ItemPreviewRenderer;
use Illuminate\Support\Facades\Cache;

class MarketController extends Controller
{
    public function StoreIndex()
    {
        // Define a cache key for this data
        $cacheKey = 'store_index_data';

        // Use caching to store the data for StoreIndex
        $categories = Cache::remember($cacheKey, now()->addHours(6), function () {
            return config('ItemCategories');
        });

        return inertia('Store/Index', [
            'categories' => $categories,
        ]);
    }

    public function storeItem($id)
    {
        /** @var \App\Models\User $user **/
        $authenticatedUserModel = Auth::user();

        // Define cache keys
        $cacheKey = 'store_item_' . $id;
        $recommendationCacheKey = 'recommendation_' . $id;

        // Retrieve item data with caching
        $item = Cache::remember($cacheKey, now()->addHours(6), function () use ($id) {
            return Item::where('id', $id)->first();
        });

        if (!$item || !$item->public_view && Auth::check() && !$authenticatedUserModel->isStaff()) {
            abort(404);
        }

        // Retrieve recommendations with caching
        $recommendations = Cache::remember($recommendationCacheKey, now()->addHours(6), function () use ($item) {
            return Item::where([
                ['id', '!=', $item->id],
                ['public_view', true],
                ['status', 'approved'],
                ['creator_id', $item->creator->id]
            ])->inRandomOrder()->take(6)->get();
        });

        foreach ($recommendations as $recommendation) {
            $thumbnail = $recommendation->thumbnail();
            $recommendation->thumbnail = $thumbnail;
        }


        return inertia('Store/Item', [
            'item' => [
                'id' => $item->id,
                'name' => $item->name,
                'item_type' => $item->item_type,
                'thumbnail' => $item->thumbnail(),
                'preview' => $item->preview(),
                'cost_bucks' => $item->cost_bucks,
                'cost_coins' => $item->cost_coins,
                'DateHum' => $item->DateHum,
                'UpdateHum' => $item->UpdateHum,

                'creator' => [
                    'username' => $item->creator->username,
                    'displayname' => $item->creator->display_name,
                    'thumbnail' => $item->creator->headshot(),
                    'staff' => $item->creator->isStaff(),
                ],
                'owners' => $item->owners(),
            ],
            'itemOwnership' => Auth::check() ? $authenticatedUserModel->ownsItem($item->id) : false,
            'recommendations' => $recommendations,
        ]);
    }

    public function CreateIndex()
    {
        return inertia('Store/Create');
    }

    public function uploadItem(Request $request)
    {
        $this->validateRequest($request);
        $itemHashName = bin2hex(random_bytes(22));
        $previewName = "{$itemHashName}_preview";

        $item = new Item;
        $item->name = $request->name;
        $item->description = $request->description;

        $info = getimagesize($request->file('image'));
        if ($info[2] == IMAGETYPE_JPEG) {
            return redirect()->route('store.item', $item->id)->with([
                'message' => 'This file needs to be a true PNG, none of that sneaky jpeg-in-disguise business.',
                'type' => 'danger' // Optional: specify message type for styling
            ], 502);
        }

        $this->uploadImage($request->file('image'), $itemHashName);

        $item->hash = $itemHashName;
        $item->creator_id = Auth::id();

        $item->item_type = $request->type;
        $item->status = 'pending';
        $item->public_view = false;
        $item->cost_coins =  $request->price_coins;
        $item->cost_bucks =  $request->price_bucks;
        $item->avatar_preview = $previewName;
        $item->onsale = true;
        $item->save();

        ItemPreviewRenderer::dispatch($item->id, true, $itemHashName)->onQueue('render');


        return redirect()->route('store.item', $item->id)->with([
            'message' => 'Item created successfully!',
            'type' => 'success' // Optional: specify message type for styling
        ], 201);
    }

    private function uploadImage(UploadedFile $file, string $name): string
    {
        $path = Storage::disk('public')->putFileAs('uploads', $file, "{$name}.png");

        return $path;
    }

    private function validateRequest(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:30',
            'description' => 'required|string|max:255',
            'type' => 'required|string|in:shirt,tshirt,pants', // Allowed item types
            'image' => 'required|image|mimes:png', // Validate PNG image
            'price_coins' => 'required|integer|max:50000',
            'price_bucks' => 'required|integer|max:10000',
        ]);

        if ($validator->fails()) { // Use Validator object's fails method on $validator
            throw ValidationException::withMessages([$validator->errors()]);
        }
    }
}
