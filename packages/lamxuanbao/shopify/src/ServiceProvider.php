<?php

namespace LamXuanBao\Shopify;


use Illuminate\Foundation\AliasLoader;
use LamXuanBao\Shopify\Contracts\ShopifyContract;
use LamXuanBao\Shopify\Facades\ShopifyFacade;
use LamXuanBao\Shopify\Http\Middleware\ShopifyAuthenticate;
use LamXuanBao\Shopify\Http\Middleware\ShopifyRoute;
use LamXuanBao\Shopify\Services\ShopifyService;

class ServiceProvider extends \Illuminate\Support\ServiceProvider
{
    /**
     * @var array
     */
    protected $commands = [];

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->registerProvider();
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot(\Illuminate\Routing\Router $router)
    {
        $this->configProvider();
        $this->middlewareProvider($router);
        $this->routeProvider();
    }

    private function registerProvider()
    {
        $this->app->singleton(
            ShopifyContract::class,
            ShopifyService::class
        );
    }

    private function packagePath()
    {
        return __DIR__ . '/..';
    }
    private function configProvider()
    {
        $this->mergeConfigFrom(
            $this->packagePath() . '/config/shopify.php', 'shopify'
        );
    }

    private function middlewareProvider($router)
    {
        $router->aliasMiddleware('route.shopify', ShopifyRoute::class);
        $router->aliasMiddleware('auth.shopify', ShopifyAuthenticate::class);
    }

    private function routeProvider()
    {
        $this->loadRoutesFrom($this->packagePath() . '/routes/api.php');
    }
}
