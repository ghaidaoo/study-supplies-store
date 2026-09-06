<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        $products = Product::with('category')->latest()->get();

        return view('welcome', compact('categories', 'products'));
    }

    public function show($id)
    {
        $product = Product::with('category')->findOrFail($id);

        return view('product-detail', compact('product'));
    }
}