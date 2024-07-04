<?php

namespace LamXuanBao\SetUp\Facades;

use Illuminate\Support\Facades\Facade;

class SetUpFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'setup';
    }
}
