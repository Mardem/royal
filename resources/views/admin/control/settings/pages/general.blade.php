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
                    <form id="setting-form" action="{{ route('admin.setting.general-save') }}" method="post">
                        @csrf
                        <div class="card" id="settings-card">
                            <div class="card-header">
                                <h4>Configurações gerais</h4>
                            </div>
                            <div class="card-body">
                                <p class="text-muted">Altere informações como endereço, número de telefone e e-mail.</p>
                                <div class="form-group row align-items-center">
                                    <label for="site-title" class="form-control-label col-sm-2 text-md-right">Endereço</label>
                                    <div class="col-sm-6 col-md-9">
                                        <input type="text" name="address" class="form-control" value="{{ setting('address') }}" id="site-title">
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label for="site-title" class="form-control-label col-sm-2 text-md-right">Número de telefone</label>
                                    <div class="col-sm-6 col-md-9">
                                        <input type="text" name="phone" class="form-control" value="{{ setting('phone') }}" data-mask="(99) 9 9999-9999" placeholder="Ex: (99) 9 9999-9999" id="site-title">
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label for="site-title" class="form-control-label col-sm-2 text-md-right">E-mail</label>
                                    <div class="col-sm-6 col-md-9">
                                        <input type="email" name="email" class="form-control" value="{{ setting('email') }}" id="site-title">
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label for="site-title" class="form-control-label col-sm-2 text-md-right">Sobre o tatuador</label>
                                    <div class="col-sm-6 col-md-9">
                                        <textarea name="about" id="editor" class="form-control">{{ setting('about') }}</textarea>
                                   </div>
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
@section('scripts')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js" integrity="sha256-Kg2zTcFO9LXOc7IwcBx1YeUBJmekycsnTsq2RuFHSZU=" crossorigin="anonymous"></script>
@endsection
@push('css')
    <link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote-lite.css" rel="stylesheet">
@endpush
@push('js')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote-lite.js"></script>
    <script>
        $('#editor').summernote({
            placeholder: 'Escreva sobre você aqui',
            tabsize: 2,
            height: 300
        });
    </script>
@endpush
