@extends('layouts.admin-master')

@section('title')
    Configurações do site
@endsection

@section('content')
    <section class="section">
        <div class="section-header">
            <h1>Administração do site</h1>
        </div>
        <div class="section-body">
            <h2 class="section-title">Ajuste as preferências do seu site</h2>
            <div class="row">
                <div class="col-lg-6">
                    <div class="card card-large-icons">
                        <div class="card-icon bg-primary text-white">
                            <i class="fas fa-cog"></i>
                        </div>
                        <div class="card-body">
                            <h4>Geral</h4>
                            <p>Altere informações como endereço, número de telefone e e-mail.</p>
                            <a href="{{ route('admin.setting.general') }}" class="card-cta">Mudar configurações <i class="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card card-large-icons">
                        <div class="card-icon bg-primary text-white">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="card-body">
                            <h4>Horário de funcionamento</h4>
                            <p>Configure aqui o horário de funcionamento do seu estabelecimento.</p>
                            <a href="{{ route('admin.setting.working') }}" class="card-cta">Mudar configurações <i class="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card card-large-icons">
                        <div class="card-icon bg-primary text-white">
                            <i class="fas fa-search"></i>
                        </div>
                        <div class="card-body">
                            <h4>SEO</h4>
                            <p>Configurações de otimização de mecanismos de pesquisa, como metatags e mídias sociais.</p>
                            <a href="{{ route('admin.setting.seo') }}" class="card-cta">Mudar configurações <i class="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card card-large-icons">
                        <div class="card-icon bg-primary text-white">
                            <i class="fas fa-braille"></i>
                        </div>
                        <div class="card-body">
                            <h4>Integrações</h4>
                            <p>Configure meta-tags, scripts e códigos personalizados para ser incorporados no seu site.</p>
                            <a href="{{ route('admin.setting.embed') }}" class="card-cta">Mudar configurações <i class="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
@endsection
@section('scripts')
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
    <script src="{{ asset('js/delete.js') }}"></script>
@endsection
