<?php

namespace App\Http\Controllers;

use App\Jobs\BotJob;
use App\Models\Bot;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use LamXuanBao\Shopify\Facades\ShopifyFacade;

class ShopifyController extends Controller
{
    public function test()
    {
        $result = ShopifyFacade::runQl('query { products(first: 10, reverse: true) { edges { node { id title handle resourcePublicationOnCurrentPublication { publication { name id } publishDate isPublished } } } } }');
        return response()->json([
            'data' => 'ok 12',
            'session' => 123,
            'shop' => ShopifyFacade::getData(),
            'product' => $result['products'],
        ]);
    }
}
