<?php

use Illuminate\Database\Seeder;
use App\Models\Achievement; // Replace with your actual Achievement model

class AchievementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $achievements = [
            [
                'name' => 'Administrator',
                'is_secret' => false,
                'description' => 'Players who possess this badge are official administrators. Administrators are members of our staff who oversee the website and keep it running smoothly.',
                'image' => 'assets/img/achievements/administrator.png',
            ],
            [
                'name' => 'Verified First Quest',
                'is_secret' => false,
                'description' => 'Successfully finish your first quest.',
                'image' => 'storage/app/achievements/first-quest.png',
            ],
            [
                'name' => 'Unlock All Characters',
                'is_secret' => false,
                'description' => 'Collect every character in the game.',
                'image' => 'storage/app/achievements/all-characters.png',
            ],
            [
                'name' => 'Daily Login Streak of 30',
                'is_secret' => false,
                'description' => 'Log in to the game for 30 consecutive days.',
                'image' => 'storage/app/achievements/login-streak.png',
            ],
            [
                'name' => 'Defeat the Final Boss',
                'is_secret' => false,
                'description' => 'Conquer the ultimate challenge!',
                'image' => 'storage/app/achievements/final-boss.png',
            ],
            [
                'name' => 'Collect 1000 Coins',
                'is_secret' => false,
                'description' => 'Accumulate a fortune!',
                'image' => 'storage/app/achievements/1000-coins.png',
            ],
            [
                'name' => 'Hidden Gem',
                'is_secret' => true,
                'description' => 'Discover the hidden secret area.',
                'image' => 'storage/app/achievements/hidden-gem.png', 
            ],
        ];
        // Insert all levels in a single batch for efficiency
        DB::table('acheivements')->insert($achievements);
        
    }
}