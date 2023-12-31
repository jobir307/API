<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function() {
    Route::get('user', [App\Http\Controllers\AuthController::class, 'index']);
    Route::post('logout', [App\Http\Controllers\AuthController::class, 'logout']);
    
    Route::controller(App\Http\Controllers\ArticleController::class)->group(function() {
        Route::get('articles', 'index');
        Route::get('article-details/{id}', 'show');
    });
});

Route::post('login', [App\Http\Controllers\AuthController::class, 'login']);
Route::post('register', [App\Http\Controllers\AuthController::class, 'register']);