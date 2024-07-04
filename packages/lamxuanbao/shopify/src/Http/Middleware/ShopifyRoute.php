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

class ShopifyRoute
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
        $hmac = $request->input('hmac');
        $host = $request->input('host');
        $code = $request->input('code');
        $shop = $request->input('shop');
        $session = $request->input('session');
        $timestamp = $request->input('timestamp');
        if (!isset($session) && Route::getCurrentRequest()->path() == '/') {
            if (isset($hmac) && isset($host) && isset($shop) && isset($timestamp)) {
                $shopify = ShopifyFacade::setDomain($request->get('shop'));
                if (isset($code)) {
                    if (!$shopify->auth($request->all())) {
                        abort(404);
                    }
                    $url = $shopify->getDomain() . '/admin/oauth/access_token';
                    $variables = [
                        'client_id' => config('shopify.client_id'),
                        'client_secret' => config('shopify.client_secret'),
                        'code' => $code
                    ];
                    $http = Http::withHeaders([
                        'Content-Type' => 'application/json',
                    ]);
                    $response = $http->post($url, $variables);
                    $result = [
                        'status' => $response->successful(),
                        'data' => $response->collect()->toArray(),
                    ];
                    if ($result['status']) {
                        $accessToken = $result['data']['access_token'];
                        $shopData = $shopify->setEndPoint('shop.json')
                            ->setToken($accessToken)
                            ->runApi('get');
                        $shop = $shopData['data']['shop'];
                        Shop::updateOrCreate(
                            ['id' => $shop['id']],
                            array_merge($shop, ['access_token' => $accessToken]),
                        );
                    }
                    $appUrl = $shopify->appUrl();
                    return redirect($appUrl);
                } else {
                    $installUrl = $shopify->installUrl();
                    return redirect($installUrl);
                }
            }
        }

        return $next($request);
    }
}
