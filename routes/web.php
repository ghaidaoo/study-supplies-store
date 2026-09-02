<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

// الصفحة الرئيسية (عرض المنتجات والتصنيفات)
Route::get('/', [ProductController::class, 'index'])->name('home');

// صفحة تفاصيل المنتج
Route::get('/product/{id}', [ProductController::class, 'show'])->name('product.show');

// صفحة السلة
Route::get('/cart', function () {
    return view('cart');
})->name('cart');