<?php

namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use App\Http\Controllers\Endpoints\RenderController;

class ItemRenderer implements ShouldQueue
{

    public $itemID;

    /**
     * Create a new job instance.
     */
    public function __construct($itemID)
    {
        $this->itemID = $itemID;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {

        $newVrcInstance = new RenderController();
        $vrs = $newVrcInstance;
        $vrs->ItemRender($this->itemID);
    }
}
