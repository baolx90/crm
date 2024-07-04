<?php

namespace LamXuanBao\Shopify\Contracts;

use LamXuanBao\Shopify\Models\Shop;

interface ShopifyContract
{
    public function installUrl();

    public function appUrl();
    
    public function auth(array $variables = []);

    public function setToken($token);

    public function getToken();

    public function setVersion($version);

    public function getVersion();

    public function setDomain($domain);

    public function getDomain();

    public function setEndPoint($endPoint);

    public function getEndPoint();

    public function setData(Shop $shop);

    public function getData();

    public function runQl($method, $variables = [], $resultsAsArray = true);

    public function runApi($method, array $variables = []);
}
