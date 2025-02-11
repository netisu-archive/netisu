<?php

namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;

use App\Http\Controllers\Endpoints\RenderController;

class UserRenderer implements ShouldQueue
{

    public $userID;

    /**
     * Create a new job instance.
     */
    public function __construct($userID)
    {
        $this->userID = $userID;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {

        $newVrcInstance = new RenderController();
        $vrs = $newVrcInstance;
        $vrs->UserRender($this->userID);
    }
}
