@include('layouts.main.partials.header')

@include('layouts.main.partials.menu_web')
@include('layouts.main.partials.menu-mobile')

<main class="page-content slideout-panel cc_cursor" id="content">
    @stack('content')
</main>
@include('layouts.main.partials.footer')
@inject('recents', 'App\Models\Blog\Post')
@inject('items', 'App\Models\Blog\Post')
@inject('post', 'App\Models\Blog\Post')
