<?php
namespace LamXuanBao\Auth\Support\Traits;

use LamXuanBao\Auth\Models\User;
use Illuminate\Http\JsonResponse;

trait Authenticatable
{
    public function responseWithToken(string $access_token)
    {
        return new JsonResponse([
            'access_token' => $access_token,
            'token_type'   => 'bearer',
//                'expires_in'   => auth()->factory()->getTTL() * 60,
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}