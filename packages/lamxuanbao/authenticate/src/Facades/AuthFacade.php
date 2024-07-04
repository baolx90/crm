<?php

namespace LamXuanBao\Auth\Facades;

use Illuminate\Support\Facades\Facade;

class AuthFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'core-auth';
    }
}
