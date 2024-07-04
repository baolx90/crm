<?php return array (
  'firegroup/python' => 
  array (
    'providers' => 
    array (
      0 => 'Firegroup\\Python\\ServiceProvider',
    ),
    'aliases' => 
    array (
      'Python' => 'Firegroup\\Python\\Facades\\PythonFacade',
    ),
  ),
  'lamxuanbao/auth' => 
  array (
    'providers' => 
    array (
      0 => 'LamXuanBao\\Auth\\ServiceProvider',
    ),
    'aliases' => 
    array (
      'CoreAuth' => 'LamXuanBao\\Auth\\Facades\\AuthFacade',
    ),
  ),
  'lamxuanbao/setup' => 
  array (
    'providers' => 
    array (
      0 => 'LamXuanBao\\SetUp\\ServiceProvider',
    ),
    'aliases' => 
    array (
      'SetUp' => 'LamXuanBao\\SetUp\\Facades\\SetUpFacade',
    ),
  ),
  'lamxuanbao/shopify' => 
  array (
    'providers' => 
    array (
      0 => 'LamXuanBao\\Shopify\\ServiceProvider',
    ),
    'aliases' => 
    array (
      'Shopify' => 'LamXuanBao\\Shopify\\Facades\\ShopifyFacade',
    ),
  ),
  'laravel/sail' => 
  array (
    'providers' => 
    array (
      0 => 'Laravel\\Sail\\SailServiceProvider',
    ),
  ),
  'laravel/sanctum' => 
  array (
    'providers' => 
    array (
      0 => 'Laravel\\Sanctum\\SanctumServiceProvider',
    ),
  ),
  'laravel/tinker' => 
  array (
    'providers' => 
    array (
      0 => 'Laravel\\Tinker\\TinkerServiceProvider',
    ),
  ),
  'nesbot/carbon' => 
  array (
    'providers' => 
    array (
      0 => 'Carbon\\Laravel\\ServiceProvider',
    ),
  ),
  'nunomaduro/collision' => 
  array (
    'providers' => 
    array (
      0 => 'NunoMaduro\\Collision\\Adapters\\Laravel\\CollisionServiceProvider',
    ),
  ),
  'nunomaduro/termwind' => 
  array (
    'providers' => 
    array (
      0 => 'Termwind\\Laravel\\TermwindServiceProvider',
    ),
  ),
  'spatie/laravel-ignition' => 
  array (
    'providers' => 
    array (
      0 => 'Spatie\\LaravelIgnition\\IgnitionServiceProvider',
    ),
    'aliases' => 
    array (
      'Flare' => 'Spatie\\LaravelIgnition\\Facades\\Flare',
    ),
  ),
  'tymon/jwt-auth' => 
  array (
    'aliases' => 
    array (
      'JWTAuth' => 'Tymon\\JWTAuth\\Facades\\JWTAuth',
      'JWTFactory' => 'Tymon\\JWTAuth\\Facades\\JWTFactory',
    ),
    'providers' => 
    array (
      0 => 'Tymon\\JWTAuth\\Providers\\LaravelServiceProvider',
    ),
  ),
);