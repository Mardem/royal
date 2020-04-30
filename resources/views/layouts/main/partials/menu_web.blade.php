@inject('items', 'App\Models\Blog\Post')

<body class="page-home animsition" id="rsHome">
    
    <div class="float-button float-right-button-sob">
    <a href="https://api.whatsapp.com/send?phone=55619800-7328&amp;text=Olá" target="_blank"><img src="https://clinicaandros.com.br/principal/images/whats.svg" width="70" alt=""></a>
</div>

<div class="over-page" id="overPage"></div>
<!--           = mobile menu           /-->

<!--           end mobile menu           /-->
<!--           = Page Header           /-->
<header class="page-header" id="panelHeader">
    <nav class="navbar navbar-default" id="navbar">
        <div class="navbar__topline">
            <div class="navbar-header container"><a class="navbar-brand" href="{{ route('home-site') }}"><img class="logo svg img-responsive"  style="height: 75px;" src="{{ asset('principal/img/logo.svg') }}"
                            alt="Bem vindo a Royal Laser"/></a><a class="navbar__toggle-reservation button" href="#"
                                                                  data-toggle="modal" data-target="#modal-inquiry"><i
                            class="fa fa-bookmark-o"></i>Agendamento</a><a class="menu-trigger visible-xs" id="trigger"
                                                                           href="#" role="button"><span
                            class="menu-trigger__elem"></span></a>
                <ul class="social-list pull-right hidden-xs">
                    <li><a class="fa-stack fa-lg" href="https://www.instagram.com/royallaseroficial/    "><i class="fa fa-circle fa-stack-2x"></i><i
                                    class="icon fa fa-instagram fa-stack-1x fa-inverse"></i></a></li>
                    <li><a class="fa-stack fa-lg" href="https://www.facebook.com/royallaserbsb/"><i class="fa fa-circle fa-stack-2x"></i><i
                                    class="icon fa fa-facebook fa-stack-1x fa-inverse"></i></a></li>

                </ul>
            </div>
        </div>
        <div class="navbar__menu">

            <div class="container">

                <ul class="nav navbar-nav navbar-menu hidden-xs">

                    <li><a href="{{ route('home-site') }}"><span>Home</span></a></li>

                        <li><a href="{{ route ('servicos') }}"><span>Serviços</span></a>

                    <li><a href="{{ route('blog') }}"><span>Blog</span></a></li>
                </ul>

                <a class="navbar__toggle-reservation button" href="#" data-toggle="modal"
                   data-target="#modal-inquiry"><i class="fa fa-bookmark-o"></i>Agendamento</a>
            </div>
        </div>
    </nav>
</header>


