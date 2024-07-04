<?php

namespace LamXuanBao\Auth;


use Illuminate\Support\Facades\Config;
use LamXuanBao\Auth\Http\Middleware\AuthenticateMiddleware;
use LamXuanBao\Auth\Models\User;
use LamXuanBao\Auth\Services\Auth;

class ServiceProvider extends \Illuminate\Support\ServiceProvider
{
    public function register()
    {
        $this->loadMigrationsFrom($this->packagePath() . '/database/migrations');
        $this->app->singleton('core-auth', function () { return new Auth();});
        // $this->mergeConfigFrom($this->packagePath() . '/config/setup.php', 'setup');
    }

    public function boot(\Illuminate\Routing\Router $router)
    {
        $auth = config('auth');
        Config::set('auth.providers', array_merge($auth['providers'], [
            'lamxuanbao_users' => [
                'driver' => 'eloquent',
                'model' => User::class,
            ],
        ]));
        Config::set('auth.guards', array_merge($auth['guards'], [
            'api' => [
                'driver' => 'jwt',
                'provider' => 'lamxuanbao_users',
            ],
        ]));
        Config::set('auth.defaults', array_merge($auth['defaults'], [
            'guard' => 'api',
            'passwords' => 'lamxuanbao_users',
        ]));
        $this->routeProvider();
        $this->middlewareProvider($router);
    }

    private function packagePath()
    {
        return __DIR__ . '/..';
    }

    private function registerCommands()
    {
        $this->commands([
            // RunPythonCommand::class
        ]);
    }

    private function routeProvider()
    {
        $this->loadRoutesFrom($this->packagePath() . '/routes/api.php');
    }

    private function middlewareProvider($router)
    {
        $router->aliasMiddleware('auth.api', AuthenticateMiddleware::class);
    }

}
