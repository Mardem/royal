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
                    <form id="setting-form" action="{{ route('admin.setting.embed-save') }}" method="post">
                        @csrf
                        <div class="card" id="settings-card">
                            <div class="card-header">
                                <h4>Configurações gerais</h4>
                            </div>
                            <div class="card-body">
                                <p>Altere os códigos incorparados no seu site, como Google Maps, Google 360º, Facebook Pixel e Google Search Console</p>
                                <div class="form-group row align-items-center">
                                    <label for="emAnalytics" class="form-control-label col-sm-2 text-md-right">Google Analytics</label>
                                    <div class="col-sm-6 col-md-9">
                                        <textarea name="emAnalytics" id="emAnalytics" cols="30" rows="10">{{ setting('embed-analytics') }}</textarea>
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label for="emGmaps" class="form-control-label col-sm-2 text-md-right">Google Maps</label>
                                    <div class="col-sm-6 col-md-9">
                                        <textarea name="emGmaps" id="emGmaps" cols="30" rows="10">{{ setting('embed-gmaps') }}</textarea>
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label for="em360" class="form-control-label col-sm-2 text-md-right">Código do 360º</label>
                                    <div class="col-sm-6 col-md-9">
                                        <textarea name="em360" id="em360" cols="30" rows="10">{{ setting('embed-360') }}</textarea>
                                    </div>
                                </div>

{{--                                <hr>--}}
{{--                                <h2 class="section-title">Outros códigos de incorporação</h2>--}}
{{--                                <p class="section-lead">--}}
{{--                                    Não tem o que você precisa? Adicione o seu código abaixo para códigos customizados. Não remova o existente, pois assim será substituído com o novo.--}}
{{--                                </p>--}}
{{--                                <div class="form-group row align-items-center">--}}
{{--                                    <label for="emCustom" class="form-control-label col-sm-2 text-md-right">Código customizado</label>--}}
{{--                                    <div class="col-sm-6 col-md-9">--}}
{{--                                        <textarea name="emCustom" id="emCustom" cols="30" rows="10">{{ setting('embed-custom') }}</textarea>--}}
{{--                                    </div>--}}
{{--                                </div>--}}
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
        editor('emAnalytics');
        editor('emGmaps');
        editor('em360');
        editor('emPixel');
        editor('embed-custom');
    </script>
@endsection
