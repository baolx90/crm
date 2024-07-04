<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use App\Models\Collection;
use App\Models\Embedding;
use Illuminate\Support\Facades\DB;

Route::get('/{any}', function () {
    return view('app');
})->where('any', '^(?!api).*')->middleware('route.shopify');

//Route::get('', function (Request $request) {
//    $cursor = null;
//    $a = Collection::select(
//        DB::raw('langchain_pg_collection.name as collect_name'),
//        'langchain_pg_embedding.*'
//    )
//        ->join('langchain_pg_embedding', 'langchain_pg_embedding.collection_id', '=', 'langchain_pg_collection.uuid')
//        ->orderBy('collect_name', 'ASC')
//        ->cursorPaginate(2, ['*'], 'cursor', $cursor);
//    dd($a->toArray() , $a->nextCursor()->encode());
////    $a = \CoreAuth::run();
////    dd($a);
//////    \LamXuanBao\Auth\Models\User::create([
//////        'name' => fake()->name(),
//////        'email' => 'baolx@gmail.com',
//////        'email_verified_at' => now(),
//////        'password' => Hash::make('password'),
//////        'remember_token' => Str::random(10),
//////    ]);
////    return json_encode($request->all());
// });
