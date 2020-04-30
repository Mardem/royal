<aside id="sidebar-wrapper">
  <div class="sidebar-brand">
    <a href="{{ route('admin.dashboard') }}">{{ env('APP_NAME') }}</a>
  </div>
  <div class="sidebar-brand sidebar-brand-sm">
    <a href="index.html">RC</a>
  </div>
  <ul class="sidebar-menu">
      <li class="menu-header">Dashboard</li>
      <li class="{{ Request::route()->getName() == 'admin.dashboard' ? ' active' : '' }}"><a class="nav-link" href="{{ route('admin.dashboard') }}"><i class="fa fa-columns"></i> <span>Dashboard</span></a></li>

      @if(Auth::user()->can('manage-users'))
          <li class="menu-header">Controle</li>
          <li class="{{ Request::route()->getName() == 'admin.users' ? ' active' : '' }}"><a class="nav-link" href="{{ route('admin.users') }}"><i class="fa fa-users"></i> <span>Usuários</span></a></li>
          <li class="dropdown {{ \App\Support\Helpers\UrlCheck::check('admin/control/pubs*') }}">
              <a href="#" class="nav-link has-dropdown"><i class="ti ti-pencil-alt"></i> <span>Blog</span></a>
              <ul class="dropdown-menu">
                  <li class="{{ \App\Support\Helpers\UrlCheck::check('admin/control/pubs/categories*') }}"><a class="nav-link" href="{{ route('admin.categories.index') }}"><span>Categorias</span></a></li>
                  <li class="{{ \App\Support\Helpers\UrlCheck::check('admin/control/pubs/posts*') }}"><a class="nav-link" href="{{ route('admin.posts.index') }}"><span>Publicações</span></a></li>
              </ul>
          </li>
          <li class="{{ \App\Support\Helpers\UrlCheck::check('admin/control/contacts*') }}"><a class="nav-link" href="{{ route('admin.contacts.index') }}"><i class="ti ti-align-center"></i> <span>Mensagens</span></a></li>
      @endif
    </ul>
    <div class="mt-4 mb-4 p-3 hide-sidebar-mini" style="margin-top: 80px !important;">
        <a href="{{ route('admin.settings.home') }}" class="btn btn-primary btn-lg btn-block btn-icon-split">
            <i class="fas fa-cogs"></i> Configurações
        </a>
    </div>
</aside>

