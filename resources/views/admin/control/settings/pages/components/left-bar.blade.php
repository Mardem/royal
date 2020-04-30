<div class="col-md-4">
    <div class="card">
        <div class="card-header">
            <h4>Ir para</h4>
        </div>
        <div class="card-body">
            <ul class="nav nav-pills flex-column">
                <li class="nav-item"><a href="{{ route('admin.setting.general') }}" class="nav-link {{ currentActiveMenu('admin/control/general') }}">Geral</a></li>
                <li class="nav-item"><a href="{{ route('admin.setting.seo') }}" class="nav-link {{ currentActiveMenu('admin/control/seo') }}">SEO e Redes sociais</a></li>
                <li class="nav-item"><a href="{{ route('admin.setting.embed') }}" class="nav-link {{ currentActiveMenu('admin/control/embed') }}">Integrações</a></li>
                <li class="nav-item"><a href="{{ route('admin.setting.working') }}" class="nav-link {{ currentActiveMenu('admin/control/working-hours') }}">Horário de funcionamento</a></li>
            </ul>
        </div>
    </div>
</div>
