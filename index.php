<?php

    session_start();
    header("Content-type: text/html; charset=UTF-8");

    include('src/auth/approve_post.php');

    require_once 'configDB.php';
    require_once 'src/utils.php';

    include('src/Newser.php');
    include('src/Articler.php');
    include('src/Exhibitioner.php');
    include('src/Videomaker.php');
    include('src/Documenter.php');

    $newser       = new Newser();
    $articler     = new Articler();
    $exhibitioner = new Exhibitioner();
    $videomaker   = new Videomaker();
    $documenter   = new Documenter();

?>

<!doctype html>
<html lang="ru-RU">

<head>

    <!-- Main tags -->
    <base href="index.html">

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="питомник кошек норвежская лесная кошка питомник кошек в москве купить котенка купить норвежского котенка в москве путешествие в икстлан">

    <!-- For SEO -->
    <meta name="yandex-verification" content="2b77fcebba7970e1" />
    <meta name="google-site-verification" content="777lyFpb7Bt6V-qQo-BYgEUfQm37uKZwuyGtcZbJGRE" />
    <meta name='wmail-verification' content='158ac4f04dea3b87edd9c7bdfb1da775' />
    <meta name="msvalidate.01" content="DCD224CD8A3A7C635BAC1694873730D2" />

    <link rel="canonical" href="http://move-ixtlan.ru" />

    <!-- For localization -->
    <link rel="alternate" href="http://move-ixtlan.ru" hreflang="ru-ru" />

    <!-- navigation icon -->
    <link rel="shortcut icon" href="images/navigation.png" type="image/x-icon">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
        crossorigin="anonymous">

    <link rel="stylesheet" href="css/style.css" type="text/css" />

    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
        (function (d, w, c) {
            (w[c] = w[c] || []).push(function () {
                try {
                    w.yaCounter51380782 = new Ya.Metrika2({
                        id: 51380782,
                        clickmap: true,
                        trackLinks: true,
                        accurateTrackBounce: true,
                        webvisor: true
                    });
                } catch (e) { }
            });

            var n = d.getElementsByTagName("script")[0],
                s = d.createElement("script"),
                f = function () { n.parentNode.insertBefore(s, n); };
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://mc.yandex.ru/metrika/tag.js";

            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
            } else { f(); }
        })(document, window, "yandex_metrika_callbacks2");
    </script>
    <noscript>
        <div><img src="https://mc.yandex.ru/watch/51380782" style="position:absolute; left:-9999px;" alt="" /></div>
    </noscript>
    <!-- /Yandex.Metrika counter -->

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-130188408-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-130188408-1');
    </script>
    <!-- /Global site tag (gtag.js) - Google Analytics -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" ></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm"
        crossorigin="anonymous"></script>

    <!-- fancyBox CSS -->
    <link href="css/jquery.fancybox.min.css" rel="stylesheet">
    <script src="plugins/jquery.fancybox.min.js"></script>

    <!-- OWL CAROUSEL -->
    <link rel="stylesheet" href="css/owl/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl/owl.theme.default.min.css">

    <script src="plugins/owl/owl.carousel.min.js"></script>

    <!-- Dropzone.JS -->
    <link href="libs/jslibs/dropzone/dropzone.css" type="text/css" rel="stylesheet" />
    <script src="libs/jslibs/dropzone/dropzone.js"></script>

    <!-- entropizer.JS -->
    <script type="text/javascript" src="libs/jslibs/entropizer/entropizer.js"></script>
    
    <!-- Optional JavaScript -->
    <script defer src="dist/common.js"></script>
    <script defer src="dist/index.js"></script>

    <title>Питомник норвежских лесных кошек Ixtlan в Москве</title>

</head>

<body>

    <?php 
        echo Utils::getPreloader();
        echo Utils::getModalSignUpForm();
        echo Utils::getModalApproveEmail();
        echo Utils::getModalEditUserSettings();
    ?>

    <header class="container my-1">
        
        <nav class="navbar navbar-expand-md navbar-dark bg-primary fixed-top mx-2">
            <a class="navbar-brand" href="#">
                <img title="котята норвежской лесной кошки цена норвежские лесные котята" src="images/navigation.png"
                    alt="норвежские лесные котята">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="index.php">Главная
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="cats_females.php">Кошки </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="cats_males.php">Коты </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="kitty.php">Котята </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="articles.php">Статьи </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="comments.php">Отзывы </a>
                    </li>

                </ul>

                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Язык
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <div id="lang_rus" class="d-flex align-items-center justify-content-between mx-2 p-2" style="background-color: rgba(0,0,0,.03); cursor: pointer;">
                                <span>Русский</span>
                                <img title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва" class="img-fluid"
                                    src="images/lang/rusflag1.png" alt="питомник норвежской продажа норвежской котята норвежской">
                            </div>
                            <div id="lang_eng" class="d-flex align-items-center justify-content-between mx-2 p-2" style="background-color: rgba(0,0,0,.03); cursor: pointer;">
                                <span>Английский</span>
                                <img title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва" class="img-fluid"
                                    src="images/lang/amflag1.png" alt="питомник норвежской продажа норвежской котята норвежской">
                            </div>
                        </div>
                    </li>
                    <div id="lang_current" class="form-inline ml-1 mr-2">
                        <!-- TODO взять язык по умолчанию из БД -->
                        <img src="images/lang/rusflag1.png">
                    </div>

                    <?php echo Utils::authSection(); ?>

                    <!--<button id="send" type="button" class="btn btn-light form-inline mr-3">Отправить</button>-->

                    <section class="form-inline">
                        <input id="hamburger" class="hamburger" type="checkbox"/>
                        <label class="hamburger" for="hamburger">
                            <i></i>
                        </label>
                        <div class="drawer-list">
                            <ul class="addititional_menu">
                                <li><a href="#">dashboard</a></li>
                                <li><a href="#">notifications</a></li>
                                <li><a href="#">system administration</a></li>
                                <li><a href="#">support</a></li>
                            </ul>
                        </div>
                    </section>

                </ul>               

            </div>
            
        </nav>

        <div class="container" style="margin-top: 4rem;">
            <img title="купить норвежского котенка в москве норвежская лесная кошка особенности характера характер норвежской лесной кошки"
                src="images/Caption.png" alt="котенок норвежской лесной" class="mx-auto d-block img-fluid">
            <h1 class="text-center">Питомник норвежских лесных кошек в Москве</h1>
        </div>

    </header>

    <main class="container">

        <section class="d-flex bd-highlight">

            <section id="newsArea" class="p-2 bd-highlight">

                <div class="container-fluid">

                    <h4 class="text-center align-self-center">Новости</h4>

                    <?php 
                        $newser->show_Main_Newses();
                        $newser->show_Editor_Form();
                    ?>

                    <div id="accordion">
                        <?php $newser->show_Newses(true, "#accordion"); ?>
                    </div>

                    <button class="btn btn-outline-primary btn-block my-1" type="button" data-toggle="collapse"
                        data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Архив
                    </button>

                    <div class="collapse" id="collapseExample">
                        <div id="accordionArh">
                            <?php $newser->show_Newses(false, "#accordionArh"); ?>
                        </div>
                    </div>
                </div>

            </section>

            <!-- TODO Что то сделать с прыгающей панелью новостей при переключении подушек-->

            <section id="mainArea" class="p-2 flex-grow-1 bd-highlight" style="overflow: hidden; background-color: rgba(248, 249, 250, 0.5);">

                <?php $newser->show_Main_Newses(true); ?>

                <div class="container">

                    <div class="nav nav-fill nav-pills d-flex justify-content-center" id="v-pills-tab" role="tablist">
                        <a class="nav-link active" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile"
                            role="tab" aria-controls="v-pills-profile" aria-selected="true">О
                            питомнике</a>
                        <a class="nav-link" id="v-pills-about-tab" data-toggle="pill" href="#v-pills-about" role="tab"
                            aria-controls="v-pills-about" aria-selected="false">О породе</a>
                        <a class="nav-link" id="v-pills-exhibitions-tab" data-toggle="pill" href="#v-pills-exhibitions"
                            role="tab" aria-controls="v-pills-exhibitions" aria-selected="false">Выставки</a>
                        <a class="nav-link" id="v-pills-video-tab" data-toggle="pill" href="#v-pills-video" role="tab"
                            aria-controls="v-pills-video" aria-selected="false">Видео</a>
                        <a class="nav-link" id="v-pills-news-tab" data-toggle="pill" href="#v-pills-news" role="tab"
                            aria-controls="v-pills-news" aria-selected="false">Новости</a>
                        <a class="nav-link" id="v-pills-autors-tab" data-toggle="pill" href="#v-pills-autors" role="tab"
                            aria-controls="v-pills-autors" aria-selected="false">Документы</a>
                    </div>

                </div>

                <div id="v-pills-tabContent" class="tab-content">

                    <section class="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">

                        <div style="background-color: rgba(248, 249, 250, 0.5);" class="container">
                            <h4 class="text-center">О питомнике</h4>

                            <?php $articler->show_Main_Article(); ?>

                        </div>

                    </section>

                    <section class="tab-pane fade" id="v-pills-about" role="tabpanel"
                        aria-labelledby="v-pills-about-tab">

                        <h3 class="text-center">Порода Норвежская лесная кошка</h3>
                        <div style="background-color: rgba(248, 249, 250, 0.5);">

                            <?php $articler->show_Descryption(); ?>

                        </div>

                    </section>

                    <section class="tab-pane fade" id="v-pills-exhibitions" role="tabpanel" aria-labelledby="v-pills-exhibitions-tab">

                        <h3 class="text-center">Выставки</h3>
                        <div id="accordionExhibitions">
                        
                            <?php $exhibitioner->show_Exhibitions('#accordionExhibitions'); ?>    

                        </div>

                    </section>

                    <section class="tab-pane fade" id="v-pills-video" role="tabpanel" aria-labelledby="v-pills-video-tab">

                        <h3 class="text-center">Видео</h3>
                        <div style="background-color: rgba(248, 249, 250, 0.5);" class="container-fluid">
                            
                            <?php $videomaker->show_Video_Gallery(); ?>

                        </div>

                    </section>

                    <section class="tab-pane fade" id="v-pills-news" role="tabpanel" aria-labelledby="v-pills-news-tab">

                        <h3 class="text-center">Новости</h3>

                        <div style="background-color: rgba(248, 249, 250, 0.5);">
                            <?php $newser->show_Full_Newses(); ?>
                        </div>

                    </section>

                    <section class="tab-pane fade" id="v-pills-autors" role="tabpanel" aria-labelledby="v-pills-autors-tab">

                        <h4 class="text-center">Документы</h4>

                        <div id="accordionCatsCertificates">
                            <?php $documenter->show_Documents('#accordionCatsCertificates'); ?> 
                        </div>

                    </section>

                    <?php 
                        echo Utils::showModalDeleteForm('Удаление изображений',
                            'Опасная операция - изображения будут удалены из базы данных и 
                                с жесткого диска. Уверена, что хочешь удалить выбранные изображения?'); 
                    ?>

                </div>

            </section>

        </section>

        <section id="newsAreaBottom" class="container">

            <h3 class="text-center">Новости</h3>

            <div id="accordionBottom">

                <?php $newser->show_Newses(true, "#accordionBottom", "Bottom"); ?>

                <button class="btn btn-outline-primary btn-block my-1" type="button" data-toggle="collapse"
                    data-target="#collapseBottomExample" aria-expanded="false" aria-controls="collapseBottomExample">
                    Архив
                </button>

                <div class="collapse" id="collapseBottomExample">

                    <div id="accordionBottomArh">

                        <?php $newser->show_Newses(false, "#accordionBottomArh", "Bottom"); ?>

                    </div>

                </div>

            </div>

        </section>

    </main>

    <footer class="container mb-5">

        <address>
            <p style="background-color: rgba(23, 162, 184, 0.7);" class="text-center m-1">Контакты
            </p>
            <div class="d-flex flex-wrap justify-content-between">
                <div style="background-color: rgba(23, 162, 184, 0.7);" class="card m-1 flex-fill">
                    <div class="card-header text-center">Социальные сети</div>
                    <div class="card-body text-center">
                        <a class="btn btn-link" href="https://www.facebook.com/catsofixtlan/" role="button"><img class="img-fluid"
                                title="порода кошек норвежская лесная фото питомник норвежских лесных кошек москва" src="images/social/facebook.png"
                                alt="котенок норвежской лесной"></a>
                        <a class="btn btn-link" href="https://www.instagram.com/fraulein.yulia/" role="button"><img
                                class="img-fluid" src="images/social/Instagram.png" alt="норвежская лесная купить"></a>
                        <a class="btn btn-link" href="#" role="button"><img class="img-fluid" title="норвежская лесная кошка купить в москве норвежская лесная кошка купить в москве"
                                src="images/social/g+.png" alt="норвежская лесная кошка купить в москве цена норвежская лесная кошка купить в москве питомники"></a>
                        <a class="btn btn-link" href="https://www.youtube.com/channel/UCnN8BceKWMpll2pLWqY2jGw?view_as=subscriber"
                            role="button"><img class="img-fluid" title="питомники норвежских лесных кошек в москве котенок норвежской лесной кошки в москве купить котенка норвежской лесной кошки"
                                src="images/social/youtube.png" alt="питомники норвежских кошек"></a>
                    </div>
                </div>
                <div style="background-color: rgba(23, 162, 184, 0.7);" class="card m-1 flex-fill">
                    <div class="card-header text-center">Телефоны</div>
                    <div class="card-body text-center">
                        <p class="card-text">+7 904 21 23 817 (Юлия)</p>
                    </div>
                </div>
                <div style="background-color: rgba(23, 162, 184, 0.7);" class="card m-1 flex-fill">
                    <div class="card-header text-center">E'mail</div>
                    <div class="card-body text-center">
                        <p class="card-text">l-stardust@yandex.ru</p>
                    </div>
                </div>
            </div>
        </address>

        <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-1">
                <li class="breadcrumb-item active" aria-current="page">Главная</li>
            </ol>
        </nav>

    </footer>

</body>

</html>