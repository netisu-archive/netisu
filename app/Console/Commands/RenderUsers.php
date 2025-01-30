<?php

namespace App\Console\Commands;

use App\Jobs\UserRenderer;
use Illuminate\Console\Command;
use App\Models\Avatar;

class RenderUsers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:render-users';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        if ($this->confirm('Do you wish to rerender ALL users?')) {
            $users = Avatar::where('image', '!=', 'default')->get();
            foreach ($users as $user) {
                UserRenderer::dispatch($user->id)->onQueue('user-render');
                sleep(3);
            }
        }
    }
}
