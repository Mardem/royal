@extends('layouts.admin-master')

@section('title')
    Horário de funcionamento
@endsection

@section('content')
    @include('components.notifications')
    <section class="section">
        <div class="section-header">
            <h1>Configuração do horário de funcionamento</h1>
        </div>
        <div class="section-body">
            <div id="output-status"></div>
            <div class="row">
                @include('admin.control.settings.pages.components.left-bar')
                <div class="col-md-8">
                    <form id="setting-form" action="{{ route('admin.setting.working-save') }}" method="post">
                        @csrf
                        <div class="card" id="settings-card">
                            <div class="card-header">
                                <h4>Horários de funcionamento</h4>
                            </div>
                            <div class="card-body">
                                <p>
                                    Configure aqui o horário de funcionamento do seu estabelecimento. <br>
                                    <b>Ao deixar o campo em branco, será marcado como FECHADO</b>
                                </p>

                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="site-title" class="form-control-label text-md-right text-success font-weight-bold">Segunda-feira &mdash; Abertura</label>
                                            <input type="text" name="w_seg_abertura" class="form-control" data-mask="99:99" placeholder="00:00" value="{{ setting('w_seg_abertura') }}" id="site-title">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="site-title" class="form-control-label text-md-right text-danger">Segunda-feira &mdash; Fechamento</label>
                                            <input type="text" name="w_seg_fechamento" class="form-control" data-mask="99:99" placeholder="00:00" value="{{ setting('w_seg_fechamento') }}" id="site-title">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="site-title" class="form-control-label text-md-right text-success font-weight-bold">Terça-feira &mdash; Abertura</label>
                                            <input type="text" name="w_ter_abertura" class="form-control" data-mask="99:99" placeholder="00:00" value="{{ setting('w_ter_abertura') }}" id="site-title">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="site-title" class="form-control-label text-md-right text-danger">Terça-feira &mdash; Fechamento</label>
                                            <input type="text" name="w_ter_fechamento" class="form-control" data-mask="99:99" placeholder="00:00" value="{{ setting('w_ter_fechamento') }}" id="site-title">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="site-title" class="form-control-label text-md-right text-success font-weight-bold">Quarta-feira &mdash; Abertura</label>
                                            <input type="text" name="w_quar_abertura" class="form-control" data-mask="99:99" placeholder="00:00" value="{{ setting('w_quar_abertura') }}" id="site-title">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="site-title" class="form-control-label text-md-right text-danger">Quarta-feira &mdash; Fechamento</label>
                                            <input type="text" name="w_quar_fechamento" class="form-control" data-mask="99:99" placeholder="00:00" value="{{ setting('w_quar_fechamento') }}" id="site-title">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="site-title" class="form-control-label text-md-right text-success font-weight-bold">Quinta-feira &mdash; Abertura</label>
                                            <input type="text" name="w_qui_abertura" class="form-control" data-mask="99:99" placeholder="00:00" value="{{ setting('w_qui_abertura') }}" id="site-title">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="site-title" class="form-control-label text-md-right text-danger">Quinta-feira &mdash; Fechamento</label>
                                            <input type="text" name="w_qui_fechamento" class="form-control" data-mask="99:99" placeholder="00:00" value="{{ setting('w_qui_fechamento') }}" id="site-title">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="site-title" class="form-control-label text-md-right text-success font-weight-bold">Sexta-feira &mdash; Abertura</label>
                                            <input type="text" name="w_sex_abertura" class="form-control" data-mask="99:99" placeholder="00:00" value="{{ setting('w_sex_abertura') }}" id="site-title">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="site-title" class="form-control-label text-md-right text-danger">Sexta-feira &mdash; Fechamento</label>
                                            <input type="text" name="w_sex_fechamento" class="form-control" data-mask="99:99" placeholder="00:00" value="{{ setting('w_sex_fechamento') }}" id="site-title">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="site-title" class="form-control-label text-md-right text-success font-weight-bold">Sábado &mdash; Abertura</label>
                                            <input type="text" name="w_sab_abertura" class="form-control" data-mask="99:99" placeholder="00:00" value="{{ setting('w_sab_abertura') }}" id="site-title">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="site-title" class="form-control-label text-md-right text-danger">Sábado &mdash; Fechamento</label>
                                            <input type="text" name="w_sab_fechamento" class="form-control" data-mask="99:99" placeholder="00:00" value="{{ setting('w_sab_fechamento') }}" id="site-title">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="site-title" class="form-control-label text-md-right text-success font-weight-bold">Domingo &mdash; Abertura</label>
                                            <input type="text" name="w_dom_abertura" class="form-control" data-mask="99:99" placeholder="00:00" value="{{ setting('w_dom_abertura') }}" id="site-title">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="site-title" class="form-control-label text-md-right text-danger">Domingo &mdash; Fechamento</label>
                                            <input type="text" name="w_dom_fechamento" class="form-control" data-mask="99:99" placeholder="00:00" value="{{ setting('w_dom_fechamento') }}" id="site-title">
                                        </div>
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
