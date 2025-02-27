<?php
return [
    'name' => 'Netisu',
    'logo' => '/assets/img/logo-theta.svg',
    'icon' => '/assets/img/logo.svg',
    'marketLogo' => '/assets/img/site-banners/market-title-xoxo.png',

    'in_event' => true,

    'system_account_id' => 2,
    'in_testing_phase' => true,

    'version' => "melody",
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
            'storage' => 'http://100.115.92.195',
            'api' => 'http://100.115.92.195/api',
            'careers' => 'https://careers.100.115.92.195',
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
