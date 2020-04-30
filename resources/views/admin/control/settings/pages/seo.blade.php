@extends('layouts.admin-master')

@section('title')
    Configurações do site
@endsection

@section('content')
    @include('components.notifications')
    <section class="section">
        <div class="section-header">
            <h1>Administração do site</h1>
        </div>
        <div class="section-body">
            <div id="output-status"></div>
            <div class="row">
                @include('admin.control.settings.pages.components.left-bar')
                <div class="col-md-8">
                    <form id="setting-form" action="{{ route('admin.setting.seo-save') }}" method="post">
                        @csrf
                        <div class="card" id="settings-card">
                            <div class="card-header">
                                <h4>Configurações SEO</h4>
                            </div>
                            <div class="card-body">
                                <p>Configurações de otimização de mecanismos de pesquisa, como metatags e mídias sociais.</p>
                                <div class="form-group row align-items-center">
                                    <label for="site-title" class="form-control-label col-sm-3 text-md-right">
                                        Descrição do site
                                    </label>
                                    <div class="col-sm-9 col-md-9">
                                        <input type="text" name="site_description" class="form-control" value="{{ setting('site_description') }}" id="site-title">
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label for="facebook" class="form-control-label col-sm-3 text-md-right">
                                        URL do Facebook
                                    </label>
                                    <div class="col-sm-9 col-md-9">
                                        <input type="text" name="facebook" class="form-control" value="{{ setting('facebook') }}" id="facebook">
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label for="instagram" class="form-control-label col-sm-3 text-md-right">
                                        URL do Instagram
                                    </label>
                                    <div class="col-sm-9 col-md-9">
                                        <input type="text" name="instagram" class="form-control" value="{{ setting('instagram') }}" id="instagram">
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label for="twitter" class="form-control-label col-sm-3 text-md-right">
                                        URL do Twitter
                                    </label>
                                    <div class="col-sm-9 col-md-9">
                                        <input type="text" name="twitter" class="form-control" value="{{ setting('twitter') }}" id="twitter">
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label for="twitter" class="form-control-label col-sm-3 text-md-right">
                                        URL do LinkedIn
                                    </label>
                                    <div class="col-sm-9 col-md-9">
                                        <input type="text" name="linkedin" class="form-control" value="{{ setting('linkedin') }}" id="twitter">
                                    </div>
                                </div>
                                <hr>
                                <h2 class="section-title">Link direto do Google Map</h2>
                                <p class="section-lead">
                                    Pode ser utilizado para abrir o aplicativo do Google Maps com a rota (se estiver usando telefone) ao clicar.
                                </p>

                                <div class="form-group row align-items-center">
                                    <label for="g-maps" class="form-control-label col-sm-3 text-md-right">
                                        URL do Google Maps
                                    </label>
                                    <div class="col-sm-9 col-md-9">
                                        <input type="text" name="gmaps_link" class="form-control" value="{{ setting('gmaps_link') }}" id="g-maps">
                                    </div>
                                </div>
                            <div class="card-footer bg-whitesmoke text-md-right">
                                <button class="btn btn-primary" id="save-btn">Salvar alterações</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
@endsection
@push('css')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/codemirror.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/theme/material.min.css" />
@endpush
@section('scripts')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/codemirror.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/mode/javascript/javascript.min.js"></script>
    <script src="{{ asset('js/codemirror.js') }}"></script>
    <script>
        editor('g-analytics');
        editor('gs-console');
    </script>
@endsection
