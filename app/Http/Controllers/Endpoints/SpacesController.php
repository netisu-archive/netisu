<?php

namespace App\Http\Controllers\Endpoints;

use App\Http\Controllers\Controller;
use App\Models\Space;
use App\Models\SpaceRanks;
use App\Models\SpaceMembers;

class SpacesController extends Controller
{

    public function getSpaceMembersByRank(int $spaceId, int $rankId)
    {
        $space = Space::find($spaceId);
        $rank = SpaceRanks::find($rankId);

        if (!$space || !$rank) {
            return response()->json(['message' => 'Space or rank not found.']);
        }


        $memberQuery = SpaceMembers::where([
            ['space_id', $spaceId],
            ['rank_id', $rankId]
        ])
            ->with(['user', 'rank'])
            ->paginate(10);

        $members = $memberQuery->map(function ($member) {
            return [
                'id' => $member->user->id,
                'username' => $member->user->username,
                'headshot' => $member->user->headshot(),
                'role' => $member->rank->name,
            ];
        })->toArray();

        return response()->json([
            'members' => $members,
            'pagination' => [
                'current_page' => $memberQuery->currentPage(),
                'last_page' => $memberQuery->lastPage(),
                'total' => $memberQuery->total(),
                'per_page' => $memberQuery->perPage(),
            ],
        ]);
    }
};
