@extends('layouts.main.main')

@inject('post', 'App\Models\Blog\Post')
@inject('recents', 'App\Models\Blog\Post')

@push('content')

<main class="page-content" id="content">
    <!--           = intro-blog           /-->
    <section class="intro-banner intro-bg" style="background-image: url('{{ asset('principal/img/upload/intro/home.jpg') }}');">
        <div class="intro-banner__inner">
            <h1 class="title" style="color: #c3acac;">Blog</h1>
        </div>
    </section>
    <!--           end intro-blog           /-->
    <!--           = breadcrumbs           /-->
    <div class="breadcrumbs-wrapper" id="breadcrumbs">
        <div class="container">
            <ol class="breadcrumb">
                <li><a href="{{ route('home-site') }}">Royal Laser</a></li>
                <li class="active"><span>Blog</span></li>
            </ol>
        </div>
    </div>
    <!--           end breadcrumbs           /-->
    <!--           = blog-content wrapper           /-->
    <div class="blog-post__wrapper">
        <div class="container">
            <div class="row">
                <!--           = blog-post-list           /-->
                <div class="col-md-8 col-lg-9">
                    <div class="blog-post-row">



                        @forelse($posts as $post)
                        <article class="blog-post blog-post-item">
                            <div class="blog-post__row">
                                <div class="blog-post__content">
                                    <h2><a href="{{ route('blog.show', $post->slug) }}">{{ $post->title }}</a></h2>
                                    <figure class="blog-post__thumb text-center"><a href="{{ route('blog.show', $post->slug) }}"><img class="img-responsive" src="{{ asset($post->path ?? $post->thumb_path) }}"  id="blog-img" alt="{{ $post->title }}"></a></figure>
                                    <p>{!! \Illuminate\Support\Str::limit(strip_tags($post->content), 177) !!}</p>
                                </div>
                                <div class="blog-post__top">
                                    <ul class="blog-post__meta">

                                        <li>
                                            <div class="flag date">
                                                <time datetime="2018-06-02">{{ $post->created_at->format('d/m/Y') }}</time>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </article>
                            @empty
                            <h2 class="text-center">Não encontramos nada por aqui...</h2>
                            <p>Tente realizar uma busca</p>
                            <form action="{{ route('blog') }}" method="get">
                                <div class="input-group" style="border: 1px solid #c0c0c0">
                                    <input type="text" placeholder="Procure aqui" name="q" class="form-control search-input">
                                    <span class="input-group-btn" style="border-left: 1px solid #eeeeee;">
                                    <button type="submit" class="btn search-button"><i class="fa fa-search"></i></button>
                                    </span>
                                </div>
                            </form>
                        @endforelse


                        <div class="col-md-12">

                            {{ $posts->links() }}

                        </div>
                    </div>
                </div>
                <!--           end blog-post-list           /-->
                <!--         = sidebar         *-->
                <div class="col-md-4 col-lg-3">
                    <aside class="blog-sidebar">
                        <section class="blog-sidebar__subscribe">
                            <h4 class="blog-sidebar__title">Descrição</h4>
                            <p>
                                Seja o primeiro a saber das ofertas especiais e promoções de descontos do Royal Laser!!</p>
                            <form class="subscribe-form" action="{{ route('contato.store') }}" method="POST" autocomplete="off">
                                @csrf
                                <div class="form-group"><span class="label-control">Seu e-mail</span>
                                    <input class="form-control" id="mail" type="email" name="email">
                                </div>
                                <button class="btn btn--darker" type="submit">Enviar</button>
                            </form>
                        </section>

                        <section class="blog-sidebar__category">
                            <h4 class="blog-sidebar__title">Popular</h4>
                            <ul class="sidebar-posts">
                                @foreach($recents->limit(6)->blog()->get() as $recent)
                                <li class="sidebar-post"><a class="sidebar-post__link" href="{{ route('blog.show', $recent->slug) }}">
                                        <div class="sidebar-post__top">
                                            <div class="sidebar-post__thumb"><img class="img-responsive" src="{{ $recent->thumb_path == '' ? 'https://placehold.it/75x75' : asset($recent->thumb_path) }}" alt="post-img"></div>
                                            <div class="sidebar-post__desc">{{ $recent->title }}</div>
                                        </div>
                                        <div class="sidebar-post__stat">
                                            <time class="date" datetime="2018-06-27">{{ $recent->created_at->format('d/m/Y') }}</time>
                                        </div></a>
                                </li>
                                @endforeach
                            </ul>
                        </section>
                        <section class="blog-sidebar__category">
                            <h4 class="blog-sidebar__title">Tags</h4>
                            <ul class="blog-tags blog-tags--sidebar">
                                <li><a href="#">Beleza</a></li>
                                <li><a href="#">Tratamento</a></li>
                                <li><a href="#">-Dor</a></li>
                                <li><a href="#">+Conforto</a></li>
                                <li><a href="#">estética</a></li>
                                <li><a href="#">perfeição</a></li>
                                <li><a href="#">essência</a></li>

                            </ul>
                        </section>
                    </aside>
                </div>
                <!--         end  sidebar         /-->
            </div>
        </div>
    </div>
    <!--           end blog-content wrapper           /-->
</main>

@endpush
