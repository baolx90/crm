<?php

namespace LamXuanBao\SetUp;


use Illuminate\Support\Facades\Config;

class ServiceProvider extends \Illuminate\Support\ServiceProvider
{
    public function register()
    {
        $this->mergeConfigFrom($this->packagePath() . '/config/setup.php', 'setup');
    }

    public function boot()
    {
        $setup = config('setup');
        if($setup['app'] == false){
            Config::set('setup.app', true );
        }
        $setup = config('setup');
        // dd($setup,123);
//        $this->publishes([
//            $this->packagePath() . '/config/python.php' => config_path('python.php')
//        ], 'config');

        // if ($this->app->runningInConsole()) {
        //     $this->registerCommands();
        // }
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

}
