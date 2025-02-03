<?php
return [
    'name' => 'Netisu',
    'logo' => '/assets/img/logo-theta.svg',
    'icon' => '/assets/img/logo.svg',
    'in_event' => true,
    'system_account_id' => 2,
    'in_testing_phase' => true,

    'version' => "supernova",
    'frontend' => [
        'page_loader' => false,
        'sidebar_menu' => true,
        'search_bar' => true,
        'loading_messages' => false,
    ],

    'price' => [
        'username' => '250',
    ],

    'production' => [
        'domains' => [
            'main' => 'https://netisu11.test',
            'storage' => 'https://cdn.test/',
            'api' => 'https://netisu11.test/api',
            'careers' => 'https://careers.netisu11.test',
            'support' => 'support@100.115.92.195'
        ],
    ],

    'shop' => [
        'previews_enabled' => true,
        'preview_types' => ['hat', 'addon', 'face', 'tool']
    ],

    'socials' => [
        'discord' => 'https://discord.gg/netisu',
        'twitter' => '',
        'twitch' => '',
        'tiktok' => '',
        'facebook' => ''
    ],
];
