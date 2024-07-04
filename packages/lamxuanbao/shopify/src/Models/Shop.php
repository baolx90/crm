<?php

namespace LamXuanBao\Shopify\Models;

use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    protected $fillable = [
        'id',
        'name',
        'email',
        'domain',
        'myshopify_domain',
        'access_token'
    ];

    protected $hidden = [
        'access_token'
    ];
}