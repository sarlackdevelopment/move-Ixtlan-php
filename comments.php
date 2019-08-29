<?php

    require_once 'src/utils.php';

    if ( Utils::is_session_started() === FALSE ) session_start();

    require_once 'configDB.php';

    include('src/Newser.php');
    include('src/Commentor.php');

    $commentor = new Commentor();
    $newser    = new Newser();

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

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

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

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

    <!-- Dropzone.JS -->
    <link href="libs/jslibs/dropzone/dropzone.css" type="text/css" rel="stylesheet" />
    <script src="libs/jslibs/dropzone/dropzone.js"></script>

    <!-- Pagination -->
    <script src="plugins/pagination/myPagination.js" type="text/javascript"></script>

    <!-- Fontawesome -->
    <script src="https://kit.fontawesome.com/dffe1b2c32.js"></script>

    <!-- Optional JavaScript -->
    <script defer src="dist/common.js"></script>
    <script defer src="dist/comments.js"></script>

    <title>Котята норвежской лесной кошки обрели дом</title>

</head>

<body>

    <section class="container loader d-flex bd-highlight" id="p_prldr">
        <div class="loader-inner align-self-center p-2 bd-highlight">
            <div class="loader-inner">
                <div class="loader-inner">
                    <div class="loader-inner">
                        <div class="loader-inner">
                            <div class="loader-inner">
                                <div class="loader-inner">
                                    <div class="loader-inner">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <header class="container border border-primary my-1">
        <nav class="navbar navbar-expand-md navbar-dark bg-primary">
            <a class="navbar-brand" href="index.php">
                <img title="котята норвежской лесной кошки цена норвежские лесные котята" src="images/navigation.png"
                    alt="норвежские лесные котята">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
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
                        <a class="nav-link" href="kitty.php">Котята (бронирование) </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="articles.php">Статьи </a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="comments.php">Обретшие дом </a>
                    </li>
                </ul>
                <a id="toggleNews" class="mx-2" href="/">
                    <img title="котята норвежской лесной кошки цена норвежские лесные котята" src="images/3.png" class="img-fluid"
                        alt="норвежские лесные котята">
                </a>  
                <a class="ml-2" href="#">
                    <img title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва" class="img-fluid"
                        src="images/lang/rusflag.png" alt="питомник норвежской продажа норвежской котята норвежской">
                </a>
                <a class="ml-2" href="#">
                    <img title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва" class="img-fluid"
                        src="images/lang/amflag.png" alt="питомник норвежской продажа норвежской котята норвежской">
                </a>
                
            </div>
        </nav>
    </header>

    <main class="container">

        <section class="d-flex bd-highlight">

            <section id="newsArea" class="col-4">

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

            <section id="mainArea" class="p-2 flex-grow-1 bd-highlight" style="overflow: hidden">

                <?php $newser->show_Main_Newses(true); ?> 

                <header>
                    <hr>
                    <h5 class="text-center">Отзывы</h5>
                    <hr>
                </header>  

                <ul id="alt-style-pagination" class="pagination justify-content-center simple-pagination"></ul>
                
                <?php $commentor->show_comment(); ?>

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
            <ol class="breadcrumb border border-primary mb-1">
                <li class="breadcrumb-item"><a href="index.php">Главная</a></li>
                <li class="breadcrumb-item active" aria-current="page">Обретшие дом</li>
            </ol>
        </nav>

    </footer>

</body>

</html>