<?php
return [
    'name' => 'Netisu',
    'logo' => '/assets/img/logo-theta.svg',
    'icon' => '/assets/img/icon.png',
    'in_event' => true,
    'system_account_id' => 1,
    'in_testing_phase' => true,

    'version' => "vendetta",
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
            'main' => 'http://100.115.92.195',
            'storage' => 'http://cdn.100.115.92.195/',
            'api' => 'http://100.115.92.195/api',
            'careers' => 'http://careers.100.115.92.195',
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
