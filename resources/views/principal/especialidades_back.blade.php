
@extends('layouts.main.main')
@section('content')
    <main class="page-content" id="content">
        <!--           = intro-services           /-->
        <section class="intro-banner intro-bg" style="background-image: url('{{ asset('principal/img/upload/intro/home.jpg') }}')" data-stellar-background-ratio="0.8">
            <div class="intro-banner__inner">
                <h1 class="title" style="color: papayawhip;">Especialidades</h1>
            </div>
        </section>
        <!--           end intro-services           /-->
        <!--           = breadcrumbs           /-->
        <div class="breadcrumbs-wrapper" id="breadcrumbs">
            <div class="container">
                <ol class="breadcrumb">
                    <li><a href="{{ route('home-site') }}">Royal Laser</a></li>
                    <li class="active"><span>Especialidades</span></li>
                </ol>
            </div>
        </div>
        <!--           end breadcrumbs           /-->
        <!--           ¬ services-panels           /-->
        <div class="services-panels st-row">
            <div class="service-panel service-panel--gray">
                <div class="container-fluid">
                    <div class="row">
                        <div class="service-panel__cover col-xs-12 col-sm-6"><a class="service-panel__link" href="#"><img src="{{ asset('principal/img/upload/services_2/13.jpg') }}" alt="ABDÔMEN - LINHA ALBA"></a></div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="service-panel__card col-xs-12 col-sm-6 pull-right">
                                <div class="service-panel__top">
                                    <h2 class="title">ABDÔMEN - LINHA ALBA</h2><span class="cost"></span>
                                </div>
                                <div class="service-panel__desc">
                                    <p>Remove até os pelos mais escuros e grossos dessa região;</p>
                                        <p>Também realizamos depilação na Linha Alba (linha média que vai da virilha até o tórax);</p>
                                        <p>Temos equipe formada por especialistas treinados com o uso de protocolo exclusivo da marca, para não sofrer intercorrências ao longo do tratamento.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="service-panel">
                <div class="container-fluid">
                    <div class="row">
                        <div class="service-panel__cover col-xs-12 col-sm-6 pull-right"><a class="service-panel__link" href="#"><img src="{{ asset('principal/img/upload/services_2/545.jpg') }}" alt="VIRILHA COMPLETA - VIRILHA ÍNTIMA - VIRILHA SIMPLES"></a></div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="service-panel__card col-xs-12 col-sm-6">
                                <div class="service-panel__top">
                                    <h2 class="title">VIRILHA COMPLETA - VIRILHA ÍNTIMA - VIRILHA SIMPLES</h2><span class="cost"></span>
                                </div>
                                <div class="service-panel__desc">
                                   <p>O sonho de consumo de toda mulher;</p>
                                    <p> O tratamento é a melhor alternativa para quem sofre com alergias pós depilação convencional, pelos encravados ou com quantidade excessiva de pelos na região;</p>
                                    <p>Deixa a pele com aspecto mais saudável (mais clara e lisinha);</p>
                                    <p> Uma sessão dura em média 10 minutos, sendo que nos primeiros meses é recomendável um retorno a cada 30 dias;</p>
                                    <p>Após a 7ª sessão, o retorno pode ser feito após 2 a 4 meses ou conforme orientação profissional;</p>
                                    <p>Área com forte influência hormonal, portanto existe a possibilidade de crescimentos de alguns pelos esporadicamente após o tratamento.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="service-panel service-panel--gray">
                <div class="container-fluid">
                    <div class="row">
                        <div class="service-panel__cover col-xs-12 col-sm-6"><a class="service-panel__link" href="#"><img src="{{ asset('principal/img/upload/services_2/15.jpg') }}" alt="AXILAS"></a></div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="service-panel__card col-xs-12 col-sm-6 pull-right">
                                <div class="service-panel__top">
                                    <h2 class="title">AXILAS</h2><span class="cost"></span>
                                </div>
                                <div class="service-panel__desc">
                                    <p>Uma das áreas mais procuradas no tratamento de depilação a laser, por ser uma região de alta transpiração e crescimento frequente de pelos;</p>
                                    <p>Com nosso exclusivo protocolo Royal Laser Depilação, o tratamento dura em média 5 minutos e proporciona sensação de bem-estar por semanas.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!--           end services-panels           /-->
        <!--           ¬ services-menu           /-->

        <!--           end services-menu           /-->
    </main>
    @endsection
