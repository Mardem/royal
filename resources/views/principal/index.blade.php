@extends('layouts.main.main')

@push('content')
<!--           end Page Header           /-->
<main class="page-content" id="content">
    <!--           = section intro           /-->
    <section class="intro-banner intro-bg" style="background-image: url('{{ asset('principal/img/upload/intro/banner.png') }}');">
        <div class="intro-banner__inner">
            <div class="extra-title">
                <h4 class="extra-title__top">Bem Vindo a</h4>
                <h1>Royal Laser</h1>
                <p class="extra-title__decor"><img class="svg brand-decor" src="{{ asset('principal/img/decor.svg') }}" alt="Decoration"></p>
                <p class="small">Você segura com o seu corpo</p>
            </div>
        </div>
    </section>
    <!--           end section intro           /-->
    <!--           ¬ features           /-->
    <div class="hm-features">
        <div class="container-fluid">
            <div class="hm-features__row row">
                <div class="hm-features__item col col-xs-6 col-sm-4">
                    <figure class="hm-features__icon"><img class="svg img-responsive" src="{{ asset('principal/img/icons/hot-stone-massage.svg') }}" alt="Stone massage"></figure>
                    <h2>Liberdade</h2>
                </div>
                <div class="hm-features__item col col-xs-6 col-sm-4">
                    <figure class="hm-features__icon"><img class="svg img-responsive" src="{{ asset('principal/img/icons/relax.svg') }}" alt="Whirlpool"></figure>
                    <h2>Economia</h2>
                </div>
                <div class="hm-features__item col col-xs-6 col-sm-4">
                    <figure class="hm-features__icon"><img class="svg img-responsive" src="{{ asset('principal/img/icons/tool.svg') }}" alt="Aromatherapy"></figure>
                    <h2>Conforto</h2>
                </div>
                <div class="hm-features__item col col-xs-6 col-sm-4">
                    <figure class="hm-features__icon"><img class="svg img-responsive" src="{{ asset('principal/img/icons/bottle.svg') }}" alt="Oil massage"></figure>
                    <h2>Segurança</h2>
                </div>
                <div class="hm-features__item col col-xs-6 col-sm-4">
                    <figure class="hm-features__icon"><img class="svg img-responsive" src="{{ asset('principal/img/icons/people.svg') }}" alt="Finnish sauna"></figure>
                    <h2>Resultado</h2>
                </div>
            </div>
        </div>
    </div>
    <section class="hm-history">
        <div class="panels-wrapper">
            <div class="container">
                <h1 class="title-hidden">title</h1>
                <div class="row">
                    <div class="col-xs-12 col-sm-6">
                        <article class="panel-board">
                            <header>
                                <h2 class="h1 panel-board__title">Depilação a Laser</h2>
                                <h6 class="sub">A Royal Laser atende todos os tipos de pele, inclusive as bronzeadas</h6>
                            </header>
                            <div class="panel-board__main">
                                <p>A depilação a laser é ideal para quem quer se ver livre de lâminas e ceras. Com o melhor custo benefício, o procedimento te garante qualidade a longo prazo, é praticamente indolor e elimina os pêlos deixando sua pele lisa e macia por muito mais tempo. Além de ser possível fazer em qualquer pele de qualquer tonalidade, visto que o Brasil apresenta uma diversidade enorme de tons de pele. A nossa tecnologia é a que melhor se adapta para atender esta demanda.</p>
                                <p>O tratamento Royallaser garante 100% de eficácia na remoção dos pelos, dos tons mais claros de pele até os mais escuros.</p>
                            </div>
                            <footer class="panel-board__bottom"><a class="btn btn--warn" href="#agendamento">Confira</a></footer>
                        </article>
                    </div>
                    <div class="col-xs-12 col-sm-6 hm-history__slides panel-wd panel-wd--right">
                        <div class="hm-history-carousel owl-theme owl-carousel js-history-carousel">
                            <div class="panel-wd__slide"><img src="{{ asset('principal/img/upload/slides/5905.jpg') }}" alt="#"></div>
                            <div class="panel-wd__slide"><img src="{{ asset('principal/img/upload/slides/4965.jpg') }}" alt="#"></div>
                            <div class="panel-wd__slide"><img src="{{ asset('principal/img/upload/slides/3089.jpg') }}" alt="#"></div>

                        </div>
                        <!--           ¬ control panel           /-->
                        <div class="control-panel control-panel--mobile">
                            <button class="control-panel__nav prev"><i class="fa fa-angle-left"></i></button>
                            <button class="control-panel__nav next"><i class="fa fa-angle-right"></i></button>
                            <div class="control-panel__dots js-pagination"></div>
                        </div>
                        <!--           end control panel           /-->
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="about-story">
        <div class="panels-wrapper panels-wrapper--dark">
            <div class="container">
                <div class="row">
                    <!--           ¬ panel-wide           /-->
                    <div class="col-xs-12 col-sm-6 about-story__slides panel-wd panel-wd--dark">
                        <div class="about-story__slide" style="background-image: url(assets/img/upload/about/about_bg.jpg);">
                            <figure class="about-story__img hidden-xs"><img src="{{ asset('principal/img/upload/about/3.png') }}" alt="Full Body Massage"></figure>
                            <h3 class="about-story__name pull-right hidden-xs">Depilação e Estética<small></small></h3>
                            <div class="triangle hidden-xs"></div>
                        </div>
                    </div>
                    <!--           end panel-wide           /-->
                    <!--           ¬ panel-board           /-->
                    <div class="col-xs-12 col-sm-6 col-sm-push-6">
                        <article class="panel-board panel-board--right">
                            <header>
                                <h2 class="h1 panel-board__title">Nosso método</h2>
                                <h6 class="sub">Usamos o Laser de Diodo para maior segurança dos nossos clientes</h6>
                            </header>
                            <div class="panel-board__main">
                                <p>O laser de diodo possui comprimento de onda de 800-810 nm e atinge especificamente a melanina (cromóforo alvo) do folículo piloso, sem causar danos a pele. Ele atua somente sobre os pelos em fase de crescimento (anàgena).</p>
                                <p>
E devido ao ciclo natural dos pelos, nem todos estarão nessa fase no momento da sessão. E como os pelos em fase de repouso (telógena) são menos susceptíveis, é preciso de 3 a 5 sessões, com intervalos de 30 dias, para se conseguir resultados de até 100%.
</p>
                            </div>
                            
                        </article>
                    </div>
                    <!--           end panel-board           /-->
                </div>
            </div>
        </div>
    </section>
    <div class="hm-stat st-row st-row--bg">
        <div class="bg-pattern">
            <div class="jarallax prlx" style="background-image: url(assets/img/bg-section.png);"></div>
        </div>

    </div>

    
   <section class="hm-testimonials our-clients">
        <div class="container">
          <div class="hr-heading rotate">
            <h2 class="h1">Avaliações</h2><small>Algumas avaliações dos nossos clientes satisfeitos</small>
          </div>
        </div>
        <div class="st-row intro-bg st-row--hr" style="background-image: url({{ ('principal/img/upload/intro/testimonials.jpg') }});">
          <div class="overlay"></div>
          <div class="our-clients__inner">
            <div class="our-clients__wrapper container">
              <!--           ¬ carousel           /-->
              <div class="our-clients-carousel owl-theme owl-carousel js-client-carousel">
             
         
                <div class="our-clients__item">
                  <div class="our-clients__main">
                    <blockquote>
                      
                      <p>Na primeira sessão já notei os resultados e tenho ficado bastante satisfeita. Um espaço agradável, confortável, atendimento humanizado e excelente localização! Recomendo!</p>
                      <footer>
                        <cite title="Thaynara Leão">Thaynara Leão</cite>
                         <label>&#9733;&#9733;&#9733;&#9733;&#9733;</label>
                      </footer>
                    </blockquote>
                  </div>
                  <div class="our-clients__thumb"><img class="img-responsive" src="{{ asset('principal/img/teste.svg')}}" alt="helpful and friendly staff..."></div>
                </div>
                <div class="our-clients__item">
                  <div class="our-clients__main">
                    <blockquote>
                      
                      <p>Ótima clínica, ótimo atendimento, as atendentes super gentil, muito profissional super recomendo o serviço.</p>
                      <footer>
                        <cite title="Henrique Rodrigues">Henrique Rodrigues</cite>
                         <label>&#9733;&#9733;&#9733;&#9733;&#9733;</label>
                      </footer>
                    </blockquote>
                  </div>
                  <div class="our-clients__thumb"><img class="img-responsive" src="{{ asset('principal/img/teste.svg')}}" alt="helpful and friendly staff..."></div>
                </div>
                <div class="our-clients__item">
                  <div class="our-clients__main">
                    <blockquote>
                      
                      <p>Adorei o serviço, ótimo atendimentos e profissionais!</p>
                      <footer>
                        <cite title="Ana Paula Campo Soares">Ana Paula Campo Soares</cite>
                         <label>&#9733;&#9733;&#9733;&#9733;&#9733;</label>
                      </footer>
                    </blockquote>
                  </div>
                  <div class="our-clients__thumb"><img class="img-responsive" src="{{ asset('principal/img/teste.svg')}}" alt="helpful and friendly staff..."></div>
                </div>
              </div>
              
              <!--           ¬ control panel           /-->
              
              <!--           end control panel           /-->
            </div>
          </div>
        </div>
      </section>
       <div class="room-list st-row">
        <div class="container">
            <div class="hr-heading rotate">
                <h2 class="h1">Nosso Blog</h2>
                <small>Confira as últimas notícias</small>
            </div>
            <div class="row">
                <div class="owl-theme owl-carousel js-client-carousel" id="owl-blog">
                        @foreach($posts as $post)
                     
                <div class="room-list__item col col-xs-6 col-sm-4">
                    <div class="room-banner">
                        <figure class="room-banner__img"><img class="img-responsive" src="{{ asset($post->thumb_path ?? $post->path) }}"  style="width: 88%;" alt="Imagem Royal"></figure>
                        <div class="room-banner__footer">
                            <div class="row flex-row">
                                <div class="col-auto">
                                    <h4 class="room-banner__title">{{ $post->title }}</h4>
                                </div>

                            </div>
                        </div>
                        <div class="room-banner__more">
                            <p>{!! \Illuminate\Support\Str::limit(strip_tags($post->content), 113) !!}</p><a class="link-more" href="{{ route('blog.show', $post->slug) }}"><span>Leia mais</span><i class="fa fa-angle-double-right"></i></a>
                        </div>
                    </div>
                </div>
                @endforeach
                </div>
                
                  @foreach($posts as $post)

                    <div class="room-list__item col col-xs-6 col-sm-4" id="blog-mobile">
                        <div class="room-banner">
                            <figure class="room-banner__img"><img class="img-responsive" src="{{ asset($post->thumb_path ?? $post->path) }}" alt="Imagem Royal"></figure>
                            <div class="room-banner__footer">
                                <div class="row flex-row">
                                    <div class="col-auto">
                                        <h4 class="room-banner__title">{{ $post->title }}</h4>
                                    </div>

                                </div>
                            </div>
                            <div class="room-banner__more">
                                <p>{!! \Illuminate\Support\Str::limit(strip_tags($post->content), 113) !!}</p><a class="link-more" href="{{ route('blog.show', $post->slug) }}"><span>Leia mais</span><i class="fa fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                @endforeach
                
                



            </div>
        </div>
    </div>
      <div class="hm-stat st-row st-row--bg">
        <div class="bg-pattern">
            <div class="jarallax prlx" style="background-image: none;" data-jarallax-original-styles="background-image: url(assets/img/bg-section.png);"><div id="jarallax-container-2" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; pointer-events: none; z-index: -100;"><div style="background-position: 50% 50%; background-size: auto; background-repeat: repeat; background-image: url(&quot;https://agenciavtec.com/novo/assets/img/bg-section.png&quot;); position: fixed; top: 0px; left: 0px; width: 1349px; height: 218.228px; overflow: hidden; pointer-events: none; margin-top: 80.3859px; transform: translate3d(0px, 44.6766px, 0px);"></div></div></div>
        </div>

    </div>
     
    <!--           ¬ map           /-->
    
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.33183213782!2d-48.04600028514447!3d-15.839147489023345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a33276c875313%3A0x37a039bb71258182!2sRoyal%20Laser!5e0!3m2!1spt-BR!2sbr!4v1587609352665!5m2!1spt-BR!2sbr" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    <!--           end map           /-->
</main>
@endpush


