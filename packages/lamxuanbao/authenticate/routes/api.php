<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use LamXuanBao\Auth\Http\Controllers\AuthController;

Route::prefix('api')->group(function () {
    Route::middleware('auth.api')->get('/me', function (Request $request) {
        return auth()->user();
    });

    Route::controller(AuthController::class)->group(function ($router) {
        Route::post('login', 'login')->name('login');
        Route::post('logout', 'logout')->name('logout')->middleware('auth.api');
        Route::post('refresh', 'refresh')->name('refresh');
//        Route::get('me', 'profile')->name('profile')->middleware('auth.api');
    });
});