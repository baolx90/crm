<?php
namespace LamXuanBao\Shopify\Http\Controllers;

use Illuminate\Http\Request;
use LamXuanBao\Shopify\Facades\ShopifyFacade;

class ShopifyController extends Controller
{
    public function redirect(Request $request)
    {
        return redirect(config('shopify.redirect_home'));
    }
}