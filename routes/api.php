<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ShopifyController;

Route::get('/bao-test', [ShopifyController::class, 'test'])
    ->middleware('auth.shopify');