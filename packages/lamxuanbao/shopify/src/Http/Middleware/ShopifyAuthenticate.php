<?php

namespace LamXuanBao\Shopify\Http\Middleware;

use Closure;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use LamXuanBao\Shopify\Facades\ShopifyFacade;
use LamXuanBao\Shopify\Models\Shop;

class ShopifyAuthenticate
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     *
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->bearerToken()) {
            try {
                $payload = JWT::decode($request->bearerToken(), new Key(config('shopify.client_secret'), 'HS256'));
                $shop = Shop::where(['myshopify_domain' => str_replace('https://','',$payload->dest)])
                    ->firstOrFail();
                ShopifyFacade::setData($shop);
            } catch (\Exception $e) {
                return response()->json(['error' => 'Token is Invalid'], Response::HTTP_UNAUTHORIZED);
            }
        }else{
            return response()->json(['error' => 'Token is Invalid'], Response::HTTP_UNAUTHORIZED);
        }

        return $next($request);
    }
}
