<?php

namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use App\Http\Controllers\Endpoints\RenderController;

class ItemPreviewRenderer implements ShouldQueue
{

    public int $itemID;
    public string $itemHashName;
    public bool $noNameOverride;

    /**
     * Create a new job instance.
     */
    public function __construct(int $itemID, bool $noNameOverride, string $itemHashName)
    {
        $this->itemID = $itemID;
        $this->noNameOverride = $noNameOverride;
        $this->itemHashName = $itemHashName;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {

        $newVrcInstance = new RenderController();
        $vrs = $newVrcInstance;
        $vrs->ItemPreviewRender($this->itemID, $this->noNameOverride, $this->itemHashName);
    }
}
