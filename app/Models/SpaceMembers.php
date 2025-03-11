<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\SpaceRanks;
class SpaceMembers extends Model
{
    protected $fillable = [
        'space_id',
        'user_id',
        'rank_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
    public function rank()
    {
        return $this->belongsTo(SpaceRanks::class, 'rank_id');
    }
}