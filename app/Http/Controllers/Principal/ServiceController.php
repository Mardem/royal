<?php

namespace App\Http\Controllers\Principal;

use App\Models\Blog\Post;
use App\Models\Service;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ServiceController extends Controller
{
    public function show()
    {
        $services = Post::service()->paginate();
        return view('principal.servicos', compact('services'));
    }
}
