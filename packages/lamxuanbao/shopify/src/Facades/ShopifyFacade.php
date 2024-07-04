<?php

namespace LamXuanBao\Shopify\Facades;

use Illuminate\Support\Facades\Facade;
use LamXuanBao\Shopify\Contracts\ShopifyContract;
use LamXuanBao\Shopify\Models\Shop;
use LamXuanBao\Shopify\Services\ShopifyService;

/**
 * @method static ShopifyContract installUrl()
 * @method static ShopifyContract appUrl()
 * @method static ShopifyContract auth(array $variables = [])
 * @method static ShopifyContract setToken(string $token)
 * @method static ShopifyContract getToken()
 * @method static ShopifyContract setVersion(string $version)
 * @method static ShopifyContract getVersion()
 * @method static ShopifyContract setDomain(string $domain)
 * @method static ShopifyContract getDomain()
 * @method static ShopifyContract setEndPoint(string $endPoint)
 * @method static ShopifyContract getEndPoint()
 * @method static ShopifyContract setData(Shop $shop)
 * @method static ShopifyContract getData()
 * @method static ShopifyContract runQl(string $graphQuery, array $variables, boolean $resultsAsArray)
 * @method static ShopifyContract runApi(string $method, array $variables = [])
 * @see ShopifyService
 */
class ShopifyFacade extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return ShopifyContract::class;
    }
}
