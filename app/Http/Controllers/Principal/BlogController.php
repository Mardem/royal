<?php

namespace App\Http\Controllers\Principal;

use App\Models\Blog\Category;
use App\Models\Blog\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BlogController extends Controller
{
    public function index()
    {
        $posts = Post::blog()->paginate(10);
        $categories = Category::inRandomOrder()->limit(15)->get();
        return view('principal.blog.partials.index', compact('posts', 'categories'));
    }

    public function show($slug)
    {
        $posts = Post::paginate(20);
        $post = Post::where('slug', '=', $slug)->firstOrFail();
        return view('principal.blog.partials.show', compact('post', 'posts'));
    }
}
