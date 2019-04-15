<?php

    include('src/Newser.php');
    include('src/Articler.php');
    include('src/CatsShower.php');
    include('src/KittyShower.php');

    $newser      = new Newser();
    $articler    = new Articler();
    $catsShower  = new CatsShower();
    $kittyShower = new KittyShower();

?>


<!doctype html>
<html lang="ru-RU">

<head>
    <!-- Main tags -->
    <base href="kitty.php">

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description"
        content="котенок норвежской лесной кошки котята норвежской лесной кошки в москве норвежская лесная кошка купить в москве питомники норвежской котята норвежской">

    <!-- For SEO -->
    <link rel="canonical" href="http://move-ixtlan.ru/kitty.php" />

    <!-- For localization -->
    <link rel="alternate" href="http://move-ixtlan.ru" hreflang="ru-ru" />

    <!-- navigation icon -->
    <link rel="shortcut icon" href="images/navigation.png" type="image/x-icon">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
        integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">

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

    <!--<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>-->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" ></script>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
        integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"
        integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm"
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

    <title>Котята норвежской лесной кошки в Москве. Фото, документы и бронирование котенка</title>

</head>

<body>

    <header class="container border border-primary mb-1">
        <nav class="navbar navbar-expand-md navbar-dark bg-primary">
            <a class="navbar-brand" href="#"><img
                    title="котята норвежской лесной кошки цена котята норвежской лесной москва котенок норвежской лесной"
                    src="images/navigation.png" alt="норвежские лесные котята"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.php">Главная <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="cats_females.php">Кошки </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="cats_males.php">Коты </a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="kitty.php">Котята (бронирование) </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="articles.php">Статьи </a>
                    </li>
                </ul>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Поиск</button>
                </form>
                <a class="ml-2" href="#">
                    <img class="img-fluid"
                        title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва"
                        src="images/lang/rusflag.png" alt="питомник норвежской продажа норвежской котята норвежской">
                </a>
                <a class="ml-2" href="#">
                    <img class="img-fluid"
                        title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва"
                        src="images/lang/amflag.png" alt="питомник норвежской продажа норвежской котята норвежской">
                </a>
                <!--<a class="ml-2" href="#">
                    <img class="img-fluid" title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва"
                        src="images/lang/chinaflag.png" alt="питомник норвежской продажа норвежской котята норвежской">
                </a>
                <a class="ml-2" href="#">
                    <img class="img-fluid" title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва"
                        src="images/lang/huflag.png" alt="питомник норвежской продажа норвежской котята норвежской">
                </a>-->
            </div>
        </nav>
    </header>

    <main class="container border border-primary">
        <div class="row">

            <section id="newsArea" class="col-4">

                <div class="container-fluid">

                    <h4 class="text-center">Новости</h4>

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

            <section id="mainArea" class="col-8">

                <!--<h1 class="text-center">Котята (бронирование)</h1>-->

                <?php 
                    echo '<hr>' . $kittyShower->show_add_kitty_form();
                    echo '<hr>' . $kittyShower->show_add_brood_form(); 
                    echo '<hr>' . $kittyShower->show_life_periods_form();
                ?>

                <div class="container mt-1">
                    <hr>
                    <div class="nav nav-fill nav-pills" id="v-pills-tab" role="tablist">
                        <!--<a style="font-size: 1em;" class="mx-auto nav-link active" id="v-pills-headingBrood_J-tab"
                            data-toggle="pill" href="#v-pills-headingBrood_J" role="tab"
                            aria-controls="v-pills-headingBrood_J" aria-selected="true">Помет "J"</a>
                        <a style="font-size: 1em;" class="mx-auto  nav-link" id="v-pills-headingBrood_K-tab"
                            data-toggle="pill" href="#v-pills-headingBrood_K" role="tab"
                            aria-controls="v-pills-headingBrood_K" aria-selected="false">Помет "K"</a>-->
                        <?php $kittyShower->show_list_of_Broods(); ?>
                        <a style="font-size: 1em;" class="mx-auto  nav-link" id="v-pills-common-tab" data-toggle="pill"
                            href="#v-pills-common" role="tab" aria-controls="v-pills-common" aria-selected="false">Общие
                            фото</a>
                    </div>
                    <hr>
                </div>

                <div id="v-pills-tabContent" class="tab-content">

                    <section class="tab-pane fade show active" id="v-pills-headingBrood_J" role="tabpanel"
                        aria-labelledby="v-pills-headingBrood_J-tab">

                        <!-- Начало описания Помет "J" -->

                        <div style="background-color: rgba(248, 249, 250, 0.5);" class="card">

                            <div class="card-body">

                                <div class="card-deck">

                                    <!-- Помет "J", Начало описания Арвель -->

                                    <?php $catsShower->show_distinct_cat('Arvel', 'J'); ?>

                                    <!-- Помет "J", Конец описания Арвель -->

                                    <!-- Помет "J", Начало описания Пампкин -->

                                    <?php $catsShower->show_distinct_cat('Pumpkin', 'J'); ?>

                                    <!-- Помет "J", Конец описания Пампкин -->

                                </div>

                                <h5 class="text-center m-3">Помет "J" (14.11.2018)</h5>

                                <div class="card-deck mt-4">

                                    <!-- Помет "J", Начало описания Хуан -->

                                    <article style="background-color: rgba(23, 162, 184, 0.2);" class="card">
                                        <a href="#" data-toggle="modal" data-target="#kittyJuan"><img
                                                class="card-img-top rounded-circle"
                                                title="порода кошек норвежская лесная фото питомник норвежских лесных кошек фото котят норвежской кошки"
                                                src="images/cats/kitty/J/Juan/TwoMonth/3.jpg"
                                                alt="котята норвежской"></a>

                                        <div class="card-body">

                                            <header>
                                                <h5 class="card-title text-center">Juan</h5>
                                            </header>

                                            <div class="card-footer">

                                                <div class="modal fade" id="kittyJuan" brood_id="5" tabindex="-1" role="dialog"
                                                    aria-labelledby="kittyJuanTitle" aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title text-center" id="kittyJuanTitle">
                                                                    Juan</h5>
                                                                <button type="button" class="close" data-dismiss="modal"
                                                                    aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body">

                                                                <div class="container border border-primary">

                                                                    <div class="nav nav-fill nav-pills" id="v-pills-tab-Juan" role="tablist">
                                                                        <!--<a class="nav-link active"
                                                                            id="v-pills-Juan-twoWeeks-tab"
                                                                            data-toggle="pill"
                                                                            href="#v-pills-Juan-twoWeeks" role="tab"
                                                                            aria-controls="v-pills-Juan-twoWeeks"
                                                                            aria-selected="true">
                                                                            Две недели</a>
                                                                        <a class="nav-link"
                                                                            id="v-pills-Juan-OneMonth-tab"
                                                                            data-toggle="pill"
                                                                            href="#v-pills-Juan-OneMonth" role="tab"
                                                                            aria-controls="v-pills-Juan-OneMonth"
                                                                            aria-selected="false">Месяц</a>
                                                                        <a class="nav-link"
                                                                            id="v-pills-Juan-TwoMonth-tab"
                                                                            data-toggle="pill"
                                                                            href="#v-pills-Juan-TwoMonth" role="tab"
                                                                            aria-controls="v-pills-Juan-TwoMonth"
                                                                            aria-selected="false">Два месяца</a>-->
                                                                        <?php echo '<hr>' . $kittyShower->show_edit_period_form('Juan'); ?>
                                                                        <?php $kittyShower->show_Periods(); ?>
                                                                    </div>

                                                                    <div id="v-pills-tabContent-Juan" class="tab-content">

                                                                        <!-- + Хуану две недели -->                           

                                                                        <?php $kittyShower->show_Period_of_Life('v-pills-Juan-twoWeeks', 'active') ?>

                                                                        <!-- - Хуану две недели -->

                                                                        <!-- + Хуану месяц -->

                                                                        <section class="tab-pane fade"
                                                                            id="v-pills-Juan-OneMonth" role="tabpanel"
                                                                            aria-labelledby="v-pills-Juan-OneMonth-tab">

                                                                            <div class="container mt-1 alert alert-primary"
                                                                                role="alert">

                                                                                <div class="owl-carousel">
                                                                                    <div class="item"><img
                                                                                            title="купить котенка норвежской лесной кошки котята норвежской лесной москва"
                                                                                            src="images/cats/kitty/J/Juan/OneMonth/1.jpg"
                                                                                            alt="норвежская лесная купить">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Juan/OneMonth/2.jpg"
                                                                                            alt="питомники норвежских кошек">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Juan/OneMonth/3.jpg"
                                                                                            alt="норвежская лесная питомник">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Juan/OneMonth/4.jpg"
                                                                                            alt="питомник норвежской">
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div class="container alert alert-primary"
                                                                                role="alert">

                                                                                <div class="row">
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Juan_OneMonth"
                                                                                            href="images/cats/kitty/J/Juan/OneMonth/1.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежский котенок в подарок котенок в подарок на новый год"
                                                                                                src="images/cats/kitty/J/Juan/OneMonth/1.jpg"
                                                                                                alt="продажа норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Juan_OneMonth"
                                                                                            href="images/cats/kitty/J/Juan/OneMonth/2.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная питомник питомники норвежских кошек питомник норвежских лесных кошек"
                                                                                                src="images/cats/kitty/J/Juan/OneMonth/2.jpg"
                                                                                                alt="норвежские лесные котята">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Juan_OneMonth"
                                                                                            href="images/cats/kitty/J/Juan/OneMonth/3.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная питомник питомники норвежских кошек питомник норвежских лесных кошек"
                                                                                                src="images/cats/kitty/J/Juan/OneMonth/3.jpg"
                                                                                                alt="норвежский котенок">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Juan_OneMonth"
                                                                                            href="images/cats/kitty/J/Juan/OneMonth/4.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная питомник питомники норвежских кошек питомник норвежских лесных кошек"
                                                                                                src="images/cats/kitty/J/Juan/OneMonth/4.jpg"
                                                                                                alt="котята норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </section>

                                                                        <!-- - Хуану месяц -->

                                                                        <!-- + Хуану два месяца -->

                                                                        <section class="tab-pane fade"
                                                                            id="v-pills-Juan-TwoMonth" role="tabpanel"
                                                                            aria-labelledby="v-pills-Juan-TwoMonth-tab">

                                                                            <div class="container mt-1 alert alert-primary"
                                                                                role="alert">

                                                                                <div class="owl-carousel">
                                                                                    <div class="item"><img
                                                                                            title="купить котенка норвежской лесной кошки котята норвежской лесной москва"
                                                                                            src="images/cats/kitty/J/Juan/TwoMonth/1.jpg"
                                                                                            alt="норвежская лесная купить">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Juan/TwoMonth/2.jpg"
                                                                                            alt="питомники норвежских кошек">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Juan/TwoMonth/3.jpg"
                                                                                            alt="норвежская лесная питомник">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Juan/TwoMonth/4.jpg"
                                                                                            alt="питомник норвежской">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Juan/TwoMonth/5.jpg"
                                                                                            alt="питомник норвежской">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Juan/TwoMonth/6.jpg"
                                                                                            alt="питомник норвежской">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Juan/TwoMonth/7.jpg"
                                                                                            alt="питомник норвежской">
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div class="container alert alert-primary"
                                                                                role="alert">

                                                                                <div class="row">
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Juan_TwoMonth"
                                                                                            href="images/cats/kitty/J/Juan/TwoMonth/1.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежский котенок в подарок котенок в подарок на новый год"
                                                                                                src="images/cats/kitty/J/Juan/TwoMonth/1.jpg"
                                                                                                alt="продажа норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Juan_TwoMonth"
                                                                                            href="images/cats/kitty/J/Juan/TwoMonth/2.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная питомник питомники норвежских кошек питомник норвежских лесных кошек"
                                                                                                src="images/cats/kitty/J/Juan/TwoMonth/2.jpg"
                                                                                                alt="норвежские лесные котята">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Juan_TwoMonth"
                                                                                            href="images/cats/kitty/J/Juan/TwoMonth/3.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная питомник питомники норвежских кошек питомник норвежских лесных кошек"
                                                                                                src="images/cats/kitty/J/Juan/TwoMonth/3.jpg"
                                                                                                alt="норвежский котенок">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Juan_TwoMonth"
                                                                                            href="images/cats/kitty/J/Juan/TwoMonth/4.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная питомник питомники норвежских кошек питомник норвежских лесных кошек"
                                                                                                src="images/cats/kitty/J/Juan/TwoMonth/4.jpg"
                                                                                                alt="котята норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Juan_TwoMonth"
                                                                                            href="images/cats/kitty/J/Juan/TwoMonth/5.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная питомник питомники норвежских кошек питомник норвежских лесных кошек"
                                                                                                src="images/cats/kitty/J/Juan/TwoMonth/5.jpg"
                                                                                                alt="котята норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Juan_TwoMonth"
                                                                                            href="images/cats/kitty/J/Juan/TwoMonth/6.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная питомник питомники норвежских кошек питомник норвежских лесных кошек"
                                                                                                src="images/cats/kitty/J/Juan/TwoMonth/6.jpg"
                                                                                                alt="котята норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Juan_TwoMonth"
                                                                                            href="images/cats/kitty/J/Juan/TwoMonth/7.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная питомник питомники норвежских кошек питомник норвежских лесных кошек"
                                                                                                src="images/cats/kitty/J/Juan/TwoMonth/7.jpg"
                                                                                                alt="котята норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </section>

                                                                        <!-- - Хуану Хуану два месяца -->

                                                                    </div>

                                                                    <div class="container alert alert-info"
                                                                        role="alert">
                                                                        <p>Я Хуан. Будем знакомы. Себя помню недавно,
                                                                            но хорошо. Я старший с врождёнными
                                                                            повадками лидера. Настанет день, и я поведу
                                                                            вас смотреть на северное сияние в далёкий и
                                                                            глухой <mark>норвежский лес</mark>. Лес
                                                                            моих предков.</p>
                                                                    </div>

                                                                </div>

                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary"
                                                                    data-dismiss="modal">Закрыть</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p class="text-center">Я Хуан. Будем знакомы.</p>
                                                <div class="d-flex flex-column justify-content-center bd-highlight">
                                                    <button class="flex-fill bd-highlight btn btn-secondary m-1"
                                                        data-placement="top" data-toggle="popover" title="Обрел дом"
                                                        data-content="Обрел дом у Александра и Александры">Обрел
                                                        дом</button>
                                                    <button type="button"
                                                        class="flex-fill bd-highlight btn btn-primary m-1"
                                                        data-toggle="modal" data-target="#kittyJuanDocuments">
                                                        Документы
                                                    </button>
                                                    <button type="button"
                                                        class="flex-fill bd-highlight btn btn-primary m-1"
                                                        data-toggle="modal" data-target="#kittyJuan">
                                                        Фото
                                                    </button>
                                                </div>

                                                <div class="modal fade" id="kittyJuanDocuments" tabindex="-1"
                                                    role="dialog" aria-labelledby="kittyJuanTitle" aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title text-center" id="kittyJuanTitle">
                                                                    Метрика
                                                                </h5>
                                                                <button type="button" class="close" data-dismiss="modal"
                                                                    aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <a data-fancybox="cats_kitty_Juan_Documents"
                                                                    href="images/cats/kitty/metriks/J/Juan.jpg">
                                                                    <img class="img-fluid"
                                                                        title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                        src="images/cats/kitty/metriks/J/Juan.jpg"
                                                                        alt="котята норвежской">
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <!-- Помет "J", Конец описания Хуан -->

                                <!-- Помет "J", Начало описания Хавьер -->
                                <div class="card-deck mt-4">
                                    <article style="background-color: rgba(23, 162, 184, 0.2);" class="card">
                                        <a href="#" data-toggle="modal" data-target="#kittyJavier">
                                            <!--  <img class="position-absolute img-fluid" style="opacity: 0.7;"
                                                    src="1images/reserved.png" alt="питомник норвежской продажа норвежской котята норвежской"> -->
                                            <img class="card-img-top rounded-circle"
                                                title="норвежская лесная кошка купить в москве цена кошки породы норвежская лесная продажа норвежских лесных котят"
                                                src="images/cats/kitty/J/Javier/TwoMonth/6.jpg"
                                                alt="купить котенка в москве"></a>
                                        <div class="card-body">
                                            <header>
                                                <h5 class="card-title text-center">Javier</h5>
                                            </header>
                                            <div class="card-footer">

                                                <div class="modal fade" id="kittyJavier" tabindex="-1" role="dialog"
                                                    aria-labelledby="kittyJavierTitle" aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title text-center"
                                                                    id="kittyJavierTitle">Javier
                                                                </h5>
                                                                <button type="button" class="close" data-dismiss="modal"
                                                                    aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body">

                                                                <div class="container border border-primary">

                                                                    <div class="nav nav-fill nav-pills"
                                                                        id="v-pills-tab-Javier" role="tablist">
                                                                        <a class="nav-link active"
                                                                            id="v-pills-Javier-twoWeeks-tab"
                                                                            data-toggle="pill"
                                                                            href="#v-pills-Javier-twoWeeks" role="tab"
                                                                            aria-controls="v-pills-Javier-twoWeeks"
                                                                            aria-selected="true">
                                                                            Две недели</a>
                                                                        <a class="nav-link"
                                                                            id="v-pills-Javier-OneMonth-tab"
                                                                            data-toggle="pill"
                                                                            href="#v-pills-Javier-OneMonth" role="tab"
                                                                            aria-controls="v-pills-Javier-OneMonth"
                                                                            aria-selected="false">Месяц</a>
                                                                        <a class="nav-link"
                                                                            id="v-pills-Javier-TwoMonth-tab"
                                                                            data-toggle="pill"
                                                                            href="#v-pills-Javier-TwoMonth" role="tab"
                                                                            aria-controls="v-pills-Javier-TwoMonth"
                                                                            aria-selected="false">Два месяца</a>
                                                                    </div>

                                                                    <div id="v-pills-tabContent-Javier"
                                                                        class="tab-content">

                                                                        <!-- + Хавьеру две недели -->

                                                                        <section class="tab-pane fade show active"
                                                                            id="v-pills-Javier-twoWeeks" role="tabpanel"
                                                                            aria-labelledby="v-pills-Javier-twoWeeks-tab">

                                                                            <div class="container mt-1 alert alert-primary"
                                                                                role="alert">

                                                                                <div class="owl-carousel">
                                                                                    <div class="item"><img
                                                                                            title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                                                                                            src="images/cats/kitty/J/Javier/TwoWeeks/1.jpg"
                                                                                            alt="путешествие в икстлан">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/J/Javier/TwoWeeks/2.jpg"
                                                                                            alt="норвежские лесные красавицы">
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div class="container alert alert-primary"
                                                                                role="alert">

                                                                                <div class="row">
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Javier_TwoWeeks"
                                                                                            href="images/cats/kitty/J/Javier/TwoWeeks/1.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                                                                                                src="images/cats/kitty/J/Javier/TwoWeeks/1.jpg"
                                                                                                alt="котенок в подарок">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Javier_TwoWeeks"
                                                                                            href="images/cats/kitty/J/Javier/TwoWeeks/2.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная питомник питомники норвежских кошек питомник норвежских лесных кошек"
                                                                                                src="images/cats/kitty/J/Javier/TwoWeeks/2.jpg"
                                                                                                alt="норвежский котенок в подарок">
                                                                                        </a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </section>

                                                                        <!-- - Хавьеру две недели -->

                                                                        <!-- + Хавьеру месяц -->

                                                                        <section class="tab-pane fade"
                                                                            id="v-pills-Javier-OneMonth" role="tabpanel"
                                                                            aria-labelledby="v-pills-Javier-OneMonth-tab">

                                                                            <div class="container mt-1 alert alert-primary"
                                                                                role="alert">

                                                                                <div class="owl-carousel">
                                                                                    <div class="item"><img
                                                                                            title="купить котенка норвежской лесной кошки котята норвежской лесной москва"
                                                                                            src="images/cats/kitty/J/Javier/OneMonth/1.jpg"
                                                                                            alt="норвежские лесные котята">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Javier/OneMonth/2.jpg"
                                                                                            alt="котенок норвежской лесной">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Javier/OneMonth/3.jpg"
                                                                                            alt="норвежская лесная купить">
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div class="container alert alert-primary"
                                                                                role="alert">

                                                                                <div class="row">
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Javier_OneMonth"
                                                                                            href="images/cats/kitty/J/Javier/OneMonth/1.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="котенок норвежской лесной кошки в москве купить котенка норвежской лесной кошки порода норвежская лесная кошка"
                                                                                                src="images/cats/kitty/J/Javier/OneMonth/1.jpg"
                                                                                                alt="питомники норвежских кошек">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Javier_OneMonth"
                                                                                            href="images/cats/kitty/J/Javier/OneMonth/2.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/J/Javier/OneMonth/2.jpg"
                                                                                                alt="норвежская лесная питомник">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Javier_OneMonth"
                                                                                            href="images/cats/kitty/J/Javier/OneMonth/3.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/J/Javier/OneMonth/3.jpg"
                                                                                                alt="питомник норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </section>

                                                                        <!-- - Хавьеру месяц -->

                                                                        <!-- + Хавьеру два месяца -->

                                                                        <section class="tab-pane fade"
                                                                            id="v-pills-Javier-TwoMonth" role="tabpanel"
                                                                            aria-labelledby="v-pills-Javier-TwoMonth-tab">

                                                                            <div class="container mt-1 alert alert-primary"
                                                                                role="alert">

                                                                                <div class="owl-carousel">
                                                                                    <div class="item"><img
                                                                                            title="купить котенка норвежской лесной кошки котята норвежской лесной москва"
                                                                                            src="images/cats/kitty/J/Javier/TwoMonth/1.jpg"
                                                                                            alt="норвежские лесные котята">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Javier/TwoMonth/2.jpg"
                                                                                            alt="котенок норвежской лесной">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Javier/TwoMonth/3.jpg"
                                                                                            alt="норвежская лесная купить">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Javier/TwoMonth/4.jpg"
                                                                                            alt="норвежская лесная купить">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Javier/TwoMonth/5.jpg"
                                                                                            alt="норвежская лесная купить">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Javier/TwoMonth/6.jpg"
                                                                                            alt="норвежская лесная купить">
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div class="container alert alert-primary"
                                                                                role="alert">

                                                                                <div class="row">
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Javier_TwoMonth"
                                                                                            href="images/cats/kitty/J/Javier/TwoMonth/1.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="котенок норвежской лесной кошки в москве купить котенка норвежской лесной кошки порода норвежская лесная кошка"
                                                                                                src="images/cats/kitty/J/Javier/TwoMonth/1.jpg"
                                                                                                alt="питомники норвежских кошек">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Javier_TwoMonth"
                                                                                            href="images/cats/kitty/J/Javier/TwoMonth/2.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/J/Javier/TwoMonth/2.jpg"
                                                                                                alt="норвежская лесная питомник">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Javier_TwoMonth"
                                                                                            href="images/cats/kitty/J/Javier/TwoMonth/3.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/J/Javier/TwoMonth/3.jpg"
                                                                                                alt="питомник норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Javier_TwoMonth"
                                                                                            href="images/cats/kitty/J/Javier/TwoMonth/4.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/J/Javier/TwoMonth/4.jpg"
                                                                                                alt="питомник норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Javier_TwoMonth"
                                                                                            href="images/cats/kitty/J/Javier/TwoMonth/5.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/J/Javier/TwoMonth/5.jpg"
                                                                                                alt="питомник норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Javier_TwoMonth"
                                                                                            href="images/cats/kitty/J/Javier/TwoMonth/6.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/J/Javier/TwoMonth/6.jpg"
                                                                                                alt="питомник норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </section>

                                                                        <!-- - Хавьеру два месяца -->

                                                                    </div>

                                                                    <div class="container alert alert-info"
                                                                        role="alert">
                                                                        <p>Бета. Баланс света и тени. Безмолвная
                                                                            сила
                                                                            стоящая за лидером. Это я.</p>
                                                                    </div>

                                                                </div>

                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary"
                                                                    data-dismiss="modal">Закрыть</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p class="text-center">Хавьер. Рад встрече.</p>
                                                <div class="d-flex flex-column justify-content-center bd-highlight">

                                                    <button class="flex-fill bd-highlight btn btn-secondary m-1"
                                                        data-placement="top" data-toggle="popover" title="Обрел дом"
                                                        data-content="Обрел дом у Марии из Санкт-Петербурга">Обрел
                                                        дом</button>
                                                    <button type="button"
                                                        class="flex-fill bd-highlight btn btn-primary m-1"
                                                        data-toggle="modal" data-target="#kittyJavierDocuments">
                                                        Документы
                                                    </button>
                                                    <button type="button"
                                                        class="flex-fill bd-highlight btn btn-primary m-1"
                                                        data-toggle="modal" data-target="#kittyJavier">
                                                        Фото
                                                    </button>
                                                </div>

                                                <div class="modal fade" id="kittyJavierDocuments" tabindex="-1"
                                                    role="dialog" aria-labelledby="kittyJavierTitle" aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title text-center"
                                                                    id="kittyJavierTitle">Метрика
                                                                </h5>
                                                                <button type="button" class="close" data-dismiss="modal"
                                                                    aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <a data-fancybox="cats_kitty_Javier_Documents"
                                                                    href="images/cats/kitty/metriks/J/Javier.jpg">
                                                                    <img class="img-fluid"
                                                                        title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                        src="images/cats/kitty/metriks/J/Javier.jpg"
                                                                        alt="котята норвежской">
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </article>
                                </div>

                                <!-- Помет "J", Конец описания Хавьер -->

                                <!-- Помет "J", Начало описания Хосефина -->
                                <div class="card-deck mt-4">
                                    <article style="background-color: rgba(23, 162, 184, 0.2);" class="card">
                                        <a href="#" data-toggle="modal" data-target="#kittyJosephine"><img
                                                class="card-img-top rounded-circle"
                                                title="норвежская лесная купить в москве порода кошек норвежская лесная фото питомник норвежских лесных кошек"
                                                src="images/cats/kitty/J/Josephine/ThreeMounth/3.jpg"
                                                alt="продажа норвежской"></a>
                                        <div class="card-body">
                                            <header>
                                                <h5 class="card-title text-center">Josephine</h5>
                                            </header>
                                            <div class="card-footer">

                                                <div class="modal fade" id="kittyJosephine" tabindex="-1" role="dialog"
                                                    aria-labelledby="kittyJosephineTitle" aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title text-center"
                                                                    id="kittyJosephineTitle">Josephine</h5>
                                                                <button type="button" class="close" data-dismiss="modal"
                                                                    aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body">

                                                                <div class="container border border-primary">

                                                                    <div class="nav nav-fill nav-pills"
                                                                        id="v-pills-tab-Josephine" role="tablist">
                                                                        <a class="nav-link active"
                                                                            id="v-pills-Josephine-twoWeeks-tab"
                                                                            data-toggle="pill"
                                                                            href="#v-pills-Josephine-twoWeeks"
                                                                            role="tab"
                                                                            aria-controls="v-pills-Josephine-twoWeeks"
                                                                            aria-selected="true">
                                                                            Две недели</a>
                                                                        <a class="nav-link"
                                                                            id="v-pills-Josephine-OneMonth-tab"
                                                                            data-toggle="pill"
                                                                            href="#v-pills-Josephine-OneMonth"
                                                                            role="tab"
                                                                            aria-controls="v-pills-Josephine-OneMonth"
                                                                            aria-selected="false">Месяц</a>
                                                                        <a class="nav-link"
                                                                            id="v-pills-Josephine-TwoMonth-tab"
                                                                            data-toggle="pill"
                                                                            href="#v-pills-Josephine-TwoMonth"
                                                                            role="tab"
                                                                            aria-controls="v-pills-Josephine-TwoMonth"
                                                                            aria-selected="false">Два месяца</a>
                                                                        <a class="nav-link"
                                                                            id="v-pills-Josephine-ThreeMounth-tab"
                                                                            data-toggle="pill"
                                                                            href="#v-pills-Josephine-ThreeMounth"
                                                                            role="tab"
                                                                            aria-controls="v-pills-Josephine-ThreeMounth"
                                                                            aria-selected="false">Три месяца</a>
                                                                    </div>

                                                                    <div id="v-pills-tabContent-Josephine"
                                                                        class="tab-content">

                                                                        <!-- + Хосефине две недели -->

                                                                        <section class="tab-pane fade show active"
                                                                            id="v-pills-Josephine-twoWeeks"
                                                                            role="tabpanel"
                                                                            aria-labelledby="v-pills-Josephine-twoWeeks-tab">

                                                                            <div class="container mt-1 alert alert-primary"
                                                                                role="alert">

                                                                                <div class="owl-carousel">
                                                                                    <div class="item"><img
                                                                                            title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                                                                                            src="images/cats/kitty/J/Josephine/TwoWeeks/1.jpg"
                                                                                            alt="норвежские лесные котята">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки норвежская лесная кошка котята"
                                                                                            src="images/cats/kitty/J/Josephine/TwoWeeks/2.jpg"
                                                                                            alt="норвежский котенок">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/J/Josephine/TwoWeeks/3.jpg"
                                                                                            alt="котята норвежской">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/J/Josephine/TwoWeeks/4.jpg"
                                                                                            alt="купить котенка в москве">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/J/Josephine/TwoWeeks/5.jpg"
                                                                                            alt="путешествие в икстлан">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/J/Josephine/TwoWeeks/6.jpg"
                                                                                            alt="норвежские лесные красавицы">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/J/Josephine/TwoWeeks/7.jpg"
                                                                                            alt="котенок в подарок">
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div class="container alert alert-primary"
                                                                                role="alert">

                                                                                <div class="row">
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_TwoWeeks"
                                                                                            href="images/cats/kitty/J/Josephine/TwoWeeks/1.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                                                                                                src="images/cats/kitty/J/Josephine/TwoWeeks/1.jpg"
                                                                                                alt="норвежский котенок в подарок">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_TwoWeeks"
                                                                                            href="images/cats/kitty/J/Josephine/TwoWeeks/2.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная кошка купить в москве"
                                                                                                src="images/cats/kitty/J/Josephine/TwoWeeks/2.jpg"
                                                                                                alt="норвежские лесные котята">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_TwoWeeks"
                                                                                            href="images/cats/kitty/J/Josephine/TwoWeeks/3.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="порода норвежская лесная кошка"
                                                                                                src="images/cats/kitty/J/Josephine/TwoWeeks/3.jpg"
                                                                                                alt="котенок норвежской лесной">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_TwoWeeks"
                                                                                            href="images/cats/kitty/J/Josephine/TwoWeeks/4.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="путешествие в икстлан с проводниками где купить котенка норвежской лесной породы"
                                                                                                src="images/cats/kitty/J/Josephine/TwoWeeks/4.jpg"
                                                                                                alt="путешествие в икстлан">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_TwoWeeks"
                                                                                            href="images/cats/kitty/J/Josephine/TwoWeeks/5.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная питомник питомники норвежских кошек питомник норвежских лесных кошек"
                                                                                                src="images/cats/kitty/J/Josephine/TwoWeeks/5.jpg"
                                                                                                alt="норвежская лесная купить">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_TwoWeeks"
                                                                                            href="images/cats/kitty/J/Josephine/TwoWeeks/6.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="путешествие в икстлан котенок в подарок на новый год"
                                                                                                src="images/cats/kitty/J/Josephine/TwoWeeks/6.jpg"
                                                                                                alt="питомники норвежских кошек">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_TwoWeeks"
                                                                                            href="images/cats/kitty/J/Josephine/TwoWeeks/7.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="кошки породы норвежская лесная"
                                                                                                src="images/cats/kitty/J/Josephine/TwoWeeks/7.jpg"
                                                                                                alt="норвежская лесная питомник">
                                                                                        </a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </section>

                                                                        <!-- - Хосефине две недели -->

                                                                        <!-- + Хосефине месяц -->

                                                                        <section class="tab-pane fade"
                                                                            id="v-pills-Josephine-OneMonth"
                                                                            role="tabpanel"
                                                                            aria-labelledby="v-pills-Josephine-OneMonth-tab">

                                                                            <div class="container mt-1 alert alert-primary"
                                                                                role="alert">

                                                                                <div class="owl-carousel">
                                                                                    <div class="item"><img
                                                                                            title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                                                                                            src="images/cats/kitty/J/Josephine/OneMonth/1.jpg"
                                                                                            alt="питомник норвежской">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки норвежская лесная кошка котята"
                                                                                            src="images/cats/kitty/J/Josephine/OneMonth/2.jpg"
                                                                                            alt="продажа норвежской">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/J/Josephine/OneMonth/3.jpg"
                                                                                            alt="норвежские лесные котята">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/J/Josephine/OneMonth/4.jpg"
                                                                                            alt="норвежский котенок">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/J/Josephine/OneMonth/5.jpg"
                                                                                            alt="котята норвежской">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/J/Josephine/OneMonth/6.jpg"
                                                                                            alt="купить котенка в москве">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/J/Josephine/OneMonth/7.jpg"
                                                                                            alt="путешествие в икстлан">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/J/Josephine/OneMonth/8.jpg"
                                                                                            alt="норвежские лесные красавицы">
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div class="container alert alert-primary"
                                                                                role="alert">

                                                                                <div class="row">
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_OneMonth"
                                                                                            href="images/cats/kitty/J/Josephine/OneMonth/1.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                                                                                                src="images/cats/kitty/J/Josephine/OneMonth/1.jpg"
                                                                                                alt="котенок в подарок">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_OneMonth"
                                                                                            href="images/cats/kitty/J/Josephine/OneMonth/2.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная кошка купить в москве"
                                                                                                src="images/cats/kitty/J/Josephine/OneMonth/2.jpg"
                                                                                                alt="норвежский котенок в подарок">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_OneMonth"
                                                                                            href="images/cats/kitty/J/Josephine/OneMonth/3.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="порода норвежская лесная кошка"
                                                                                                src="images/cats/kitty/J/Josephine/OneMonth/3.jpg"
                                                                                                alt="норвежские лесные котята">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_OneMonth"
                                                                                            href="images/cats/kitty/J/Josephine/OneMonth/4.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="путешествие в икстлан с проводниками где купить котенка норвежской лесной породы"
                                                                                                src="images/cats/kitty/J/Josephine/OneMonth/4.jpg"
                                                                                                alt="путешествие в икстлан">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_OneMonth"
                                                                                            href="images/cats/kitty/J/Josephine/OneMonth/5.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная питомник питомники норвежских кошек питомник норвежских лесных кошек"
                                                                                                src="images/cats/kitty/J/Josephine/OneMonth/5.jpg"
                                                                                                alt="котенок норвежской лесной">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_OneMonth"
                                                                                            href="images/cats/kitty/J/Josephine/OneMonth/6.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="путешествие в икстлан котенок в подарок на новый год"
                                                                                                src="images/cats/kitty/J/Josephine/OneMonth/6.jpg"
                                                                                                alt="норвежская лесная купить">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_OneMonth"
                                                                                            href="images/cats/kitty/J/Josephine/OneMonth/7.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="путешествие в икстлан котенок в подарок на новый год"
                                                                                                src="images/cats/kitty/J/Josephine/OneMonth/7.jpg"
                                                                                                alt="питомники норвежских кошек">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_OneMonth"
                                                                                            href="images/cats/kitty/J/Josephine/OneMonth/8.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="путешествие в икстлан котенок в подарок на новый год"
                                                                                                src="images/cats/kitty/J/Josephine/OneMonth/8.jpg"
                                                                                                alt="норвежская лесная питомник">
                                                                                        </a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </section>

                                                                        <!-- - Хосефине месяц -->

                                                                        <!-- + Хосефине два месяца -->

                                                                        <section class="tab-pane fade"
                                                                            id="v-pills-Josephine-TwoMonth"
                                                                            role="tabpanel"
                                                                            aria-labelledby="v-pills-Josephine-TwoMonth-tab">

                                                                            <div class="container mt-1 alert alert-primary"
                                                                                role="alert">

                                                                                <div class="owl-carousel">
                                                                                    <div class="item"><img
                                                                                            title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                                                                                            src="images/cats/kitty/J/Josephine/TwoMonth/1.jpg"
                                                                                            alt="питомник норвежской">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки норвежская лесная кошка котята"
                                                                                            src="images/cats/kitty/J/Josephine/TwoMonth/2.jpg"
                                                                                            alt="продажа норвежской">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/J/Josephine/TwoMonth/3.jpg"
                                                                                            alt="норвежские лесные котята">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/J/Josephine/TwoMonth/4.jpg"
                                                                                            alt="норвежский котенок">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/J/Josephine/TwoMonth/5.jpg"
                                                                                            alt="котята норвежской">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/J/Josephine/TwoMonth/6.jpg"
                                                                                            alt="купить котенка в москве">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/J/Josephine/TwoMonth/7.jpg"
                                                                                            alt="путешествие в икстлан">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/J/Josephine/TwoMonth/8.jpg"
                                                                                            alt="норвежские лесные красавицы">
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div class="container alert alert-primary"
                                                                                role="alert">

                                                                                <div class="row">
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_TwoMonth"
                                                                                            href="images/cats/kitty/J/Josephine/TwoMonth/1.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                                                                                                src="images/cats/kitty/J/Josephine/TwoMonth/1.jpg"
                                                                                                alt="котенок в подарок">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_TwoMonth"
                                                                                            href="images/cats/kitty/J/Josephine/TwoMonth/2.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная кошка купить в москве"
                                                                                                src="images/cats/kitty/J/Josephine/TwoMonth/2.jpg"
                                                                                                alt="норвежский котенок в подарок">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_TwoMonth"
                                                                                            href="images/cats/kitty/J/Josephine/TwoMonth/3.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="порода норвежская лесная кошка"
                                                                                                src="images/cats/kitty/J/Josephine/TwoMonth/3.jpg"
                                                                                                alt="норвежские лесные котята">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_TwoMonth"
                                                                                            href="images/cats/kitty/J/Josephine/TwoMonth/4.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="путешествие в икстлан с проводниками где купить котенка норвежской лесной породы"
                                                                                                src="images/cats/kitty/J/Josephine/TwoMonth/4.jpg"
                                                                                                alt="путешествие в икстлан">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_TwoMonth"
                                                                                            href="images/cats/kitty/J/Josephine/TwoMonth/5.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная питомник питомники норвежских кошек питомник норвежских лесных кошек"
                                                                                                src="images/cats/kitty/J/Josephine/TwoMonth/5.jpg"
                                                                                                alt="котенок норвежской лесной">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_TwoMonth"
                                                                                            href="images/cats/kitty/J/Josephine/TwoMonth/6.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="путешествие в икстлан котенок в подарок на новый год"
                                                                                                src="images/cats/kitty/J/Josephine/TwoMonth/6.jpg"
                                                                                                alt="норвежская лесная купить">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_TwoMonth"
                                                                                            href="images/cats/kitty/J/Josephine/TwoMonth/7.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="путешествие в икстлан котенок в подарок на новый год"
                                                                                                src="images/cats/kitty/J/Josephine/TwoMonth/7.jpg"
                                                                                                alt="питомники норвежских кошек">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_TwoMonth"
                                                                                            href="images/cats/kitty/J/Josephine/TwoMonth/8.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="путешествие в икстлан котенок в подарок на новый год"
                                                                                                src="images/cats/kitty/J/Josephine/TwoMonth/8.jpg"
                                                                                                alt="норвежская лесная питомник">
                                                                                        </a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </section>

                                                                        <!-- - Хосефине два месяца -->

                                                                        <!-- + Хосефине три месяца -->

                                                                        <section class="tab-pane fade"
                                                                            id="v-pills-Josephine-ThreeMounth"
                                                                            role="tabpanel"
                                                                            aria-labelledby="v-pills-Josephine-ThreeMounth-tab">

                                                                            <div class="container mt-1 alert alert-primary"
                                                                                role="alert">

                                                                                <div class="owl-carousel">
                                                                                    <div class="item"><img
                                                                                            title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                                                                                            src="images/cats/kitty/J/Josephine/ThreeMounth/1.jpg"
                                                                                            alt="питомник норвежской">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки норвежская лесная кошка котята"
                                                                                            src="images/cats/kitty/J/Josephine/ThreeMounth/2.jpg"
                                                                                            alt="продажа норвежской">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/J/Josephine/ThreeMounth/3.jpg"
                                                                                            alt="норвежские лесные котята">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/J/Josephine/ThreeMounth/4.jpg"
                                                                                            alt="норвежские лесные красавицы">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/J/Josephine/ThreeMounth/5.jpg"
                                                                                            alt="норвежские лесные красавицы">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/J/Josephine/ThreeMounth/6.jpg"
                                                                                            alt="норвежские лесные красавицы">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/J/Josephine/ThreeMounth/7.jpg"
                                                                                            alt="норвежские лесные красавицы">
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div class="container alert alert-primary"
                                                                                role="alert">

                                                                                <div class="row">
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_ThreeMounth"
                                                                                            href="images/cats/kitty/J/Josephine/ThreeMounth/1.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                                                                                                src="images/cats/kitty/J/Josephine/ThreeMounth/1.jpg"
                                                                                                alt="котенок в подарок">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_ThreeMounth"
                                                                                            href="images/cats/kitty/J/Josephine/ThreeMounth/2.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная кошка купить в москве"
                                                                                                src="images/cats/kitty/J/Josephine/ThreeMounth/2.jpg"
                                                                                                alt="норвежский котенок в подарок">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_ThreeMounth"
                                                                                            href="images/cats/kitty/J/Josephine/ThreeMounth/3.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="порода норвежская лесная кошка"
                                                                                                src="images/cats/kitty/J/Josephine/ThreeMounth/3.jpg"
                                                                                                alt="норвежские лесные котята">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_ThreeMounth"
                                                                                            href="images/cats/kitty/J/Josephine/ThreeMounth/4.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="путешествие в икстлан котенок в подарок на новый год"
                                                                                                src="images/cats/kitty/J/Josephine/ThreeMounth/4.jpg"
                                                                                                alt="норвежская лесная питомник">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_ThreeMounth"
                                                                                            href="images/cats/kitty/J/Josephine/ThreeMounth/5.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="путешествие в икстлан котенок в подарок на новый год"
                                                                                                src="images/cats/kitty/J/Josephine/ThreeMounth/5.jpg"
                                                                                                alt="норвежская лесная питомник">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_ThreeMounth"
                                                                                            href="images/cats/kitty/J/Josephine/ThreeMounth/6.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="путешествие в икстлан котенок в подарок на новый год"
                                                                                                src="images/cats/kitty/J/Josephine/ThreeMounth/6.jpg"
                                                                                                alt="норвежская лесная питомник">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Josephine_ThreeMounth"
                                                                                            href="images/cats/kitty/J/Josephine/ThreeMounth/7.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="путешествие в икстлан котенок в подарок на новый год"
                                                                                                src="images/cats/kitty/J/Josephine/ThreeMounth/7.jpg"
                                                                                                alt="норвежская лесная питомник">
                                                                                        </a>
                                                                                    </div>

                                                                                </div>

                                                                            </div>

                                                                        </section>

                                                                        <!-- - Хосефине три месяца -->

                                                                    </div>

                                                                    <div class="container alert alert-info"
                                                                        role="alert">
                                                                        <p>Взрывной темперамент. Жажда добычи, ветра,
                                                                            метели и бескрайинх снегов. Жажда жизни.
                                                                            Удивление новому и переоткрытие старого.
                                                                            Все это про меня. Я Хосефина, и я не боюсь.
                                                                        </p>
                                                                    </div>

                                                                </div>

                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary"
                                                                    data-dismiss="modal">Закрыть</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p class="text-center">Хосефина. Моё почтение.</p>
                                                <div class="d-flex flex-column justify-content-center bd-highlight">

                                                    <button class="flex-fill bd-highlight btn btn-secondary m-1"
                                                        data-placement="top" data-toggle="popover" title="Обрела дом"
                                                        data-content="Обрела дом у Евгении из Москвы">Обрела
                                                        дом</button>
                                                    <button type="button"
                                                        class="flex-fill bd-highlight btn btn-primary m-1"
                                                        data-toggle="modal" data-target="#kittyJosephineDocuments">
                                                        Документы
                                                    </button>
                                                    <button type="button"
                                                        class="flex-fill bd-highlight btn btn-primary m-1"
                                                        data-toggle="modal" data-target="#kittyJosephine">
                                                        Фото
                                                    </button>
                                                </div>

                                                <div class="modal fade" id="kittyJosephineDocuments" tabindex="-1"
                                                    role="dialog" aria-labelledby="kittyJosephineTitle"
                                                    aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title text-center"
                                                                    id="kittyJosephineTitle">Метрика
                                                                </h5>
                                                                <button type="button" class="close" data-dismiss="modal"
                                                                    aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <a data-fancybox="cats_kitty_Josephine_Documents"
                                                                    href="images/cats/kitty/metriks/J/Josephine.jpg">
                                                                    <img class="img-fluid"
                                                                        title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                        src="images/cats/kitty/metriks/J/Josephine.jpg"
                                                                        alt="котята норвежской">
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </article>

                                    <!-- Помет "J", Конец описания Хосефина -->

                                </div>

                                <!-- Помет "J", Начало описания Химена -->

                                <div class="card-deck mt-4">
                                    <article style="background-color: rgba(23, 162, 184, 0.2);" class="card">
                                        <a href="#" data-toggle="modal" data-target="#kittyJimena">
                                            <img class="card-img-top rounded-circle"
                                                title="норвежская лесная кошка купить в москве цена кошки породы норвежская лесная продажа норвежских лесных котят"
                                                src="images/cats/kitty/J/Jimena/ThreeMounth/1.jpg"
                                                alt="питомник норвежской"></a>
                                        <div class="card-body">
                                            <header>
                                                <h5 class="card-title text-center">Jimena</h5>
                                            </header>
                                            <div class="card-footer">

                                                <div class="modal fade" id="kittyJimena" tabindex="-1" role="dialog"
                                                    aria-labelledby="kittyJimenaTitle" aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title text-center"
                                                                    id="kittyJimenaTitle">Jimena
                                                                </h5>
                                                                <button type="button" class="close" data-dismiss="modal"
                                                                    aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body">

                                                                <div class="container border border-primary">

                                                                    <div class="nav nav-fill nav-pills"
                                                                        id="v-pills-tab-Jimena" role="tablist">
                                                                        <a class="nav-link active"
                                                                            id="v-pills-Jimena-twoWeeks-tab"
                                                                            data-toggle="pill"
                                                                            href="#v-pills-Jimena-twoWeeks" role="tab"
                                                                            aria-controls="v-pills-Jimena-twoWeeks"
                                                                            aria-selected="true">
                                                                            Две недели</a>
                                                                        <a class="nav-link"
                                                                            id="v-pills-Jimena-OneMonth-tab"
                                                                            data-toggle="pill"
                                                                            href="#v-pills-Jimena-OneMonth" role="tab"
                                                                            aria-controls="v-pills-Jimena-OneMonth"
                                                                            aria-selected="false">Месяц</a>
                                                                        <a class="nav-link"
                                                                            id="v-pills-Jimena-TwoMonth-tab"
                                                                            data-toggle="pill"
                                                                            href="#v-pills-Jimena-TwoMonth" role="tab"
                                                                            aria-controls="v-pills-Jimena-TwoMonth"
                                                                            aria-selected="false">Два месяца</a>
                                                                        <a class="nav-link"
                                                                            id="v-pills-Jimena-ThreeMounth-tab"
                                                                            data-toggle="pill"
                                                                            href="#v-pills-Jimena-ThreeMounth"
                                                                            role="tab"
                                                                            aria-controls="v-pills-Jimena-ThreeMounth"
                                                                            aria-selected="false">Три месяца</a>
                                                                    </div>

                                                                    <div id="v-pills-tabContent-Jimena"
                                                                        class="tab-content">

                                                                        <!-- + Химене две недели -->

                                                                        <section class="tab-pane fade show active"
                                                                            id="v-pills-Jimena-twoWeeks" role="tabpanel"
                                                                            aria-labelledby="v-pills-Jimena-twoWeeks-tab">

                                                                            <div class="container mt-1 alert alert-primary"
                                                                                role="alert">

                                                                                <div class="owl-carousel">
                                                                                    <div class="item"><img
                                                                                            title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                                                                                            src="images/cats/kitty/J/Jimena/TwoWeeks/1.jpg"
                                                                                            alt="продажа норвежской">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/J/Jimena/TwoWeeks/2.jpg"
                                                                                            alt="норвежские лесные котята">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/J/Jimena/TwoWeeks/3.jpg"
                                                                                            alt="норвежский котенок">
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div class="container alert alert-primary"
                                                                                role="alert">

                                                                                <div class="row">
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Jimena_TwoWeeks"
                                                                                            href="images/cats/kitty/J/Jimena/TwoWeeks/1.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                                                                                                src="images/cats/kitty/J/Jimena/TwoWeeks/1.jpg"
                                                                                                alt="котята норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Jimena_TwoWeeks"
                                                                                            href="images/cats/kitty/J/Jimena/TwoWeeks/2.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная питомник питомники норвежских кошек питомник норвежских лесных кошек"
                                                                                                src="images/cats/kitty/J/Jimena/TwoWeeks/2.jpg"
                                                                                                alt="купить котенка в москве">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Jimena_TwoWeeks"
                                                                                            href="images/cats/kitty/J/Jimena/TwoWeeks/3.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная питомник питомники норвежских кошек питомник норвежских лесных кошек"
                                                                                                src="images/cats/kitty/J/Jimena/TwoWeeks/3.jpg"
                                                                                                alt="путешествие в икстлан">
                                                                                        </a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </section>

                                                                        <!-- - Химене две недели -->

                                                                        <!-- + Химене месяц -->

                                                                        <section class="tab-pane fade"
                                                                            id="v-pills-Jimena-OneMonth" role="tabpanel"
                                                                            aria-labelledby="v-pills-Jimena-OneMonth-tab">

                                                                            <div class="container mt-1 alert alert-primary"
                                                                                role="alert">

                                                                                <div class="owl-carousel">
                                                                                    <div class="item"><img
                                                                                            title="купить котенка норвежской лесной кошки котята норвежской лесной москва"
                                                                                            src="images/cats/kitty/J/Jimena/OneMonth/1.jpg"
                                                                                            alt="норвежские лесные красавицы">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Jimena/OneMonth/2.jpg"
                                                                                            alt="котенок в подарок">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Jimena/OneMonth/3.jpg"
                                                                                            alt="норвежский котенок в подарок">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Jimena/OneMonth/4.jpg"
                                                                                            alt="норвежские лесные котята">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Jimena/OneMonth/5.jpg"
                                                                                            alt="котенок норвежской лесной">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Jimena/OneMonth/6.jpg"
                                                                                            alt="норвежская лесная купить">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Jimena/OneMonth/7.jpg"
                                                                                            alt="питомники норвежских кошек">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Jimena/OneMonth/8.jpg"
                                                                                            alt="норвежская лесная питомник">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Jimena/OneMonth/9.jpg"
                                                                                            alt="питомник норвежской">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Jimena/OneMonth/10.jpg"
                                                                                            alt="продажа норвежской">
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div class="container alert alert-primary"
                                                                                role="alert">

                                                                                <div class="row">
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Jimena_OneMonth"
                                                                                            href="images/cats/kitty/J/Jimena/OneMonth/1.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="котенок норвежской лесной кошки в москве купить котенка норвежской лесной кошки порода норвежская лесная кошка"
                                                                                                src="images/cats/kitty/J/Jimena/OneMonth/1.jpg"
                                                                                                alt="норвежский котенок">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Jimena_OneMonth"
                                                                                            href="images/cats/kitty/J/Jimena/OneMonth/2.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/J/Jimena/OneMonth/2.jpg"
                                                                                                alt="котята норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Jimena_OneMonth"
                                                                                            href="images/cats/kitty/J/Jimena/OneMonth/3.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/J/Jimena/OneMonth/3.jpg"
                                                                                                alt="купить котенка в москве">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Jimena_OneMonth"
                                                                                            href="images/cats/kitty/J/Jimena/OneMonth/4.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/J/Jimena/OneMonth/4.jpg"
                                                                                                alt="путешествие в икстлан">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Jimena_OneMonth"
                                                                                            href="images/cats/kitty/J/Jimena/OneMonth/5.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/J/Jimena/OneMonth/5.jpg"
                                                                                                alt="норвежские лесные красавицы">
                                                                                        </a>
                                                                                    </div>

                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Jimena_OneMonth"
                                                                                            href="images/cats/kitty/J/Jimena/OneMonth/6.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/J/Jimena/OneMonth/6.jpg"
                                                                                                alt="котенок в подарок">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Jimena_OneMonth"
                                                                                            href="images/cats/kitty/J/Jimena/OneMonth/7.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/J/Jimena/OneMonth/7.jpg"
                                                                                                alt="норвежский котенок в подарок">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Jimena_OneMonth"
                                                                                            href="images/cats/kitty/J/Jimena/OneMonth/8.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/J/Jimena/OneMonth/8.jpg"
                                                                                                alt="норвежские лесные котята">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Jimena_OneMonth"
                                                                                            href="images/cats/kitty/J/Jimena/OneMonth/9.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/J/Jimena/OneMonth/9.jpg"
                                                                                                alt="котенок норвежской лесной">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Jimena_OneMonth"
                                                                                            href="images/cats/kitty/J/Jimena/OneMonth/10.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/J/Jimena/OneMonth/10.jpg"
                                                                                                alt="норвежская лесная купить">
                                                                                        </a>
                                                                                    </div>

                                                                                </div>

                                                                            </div>

                                                                        </section>

                                                                        <!-- - Химене месяц -->

                                                                        <!-- + Химене два месяца -->

                                                                        <section class="tab-pane fade"
                                                                            id="v-pills-Jimena-TwoMonth" role="tabpanel"
                                                                            aria-labelledby="v-pills-Jimena-TwoMonth-tab">

                                                                            <div class="container mt-1 alert alert-primary"
                                                                                role="alert">

                                                                                <div class="owl-carousel">
                                                                                    <div class="item"><img
                                                                                            title="купить котенка норвежской лесной кошки котята норвежской лесной москва"
                                                                                            src="images/cats/kitty/J/Jimena/TwoMonth/1.jpg"
                                                                                            alt="норвежские лесные красавицы">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Jimena/TwoMonth/2.jpg"
                                                                                            alt="котенок в подарок">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Jimena/TwoMonth/3.jpg"
                                                                                            alt="норвежский котенок в подарок">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Jimena/TwoMonth/4.jpg"
                                                                                            alt="норвежские лесные котята">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/J/Jimena/TwoMonth/5.jpg"
                                                                                            alt="котенок норвежской лесной">
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div class="container alert alert-primary"
                                                                                role="alert">

                                                                                <div class="row">
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Jimena_TwoMonth"
                                                                                            href="images/cats/kitty/J/Jimena/TwoMonth/1.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="котенок норвежской лесной кошки в москве купить котенка норвежской лесной кошки порода норвежская лесная кошка"
                                                                                                src="images/cats/kitty/J/Jimena/TwoMonth/1.jpg"
                                                                                                alt="норвежский котенок">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Jimena_TwoMonth"
                                                                                            href="images/cats/kitty/J/Jimena/TwoMonth/2.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/J/Jimena/TwoMonth/2.jpg"
                                                                                                alt="котята норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Jimena_TwoMonth"
                                                                                            href="images/cats/kitty/J/Jimena/TwoMonth/3.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/J/Jimena/TwoMonth/3.jpg"
                                                                                                alt="купить котенка в москве">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Jimena_TwoMonth"
                                                                                            href="images/cats/kitty/J/Jimena/TwoMonth/4.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/J/Jimena/TwoMonth/4.jpg"
                                                                                                alt="путешествие в икстлан">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Jimena_TwoMonth"
                                                                                            href="images/cats/kitty/J/Jimena/TwoMonth/5.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/J/Jimena/TwoMonth/5.jpg"
                                                                                                alt="норвежские лесные красавицы">
                                                                                        </a>
                                                                                    </div>

                                                                                </div>

                                                                            </div>

                                                                        </section>

                                                                        <!-- - Химене два месяца -->

                                                                        <!-- + Химене три месяца -->

                                                                        <section class="tab-pane fade"
                                                                            id="v-pills-Jimena-ThreeMounth"
                                                                            role="tabpanel"
                                                                            aria-labelledby="v-pills-Jimena-ThreeMounth-tab">

                                                                            <div class="container mt-1 alert alert-primary"
                                                                                role="alert">

                                                                                <div class="owl-carousel">
                                                                                    <div class="item"><img
                                                                                            title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                                                                                            src="images/cats/kitty/J/Jimena/ThreeMounth/1.jpg"
                                                                                            alt="питомник норвежской">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки норвежская лесная кошка котята"
                                                                                            src="images/cats/kitty/J/Jimena/ThreeMounth/2.jpg"
                                                                                            alt="продажа норвежской">
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div class="container alert alert-primary"
                                                                                role="alert">

                                                                                <div class="row">
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Jimena_ThreeMounth"
                                                                                            href="images/cats/kitty/J/Jimena/ThreeMounth/1.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                                                                                                src="images/cats/kitty/J/Jimena/ThreeMounth/1.jpg"
                                                                                                alt="котенок в подарок">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Jimena_ThreeMounth"
                                                                                            href="images/cats/kitty/J/Jimena/ThreeMounth/2.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная кошка купить в москве"
                                                                                                src="images/cats/kitty/J/Jimena/ThreeMounth/2.jpg"
                                                                                                alt="норвежский котенок в подарок">
                                                                                        </a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </section>

                                                                        <!-- - Химене три месяца -->

                                                                    </div>

                                                                    <div class="container alert alert-info"
                                                                        role="alert">
                                                                        <p>Хранитель дома. Четвертый воин.
                                                                            Фундамент и
                                                                            база для братьев и сестер. Пройти мимо
                                                                            невозможно ибо я всегда на страже. Сила
                                                                            со
                                                                            мной. Великий союзник это.</p>
                                                                    </div>

                                                                </div>

                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary"
                                                                    data-dismiss="modal">Закрыть</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p class="text-center">Химена. Добро пожаловать.</p>

                                                <div class="d-flex flex-column justify-content-center bd-highlight">
                                                    <button class="flex-fill bd-highlight btn btn-primary m-1"
                                                        data-placement="top" data-toggle="popover"
                                                        title="Резервирование котенка"
                                                        data-content="Резервирование котенка">Своюбодна</button>
                                                    <button type="button"
                                                        class="flex-fill bd-highlight btn btn-primary m-1"
                                                        data-toggle="modal" data-target="#kittyJimenaDocuments">
                                                        Документы
                                                    </button>
                                                    <button type="button"
                                                        class="flex-fill bd-highlight btn btn-primary m-1"
                                                        data-toggle="modal" data-target="#kittyJimena">
                                                        Фото
                                                    </button>
                                                </div>

                                                <div class="modal fade" id="kittyJimenaDocuments" tabindex="-1"
                                                    role="dialog" aria-labelledby="kittyJimenaTitle" aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title text-center"
                                                                    id="kittyJimenaTitle">Метрика
                                                                </h5>
                                                                <button type="button" class="close" data-dismiss="modal"
                                                                    aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <a data-fancybox="cats_kitty_Jimena_Documents"
                                                                    href="images/cats/kitty/metriks/J/Jimena.jpg">
                                                                    <img class="img-fluid"
                                                                        title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                        src="images/cats/kitty/metriks/J/Jimena.jpg"
                                                                        alt="котята норвежской">
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </article>
                                </div>


                                <!-- Помет "J", Конец описания Химена -->


                            </div>

                            <div>Форма здесь 111111</div>

                        </div>

                        <!-- Помет "J", Конец описания -->



                        

                    </section>

                    <section class="tab-pane fade border-bottom border-primary" id="v-pills-headingBrood_K"
                        role="tabpanel">

                        <!-- Помет "K", Начало описания -->

                        <div style="background-color: rgba(248, 249, 250, 0.5);" class="card">

                            <div class="card-body">

                                <div class="card-deck">

                                    <!-- Помет "K", Начало описания Анкалиме -->

                                    <?php $catsShower->show_distinct_cat('Ancalime', 'K'); ?>

                                    <!-- Помет "K", Конец описания Анкалиме -->

                                    <!-- Помет "K", Начало описания Пампкин -->

                                    <?php $catsShower->show_distinct_cat('Pumpkin', 'K'); ?>

                                    <!-- Помет "K", Конец описания Пампкин -->

                                </div>

                                <h5 class="text-center m-3">Помет "K" (15.11.2018)</h5>

                                <!-- Помет "K", Начало описания Карлос -->

                                <div class="card-deck mt-4">
                                    <article style="background-color: rgba(23, 162, 184, 0.2);" class="card">
                                        <a href="#" data-toggle="modal" data-target="#kittyKarlos">
                                            <img class="card-img-top rounded-circle"
                                                title="норвежская лесная кошка купить в москве цена кошки породы норвежская лесная продажа норвежских лесных котят"
                                                src="images/cats/kitty/K/Karlos/TwoMonth/1.jpg"
                                                alt="питомник норвежской"></a>
                                        <div class="card-body">
                                            <header>
                                                <h5 class="card-title text-center">Karlos</h5>
                                            </header>
                                            <div class="card-footer">

                                                <div class="modal fade" id="kittyKarlos" tabindex="-1" role="dialog"
                                                    aria-labelledby="kittyKarlosTitle" aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title text-center"
                                                                    id="kittyKarlosTitle">Karlos
                                                                </h5>
                                                                <button type="button" class="close" data-dismiss="modal"
                                                                    aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body">

                                                                <div class="container border border-primary">

                                                                    <div class="nav nav-fill nav-pills"
                                                                        id="v-pills-tab-Karlos" role="tablist">
                                                                        <a class="nav-link active"
                                                                            id="v-pills-Karlos-twoWeeks-tab"
                                                                            data-toggle="pill"
                                                                            href="#v-pills-Karlos-twoWeeks" role="tab"
                                                                            aria-controls="v-pills-Karlos-twoWeeks"
                                                                            aria-selected="true">
                                                                            Две недели</a>
                                                                        <a class="nav-link"
                                                                            id="v-pills-Karlos-OneMonth-tab"
                                                                            data-toggle="pill"
                                                                            href="#v-pills-Karlos-OneMonth" role="tab"
                                                                            aria-controls="v-pills-Karlos-OneMonth"
                                                                            aria-selected="false">Месяц</a>
                                                                        <a class="nav-link"
                                                                            id="v-pills-Karlos-TwoMonth-tab"
                                                                            data-toggle="pill"
                                                                            href="#v-pills-Karlos-TwoMonth" role="tab"
                                                                            aria-controls="v-pills-Karlos-TwoMonth"
                                                                            aria-selected="false">Два месяца</a>
                                                                    </div>

                                                                    <div id="v-pills-tabContent-Karlos"
                                                                        class="tab-content">

                                                                        <!-- + Карлосу две недели -->

                                                                        <section class="tab-pane fade show active"
                                                                            id="v-pills-Karlos-twoWeeks" role="tabpanel"
                                                                            aria-labelledby="v-pills-Karlos-twoWeeks-tab">

                                                                            <div class="container mt-1 alert alert-primary"
                                                                                role="alert">

                                                                                <div class="owl-carousel">
                                                                                    <div class="item"><img
                                                                                            title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                                                                                            src="images/cats/kitty/K/Karlos/TwoWeeks/1.jpg"
                                                                                            alt="продажа норвежской">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/K/Karlos/TwoWeeks/2.jpg"
                                                                                            alt="норвежские лесные котята">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/K/Karlos/TwoWeeks/3.jpg"
                                                                                            alt="норвежский котенок">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/K/Karlos/TwoWeeks/4.jpg"
                                                                                            alt="котята норвежской">
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div class="container alert alert-primary"
                                                                                role="alert">

                                                                                <div class="row">
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Karlos_TwoWeeks"
                                                                                            href="images/cats/kitty/K/Karlos/TwoWeeks/1.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                                                                                                src="images/cats/kitty/K/Karlos/TwoWeeks/1.jpg"
                                                                                                alt="купить котенка в москве">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Karlos_TwoWeeks"
                                                                                            href="images/cats/kitty/K/Karlos/TwoWeeks/2.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная питомник питомники норвежских кошек питомник норвежских лесных кошек"
                                                                                                src="images/cats/kitty/K/Karlos/TwoWeeks/2.jpg"
                                                                                                alt="путешествие в икстлан">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Karlos_TwoWeeks"
                                                                                            href="images/cats/kitty/K/Karlos/TwoWeeks/3.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная питомник питомники норвежских кошек питомник норвежских лесных кошек"
                                                                                                src="images/cats/kitty/K/Karlos/TwoWeeks/3.jpg"
                                                                                                alt="норвежские лесные красавицы">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Karlos_TwoWeeks"
                                                                                            href="images/cats/kitty/K/Karlos/TwoWeeks/4.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная питомник питомники норвежских кошек питомник норвежских лесных кошек"
                                                                                                src="images/cats/kitty/K/Karlos/TwoWeeks/4.jpg"
                                                                                                alt="котенок в подарок">
                                                                                        </a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </section>

                                                                        <!-- - Карлосу две недели -->

                                                                        <!-- + Карлосу месяц -->

                                                                        <section class="tab-pane fade"
                                                                            id="v-pills-Karlos-OneMonth" role="tabpanel"
                                                                            aria-labelledby="v-pills-Karlos-OneMonth-tab">

                                                                            <div class="container mt-1 alert alert-primary"
                                                                                role="alert">

                                                                                <div class="owl-carousel">
                                                                                    <div class="item"><img
                                                                                            title="купить котенка норвежской лесной кошки котята норвежской лесной москва"
                                                                                            src="images/cats/kitty/K/Karlos/OneMonth/1.jpg"
                                                                                            alt="норвежский котенок в подарок">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Karlos/OneMonth/2.jpg"
                                                                                            alt="норвежские лесные котята">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Karlos/OneMonth/3.jpg"
                                                                                            alt="котенок норвежской лесной">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Karlos/OneMonth/4.jpg"
                                                                                            alt="норвежская лесная купить">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Karlos/OneMonth/5.jpg"
                                                                                            alt="питомники норвежских кошек">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Karlos/OneMonth/6.jpg"
                                                                                            alt="норвежская лесная питомник">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Karlos/OneMonth/7.jpg"
                                                                                            alt="питомник норвежской">
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div class="container alert alert-primary"
                                                                                role="alert">

                                                                                <div class="row">
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Karlos_OneMonth"
                                                                                            href="images/cats/kitty/K/Karlos/OneMonth/1.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="котенок норвежской лесной кошки в москве купить котенка норвежской лесной кошки порода норвежская лесная кошка"
                                                                                                src="images/cats/kitty/K/Karlos/OneMonth/1.jpg"
                                                                                                alt="продажа норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Karlos_OneMonth"
                                                                                            href="images/cats/kitty/K/Karlos/OneMonth/2.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/K/Karlos/OneMonth/2.jpg"
                                                                                                alt="норвежские лесные котята">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Karlos_OneMonth"
                                                                                            href="images/cats/kitty/K/Karlos/OneMonth/3.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/K/Karlos/OneMonth/3.jpg"
                                                                                                alt="норвежский котенок">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Karlos_OneMonth"
                                                                                            href="images/cats/kitty/K/Karlos/OneMonth/4.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/K/Karlos/OneMonth/4.jpg"
                                                                                                alt="котята норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Karlos_OneMonth"
                                                                                            href="images/cats/kitty/K/Karlos/OneMonth/5.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/K/Karlos/OneMonth/5.jpg"
                                                                                                alt="купить котенка в москве">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Karlos_OneMonth"
                                                                                            href="images/cats/kitty/K/Karlos/OneMonth/6.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/K/Karlos/OneMonth/6.jpg"
                                                                                                alt="путешествие в икстлан">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Karlos_OneMonth"
                                                                                            href="images/cats/kitty/K/Karlos/OneMonth/7.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/K/Karlos/OneMonth/7.jpg"
                                                                                                alt="норвежские лесные красавицы">
                                                                                        </a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </section>

                                                                        <!-- - Карлосу месяц -->

                                                                        <!-- + Карлосу два месяца -->

                                                                        <section class="tab-pane fade"
                                                                            id="v-pills-Karlos-TwoMonth" role="tabpanel"
                                                                            aria-labelledby="v-pills-Karlos-TwoMonth-tab">

                                                                            <div class="container mt-1 alert alert-primary"
                                                                                role="alert">

                                                                                <div class="owl-carousel">
                                                                                    <div class="item"><img
                                                                                            title="купить котенка норвежской лесной кошки котята норвежской лесной москва"
                                                                                            src="images/cats/kitty/K/Karlos/TwoMonth/1.jpg"
                                                                                            alt="норвежский котенок в подарок">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Karlos/TwoMonth/2.jpg"
                                                                                            alt="норвежские лесные котята">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Karlos/TwoMonth/3.jpg"
                                                                                            alt="котенок норвежской лесной">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Karlos/TwoMonth/4.jpg"
                                                                                            alt="норвежская лесная купить">
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div class="container alert alert-primary"
                                                                                role="alert">

                                                                                <div class="row">
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Karlos_TwoMonth"
                                                                                            href="images/cats/kitty/K/Karlos/TwoMonth/1.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="котенок норвежской лесной кошки в москве купить котенка норвежской лесной кошки порода норвежская лесная кошка"
                                                                                                src="images/cats/kitty/K/Karlos/TwoMonth/1.jpg"
                                                                                                alt="продажа норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Karlos_TwoMonth"
                                                                                            href="images/cats/kitty/K/Karlos/TwoMonth/2.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/K/Karlos/TwoMonth/2.jpg"
                                                                                                alt="норвежские лесные котята">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Karlos_TwoMonth"
                                                                                            href="images/cats/kitty/K/Karlos/TwoMonth/3.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/K/Karlos/TwoMonth/3.jpg"
                                                                                                alt="норвежский котенок">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Karlos_TwoMonth"
                                                                                            href="images/cats/kitty/K/Karlos/TwoMonth/4.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/K/Karlos/TwoMonth/4.jpg"
                                                                                                alt="котята норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </section>

                                                                        <!-- - Карлосу два месяца -->

                                                                    </div>

                                                                    <div class="container alert alert-info"
                                                                        role="alert">
                                                                        <p>Я Карлос. Первый среди равных. Боец с
                                                                            рождения. Всё, что вы хотели видеть в
                                                                            <mark>норвежском
                                                                                лесном коте</mark> - всё есть во мне.
                                                                        </p>
                                                                    </div>

                                                                </div>

                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary"
                                                                    data-dismiss="modal">Закрыть</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p class="text-center">Доброго дня. Я Карлос.</p>
                                                <div class="d-flex flex-column justify-content-center bd-highlight">

                                                    <button class="flex-fill bd-highlight btn btn-secondary m-1"
                                                        data-placement="top" data-toggle="popover" title="Обрел дом"
                                                        data-content="Обрел дом у Владимира из Москвы">Обрел
                                                        дом</button>
                                                    <button type="button"
                                                        class="flex-fill bd-highlight btn btn-primary m-1"
                                                        data-toggle="modal" data-target="#kittyKarlosDocuments">
                                                        Документы
                                                    </button>
                                                    <button type="button"
                                                        class="flex-fill bd-highlight btn btn-primary m-1"
                                                        data-toggle="modal" data-target="#kittyKarlos">
                                                        Фото
                                                    </button>
                                                </div>

                                                <div class="modal fade" id="kittyKarlosDocuments" tabindex="-1"
                                                    role="dialog" aria-labelledby="kittyKarlosTitle" aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title text-center"
                                                                    id="kittyKarlosTitle">Метрика
                                                                </h5>
                                                                <button type="button" class="close" data-dismiss="modal"
                                                                    aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <a data-fancybox="cats_kitty_Karlos_Documents"
                                                                    href="images/cats/kitty/metriks/K/Karlos.jpg">
                                                                    <img class="img-fluid"
                                                                        title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                        src="images/cats/kitty/metriks/K/Karlos.jpg"
                                                                        alt="котята норвежской">
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </article>
                                </div>

                                <!-- Помет "K", Конец описания Карлос -->

                                <!-- Помет "K", Начало описания Константин -->

                                <div class="card-deck mt-4">
                                    <article style="background-color: rgba(23, 162, 184, 0.2);" class="card">
                                        <a href="#" data-toggle="modal" data-target="#kittyKonstantin">
                                            <img class="card-img-top rounded-circle"
                                                title="норвежская лесная кошка купить в москве цена кошки породы норвежская лесная продажа норвежских лесных котят"
                                                src="images/cats/kitty/K/Konstantin/TwoMonth/4.jpg"
                                                alt="котенок в подарок"></a>
                                        <div class="card-body">
                                            <header>
                                                <h5 class="card-title text-center">Konstantin</h5>
                                            </header>
                                            <div class="card-footer">

                                                <div class="modal fade" id="kittyKonstantin" tabindex="-1" role="dialog"
                                                    aria-labelledby="kittyKonstantinTitle" aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title text-center"
                                                                    id="kittyKonstantinTitle">Konstantin
                                                                </h5>
                                                                <button type="button" class="close" data-dismiss="modal"
                                                                    aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body">

                                                                <div class="container border border-primary">

                                                                    <div class="nav nav-fill nav-pills"
                                                                        id="v-pills-tab-Konstantin" role="tablist">
                                                                        <a class="nav-link active"
                                                                            id="v-pills-Konstantin-twoWeeks-tab"
                                                                            data-toggle="pill"
                                                                            href="#v-pills-Konstantin-twoWeeks"
                                                                            role="tab"
                                                                            aria-controls="v-pills-Konstantin-twoWeeks"
                                                                            aria-selected="true">
                                                                            Две недели</a>
                                                                        <a class="nav-link"
                                                                            id="v-pills-Konstantin-OneMonth-tab"
                                                                            data-toggle="pill"
                                                                            href="#v-pills-Konstantin-OneMonth"
                                                                            role="tab"
                                                                            aria-controls="v-pills-Konstantin-OneMonth"
                                                                            aria-selected="false">Месяц</a>
                                                                        <a class="nav-link"
                                                                            id="v-pills-Konstantin-TwoMonth-tab"
                                                                            data-toggle="pill"
                                                                            href="#v-pills-Konstantin-TwoMonth"
                                                                            role="tab"
                                                                            aria-controls="v-pills-Konstantin-TwoMonth"
                                                                            aria-selected="false">Два месяца</a>
                                                                    </div>

                                                                    <div id="v-pills-tabContent-Konstantin"
                                                                        class="tab-content">

                                                                        <!-- + Константину две недели -->

                                                                        <section class="tab-pane fade show active"
                                                                            id="v-pills-Konstantin-twoWeeks"
                                                                            role="tabpanel"
                                                                            aria-labelledby="v-pills-Konstantin-twoWeeks-tab">

                                                                            <div class="container mt-1 alert alert-primary"
                                                                                role="alert">

                                                                                <div class="owl-carousel">
                                                                                    <div class="item"><img
                                                                                            title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                                                                                            src="images/cats/kitty/K/Konstantin/TwoWeeks/1.jpg"
                                                                                            alt="норвежский котенок в подарок">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/K/Konstantin/TwoWeeks/2.jpg"
                                                                                            alt="норвежские лесные котята">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/K/Konstantin/TwoWeeks/3.jpg"
                                                                                            alt="котенок норвежской лесной">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/K/Konstantin/TwoWeeks/4.jpg"
                                                                                            alt="норвежская лесная купить">
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div class="container alert alert-primary"
                                                                                role="alert">

                                                                                <div class="row">
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Konstantin_TwoWeeks"
                                                                                            href="images/cats/kitty/K/Konstantin/TwoWeeks/1.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                                                                                                src="images/cats/kitty/K/Konstantin/TwoWeeks/1.jpg"
                                                                                                alt="питомники норвежских кошек">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Konstantin_TwoWeeks"
                                                                                            href="images/cats/kitty/K/Konstantin/TwoWeeks/2.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная питомник питомники норвежских кошек питомник норвежских лесных кошек"
                                                                                                src="images/cats/kitty/K/Konstantin/TwoWeeks/2.jpg"
                                                                                                alt="норвежская лесная питомник">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Konstantin_TwoWeeks"
                                                                                            href="images/cats/kitty/K/Konstantin/TwoWeeks/3.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная питомник питомники норвежских кошек питомник норвежских лесных кошек"
                                                                                                src="images/cats/kitty/K/Konstantin/TwoWeeks/3.jpg"
                                                                                                alt="питомник норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Konstantin_TwoWeeks"
                                                                                            href="images/cats/kitty/K/Konstantin/TwoWeeks/4.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная питомник питомники норвежских кошек питомник норвежских лесных кошек"
                                                                                                src="images/cats/kitty/K/Konstantin/TwoWeeks/4.jpg"
                                                                                                alt="продажа норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </section>

                                                                        <!-- - Константину две недели -->

                                                                        <!-- + Константину месяц -->

                                                                        <section class="tab-pane fade"
                                                                            id="v-pills-Konstantin-OneMonth"
                                                                            role="tabpanel"
                                                                            aria-labelledby="v-pills-Konstantin-OneMonth-tab">

                                                                            <div class="container mt-1 alert alert-primary"
                                                                                role="alert">

                                                                                <div class="owl-carousel">
                                                                                    <div class="item"><img
                                                                                            title="купить котенка норвежской лесной кошки котята норвежской лесной москва"
                                                                                            src="images/cats/kitty/K/Konstantin/OneMonth/1.jpg"
                                                                                            alt="норвежские лесные котята">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Konstantin/OneMonth/2.jpg"
                                                                                            alt="норвежский котенок">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Konstantin/OneMonth/3.jpg"
                                                                                            alt="котята норвежской">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Konstantin/OneMonth/4.jpg"
                                                                                            alt="купить котенка в москве">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Konstantin/OneMonth/5.jpg"
                                                                                            alt="путешествие в икстлан">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Konstantin/OneMonth/6.jpg"
                                                                                            alt="норвежские лесные красавицы">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Konstantin/OneMonth/7.jpg"
                                                                                            alt="котенок в подарок">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Konstantin/OneMonth/8.jpg"
                                                                                            alt="норвежский котенок в подарок">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Konstantin/OneMonth/9.jpg"
                                                                                            alt="норвежские лесные котята">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Konstantin/OneMonth/10.jpg"
                                                                                            alt="котенок норвежской лесной">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Konstantin/OneMonth/11.jpg"
                                                                                            alt="норвежская лесная купить">
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div class="container alert alert-primary"
                                                                                role="alert">

                                                                                <div class="row">
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Konstantin_OneMonth"
                                                                                            href="images/cats/kitty/K/Konstantin/OneMonth/1.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="котенок норвежской лесной кошки в москве купить котенка норвежской лесной кошки порода норвежская лесная кошка"
                                                                                                src="images/cats/kitty/K/Konstantin/OneMonth/1.jpg"
                                                                                                alt="питомники норвежских кошек">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Konstantin_OneMonth"
                                                                                            href="images/cats/kitty/K/Konstantin/OneMonth/2.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/K/Konstantin/OneMonth/2.jpg"
                                                                                                alt="норвежская лесная питомник">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Konstantin_OneMonth"
                                                                                            href="images/cats/kitty/K/Konstantin/OneMonth/3.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/K/Konstantin/OneMonth/3.jpg"
                                                                                                alt="питомник норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Konstantin_OneMonth"
                                                                                            href="images/cats/kitty/K/Konstantin/OneMonth/4.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/K/Konstantin/OneMonth/4.jpg"
                                                                                                alt="продажа норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Konstantin_OneMonth"
                                                                                            href="images/cats/kitty/K/Konstantin/OneMonth/5.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/K/Konstantin/OneMonth/5.jpg"
                                                                                                alt="норвежские лесные котята">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Konstantin_OneMonth"
                                                                                            href="images/cats/kitty/K/Konstantin/OneMonth/6.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/K/Konstantin/OneMonth/6.jpg"
                                                                                                alt="норвежский котенок">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Konstantin_OneMonth"
                                                                                            href="images/cats/kitty/K/Konstantin/OneMonth/7.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/K/Konstantin/OneMonth/7.jpg"
                                                                                                alt="котята норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Konstantin_OneMonth"
                                                                                            href="images/cats/kitty/K/Konstantin/OneMonth/8.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/K/Konstantin/OneMonth/8.jpg"
                                                                                                alt="купить котенка в москве">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Konstantin_OneMonth"
                                                                                            href="images/cats/kitty/K/Konstantin/OneMonth/9.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/K/Konstantin/OneMonth/9.jpg"
                                                                                                alt="путешествие в икстлан">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Konstantin_OneMonth"
                                                                                            href="images/cats/kitty/K/Konstantin/OneMonth/10.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/K/Konstantin/OneMonth/10.jpg"
                                                                                                alt="норвежские лесные красавицы">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Konstantin_OneMonth"
                                                                                            href="images/cats/kitty/K/Konstantin/OneMonth/11.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/K/Konstantin/OneMonth/11.jpg"
                                                                                                alt="котенок в подарок">
                                                                                        </a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </section>

                                                                        <!-- - Константину месяц -->

                                                                        <!-- + Константину два месяца -->

                                                                        <section class="tab-pane fade"
                                                                            id="v-pills-Konstantin-TwoMonth"
                                                                            role="tabpanel"
                                                                            aria-labelledby="v-pills-Konstantin-TwoMonth-tab">

                                                                            <div class="container mt-1 alert alert-primary"
                                                                                role="alert">

                                                                                <div class="owl-carousel">
                                                                                    <div class="item"><img
                                                                                            title="купить котенка норвежской лесной кошки котята норвежской лесной москва"
                                                                                            src="images/cats/kitty/K/Konstantin/TwoMonth/1.jpg"
                                                                                            alt="норвежские лесные котята">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Konstantin/TwoMonth/2.jpg"
                                                                                            alt="норвежский котенок">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Konstantin/TwoMonth/3.jpg"
                                                                                            alt="котята норвежской">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Konstantin/TwoMonth/4.jpg"
                                                                                            alt="купить котенка в москве">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Konstantin/TwoMonth/5.jpg"
                                                                                            alt="путешествие в икстлан">
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div class="container alert alert-primary"
                                                                                role="alert">

                                                                                <div class="row">
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Konstantin_TwoMonth"
                                                                                            href="images/cats/kitty/K/Konstantin/TwoMonth/1.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="котенок норвежской лесной кошки в москве купить котенка норвежской лесной кошки порода норвежская лесная кошка"
                                                                                                src="images/cats/kitty/K/Konstantin/TwoMonth/1.jpg"
                                                                                                alt="питомники норвежских кошек">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Konstantin_TwoMonth"
                                                                                            href="images/cats/kitty/K/Konstantin/TwoMonth/2.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/K/Konstantin/TwoMonth/2.jpg"
                                                                                                alt="норвежская лесная питомник">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Konstantin_TwoMonth"
                                                                                            href="images/cats/kitty/K/Konstantin/TwoMonth/3.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/K/Konstantin/TwoMonth/3.jpg"
                                                                                                alt="питомник норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Konstantin_TwoMonth"
                                                                                            href="images/cats/kitty/K/Konstantin/TwoMonth/4.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/K/Konstantin/TwoMonth/4.jpg"
                                                                                                alt="продажа норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Konstantin_TwoMonth"
                                                                                            href="images/cats/kitty/K/Konstantin/TwoMonth/5.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                                                src="images/cats/kitty/K/Konstantin/TwoMonth/5.jpg"
                                                                                                alt="норвежские лесные котята">
                                                                                        </a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </section>

                                                                        <!-- - Константину два месяца -->

                                                                    </div>

                                                                    <div class="container alert alert-info"
                                                                        role="alert">
                                                                        <p>Да разлетиться в ужасе нечисть от упоминания
                                                                            имени моего. Я Константин и компромиссов
                                                                            для врага у меня нет.</p>
                                                                    </div>

                                                                </div>

                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary"
                                                                    data-dismiss="modal">Закрыть</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p class="text-center">Я Константин. Доброй охоты.</p>
                                                <div class="d-flex flex-column justify-content-center bd-highlight">

                                                    <button class="flex-fill bd-highlight btn btn-secondary m-1"
                                                        data-placement="top" data-toggle="popover" title="Обрел дом"
                                                        data-content="Обрел дом у Инны из Москвы">Обрел дом</button>
                                                    <button type="button"
                                                        class="flex-fill bd-highlight btn btn-primary m-1"
                                                        data-toggle="modal" data-target="#kittyKonstantinDocuments">
                                                        Документы
                                                    </button>
                                                    <button type="button"
                                                        class="flex-fill bd-highlight btn btn-primary m-1"
                                                        data-toggle="modal" data-target="#kittyKonstantin">
                                                        Фото
                                                    </button>
                                                </div>

                                                <div class="modal fade" id="kittyKonstantinDocuments" tabindex="-1"
                                                    role="dialog" aria-labelledby="kittyKonstantinTitle"
                                                    aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title text-center"
                                                                    id="kittyKonstantinTitle">Метрика
                                                                </h5>
                                                                <button type="button" class="close" data-dismiss="modal"
                                                                    aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <a data-fancybox="cats_kitty_Konstantin_Documents"
                                                                    href="images/cats/kitty/metriks/K/Konstantin.jpg">
                                                                    <img class="img-fluid"
                                                                        title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                        src="images/cats/kitty/metriks/K/Konstantin.jpg"
                                                                        alt="котята норвежской">
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </article>
                                </div>

                                <!-- Помет "K", Конец описания Константин -->

                                <!-- Помет "K", Начало описания Каталина -->

                                <div class="card-deck mt-4">
                                    <article style="background-color: rgba(23, 162, 184, 0.2);" class="card">
                                        <a href="#" data-toggle="modal" data-target="#kittyKatalina">
                                            <img class="card-img-top rounded-circle"
                                                title="норвежская лесная кошка купить в москве цена кошки породы норвежская лесная продажа норвежских лесных котят"
                                                src="images/cats/kitty/K/Katalina/ThreeMounth/8.jpg"
                                                alt="норвежский котенок в подарок"></a>
                                        <div class="card-body">
                                            <header>
                                                <h5 class="card-title text-center">Katalina</h5>
                                            </header>
                                            <div class="card-footer">

                                                <div class="modal fade" id="kittyKatalina" tabindex="-1" role="dialog"
                                                    aria-labelledby="kittyKatalinaTitle" aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title text-center"
                                                                    id="kittyKatalinaTitle">Katalina
                                                                </h5>
                                                                <button type="button" class="close" data-dismiss="modal"
                                                                    aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body">

                                                                <div class="container border border-primary">

                                                                    <div class="nav nav-fill nav-pills"
                                                                        id="v-pills-tab-Katalina" role="tablist">
                                                                        <a class="nav-link active"
                                                                            id="v-pills-Katalina-twoWeeks-tab"
                                                                            data-toggle="pill"
                                                                            href="#v-pills-Katalina-twoWeeks" role="tab"
                                                                            aria-controls="v-pills-Katalina-twoWeeks"
                                                                            aria-selected="true">
                                                                            Две недели</a>
                                                                        <a class="nav-link"
                                                                            id="v-pills-Katalina-OneMonth-tab"
                                                                            data-toggle="pill"
                                                                            href="#v-pills-Katalina-OneMonth" role="tab"
                                                                            aria-controls="v-pills-Katalina-OneMonth"
                                                                            aria-selected="false">Месяц</a>
                                                                        <a class="nav-link"
                                                                            id="v-pills-Katalina-TwoMonth-tab"
                                                                            data-toggle="pill"
                                                                            href="#v-pills-Katalina-TwoMonth" role="tab"
                                                                            aria-controls="v-pills-Katalina-TwoMonth"
                                                                            aria-selected="false">Два месяца</a>
                                                                        <a class="nav-link"
                                                                            id="v-pills-Katalina-ThreeMounth-tab"
                                                                            data-toggle="pill"
                                                                            href="#v-pills-Katalina-ThreeMounth"
                                                                            role="tab"
                                                                            aria-controls="v-pills-Katalina-ThreeMounth"
                                                                            aria-selected="false">Три месяца</a>
                                                                    </div>

                                                                    <div id="v-pills-tabContent-Katalina"
                                                                        class="tab-content">

                                                                        <!-- + Каталине две недели -->

                                                                        <section class="tab-pane fade show active"
                                                                            id="v-pills-Katalina-twoWeeks"
                                                                            role="tabpanel"
                                                                            aria-labelledby="v-pills-Katalina-twoWeeks-tab">

                                                                            <div class="container mt-1 alert alert-primary"
                                                                                role="alert">

                                                                                <div class="owl-carousel">
                                                                                    <div class="item"><img
                                                                                            title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                                                                                            src="images/cats/kitty/K/Katalina/TwoWeeks/1.jpg"
                                                                                            alt="норвежские лесные котята">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/K/Katalina/TwoWeeks/2.jpg"
                                                                                            alt="котенок норвежской лесной">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/K/Katalina/TwoWeeks/3.jpg"
                                                                                            alt="норвежская лесная купить">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/K/Katalina/TwoWeeks/4.jpg"
                                                                                            alt="питомники норвежских кошек">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                                                                                            src="images/cats/kitty/K/Katalina/TwoWeeks/5.jpg"
                                                                                            alt="норвежская лесная питомник">
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div class="container alert alert-primary"
                                                                                role="alert">

                                                                                <div class="row">
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_TwoWeeks"
                                                                                            href="images/cats/kitty/K/Katalina/TwoWeeks/1.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                                                                                                src="images/cats/kitty/K/Katalina/TwoWeeks/1.jpg"
                                                                                                alt="питомник норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_TwoWeeks"
                                                                                            href="images/cats/kitty/K/Katalina/TwoWeeks/2.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная питомник питомники норвежских кошек питомник норвежских лесных кошек"
                                                                                                src="images/cats/kitty/K/Katalina/TwoWeeks/2.jpg"
                                                                                                alt="продажа норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_TwoWeeks"
                                                                                            href="images/cats/kitty/K/Katalina/TwoWeeks/3.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная питомник питомники норвежских кошек питомник норвежских лесных кошек"
                                                                                                src="images/cats/kitty/K/Katalina/TwoWeeks/3.jpg"
                                                                                                alt="норвежские лесные котята">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_TwoWeeks"
                                                                                            href="images/cats/kitty/K/Katalina/TwoWeeks/4.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная питомник питомники норвежских кошек питомник норвежских лесных кошек"
                                                                                                src="images/cats/kitty/K/Katalina/TwoWeeks/4.jpg"
                                                                                                alt="норвежский котенок">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_TwoWeeks"
                                                                                            href="images/cats/kitty/K/Katalina/TwoWeeks/5.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="норвежская лесная питомник питомники норвежских кошек питомник норвежских лесных кошек"
                                                                                                src="images/cats/kitty/K/Katalina/TwoWeeks/5.jpg"
                                                                                                alt="котята норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </section>

                                                                        <!-- - Каталине две недели -->

                                                                        <!-- + Каталине месяц -->

                                                                        <section class="tab-pane fade"
                                                                            id="v-pills-Katalina-OneMonth"
                                                                            role="tabpanel"
                                                                            aria-labelledby="v-pills-Katalina-OneMonth-tab">

                                                                            <div class="container mt-1 alert alert-primary"
                                                                                role="alert">

                                                                                <div class="owl-carousel">
                                                                                    <div class="item"><img
                                                                                            title="купить котенка норвежской лесной кошки котята норвежской лесной москва"
                                                                                            src="images/cats/kitty/K/Katalina/OneMonth/1.jpg"
                                                                                            alt="купить котенка в москве">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Katalina/OneMonth/2.jpg"
                                                                                            alt="путешествие в икстлан">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Katalina/OneMonth/3.jpg"
                                                                                            alt="норвежские лесные красавицы">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Katalina/OneMonth/4.jpg"
                                                                                            alt="котенок в подарок">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Katalina/OneMonth/5.jpg"
                                                                                            alt="норвежский котенок в подарок">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Katalina/OneMonth/6.jpg"
                                                                                            alt="норвежские лесные котята">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Katalina/OneMonth/7.jpg"
                                                                                            alt="котенок норвежской лесной">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Katalina/OneMonth/8.jpg"
                                                                                            alt="норвежская лесная купить">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Katalina/OneMonth/9.jpg"
                                                                                            alt="питомники норвежских кошек">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Katalina/OneMonth/10.jpg"
                                                                                            alt="норвежская лесная питомник">
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div class="container alert alert-primary"
                                                                                role="alert">

                                                                                <div class="row">
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_OneMonth"
                                                                                            href="images/cats/kitty/K/Katalina/OneMonth/1.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="котенок норвежской лесной кошки в москве купить котенка норвежской лесной кошки порода норвежская лесная кошка"
                                                                                                src="images/cats/kitty/K/Katalina/OneMonth/1.jpg"
                                                                                                alt="питомник норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_OneMonth"
                                                                                            href="images/cats/kitty/K/Katalina/OneMonth/2.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/K/Katalina/OneMonth/2.jpg"
                                                                                                alt="продажа норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_OneMonth"
                                                                                            href="images/cats/kitty/K/Katalina/OneMonth/3.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/K/Katalina/OneMonth/3.jpg"
                                                                                                alt="норвежские лесные котята">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_OneMonth"
                                                                                            href="images/cats/kitty/K/Katalina/OneMonth/4.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/K/Katalina/OneMonth/4.jpg"
                                                                                                alt="норвежский котенок">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_OneMonth"
                                                                                            href="images/cats/kitty/K/Katalina/OneMonth/5.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/K/Katalina/OneMonth/5.jpg"
                                                                                                alt="котята норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_OneMonth"
                                                                                            href="images/cats/kitty/K/Katalina/OneMonth/6.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/K/Katalina/OneMonth/6.jpg"
                                                                                                alt="купить котенка в москве">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_OneMonth"
                                                                                            href="images/cats/kitty/K/Katalina/OneMonth/7.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/K/Katalina/OneMonth/7.jpg"
                                                                                                alt="путешествие в икстлан">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_OneMonth"
                                                                                            href="images/cats/kitty/K/Katalina/OneMonth/8.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/K/Katalina/OneMonth/8.jpg"
                                                                                                alt="норвежские лесные красавицы">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_OneMonth"
                                                                                            href="images/cats/kitty/K/Katalina/OneMonth/9.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/K/Katalina/OneMonth/9.jpg"
                                                                                                alt="котенок в подарок">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_OneMonth"
                                                                                            href="images/cats/kitty/K/Katalina/OneMonth/10.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/K/Katalina/OneMonth/10.jpg"
                                                                                                alt="норвежский котенок в подарок">
                                                                                        </a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </section>

                                                                        <!-- - Каталине месяц -->

                                                                        <!-- + Каталине два месяца -->

                                                                        <section class="tab-pane fade"
                                                                            id="v-pills-Katalina-TwoMonth"
                                                                            role="tabpanel"
                                                                            aria-labelledby="v-pills-Katalina-TwoMonth-tab">

                                                                            <div class="container mt-1 alert alert-primary"
                                                                                role="alert">

                                                                                <div class="owl-carousel">
                                                                                    <div class="item"><img
                                                                                            title="купить котенка норвежской лесной кошки котята норвежской лесной москва"
                                                                                            src="images/cats/kitty/K/Katalina/TwoMonth/1.jpg"
                                                                                            alt="купить котенка в москве">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Katalina/TwoMonth/2.jpg"
                                                                                            alt="путешествие в икстлан">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Katalina/TwoMonth/3.jpg"
                                                                                            alt="норвежские лесные красавицы">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Katalina/TwoMonth/4.jpg"
                                                                                            alt="котенок в подарок">
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div class="container alert alert-primary"
                                                                                role="alert">

                                                                                <div class="row">
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_TwoMonth"
                                                                                            href="images/cats/kitty/K/Katalina/TwoMonth/1.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="котенок норвежской лесной кошки в москве купить котенка норвежской лесной кошки порода норвежская лесная кошка"
                                                                                                src="images/cats/kitty/K/Katalina/TwoMonth/1.jpg"
                                                                                                alt="питомник норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_TwoMonth"
                                                                                            href="images/cats/kitty/K/Katalina/TwoMonth/2.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/K/Katalina/TwoMonth/2.jpg"
                                                                                                alt="продажа норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_TwoMonth"
                                                                                            href="images/cats/kitty/K/Katalina/TwoMonth/3.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/K/Katalina/TwoMonth/3.jpg"
                                                                                                alt="норвежские лесные котята">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_TwoMonth"
                                                                                            href="images/cats/kitty/K/Katalina/TwoMonth/4.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/K/Katalina/TwoMonth/4.jpg"
                                                                                                alt="норвежский котенок">
                                                                                        </a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </section>

                                                                        <!-- - Каталине два месяца -->

                                                                        <!-- + Каталине три месяца -->

                                                                        <section class="tab-pane fade"
                                                                            id="v-pills-Katalina-ThreeMounth"
                                                                            role="tabpanel"
                                                                            aria-labelledby="v-pills-Katalina-ThreeMounth-tab">

                                                                            <div class="container mt-1 alert alert-primary"
                                                                                role="alert">

                                                                                <div class="owl-carousel">
                                                                                    <div class="item"><img
                                                                                            title="купить котенка норвежской лесной кошки котята норвежской лесной москва"
                                                                                            src="images/cats/kitty/K/Katalina/ThreeMounth/1.jpg"
                                                                                            alt="купить котенка в москве">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Katalina/ThreeMounth/2.jpg"
                                                                                            alt="путешествие в икстлан">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Katalina/ThreeMounth/3.jpg"
                                                                                            alt="норвежские лесные красавицы">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Katalina/ThreeMounth/4.jpg"
                                                                                            alt="котенок в подарок">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Katalina/ThreeMounth/5.jpg"
                                                                                            alt="котенок в подарок">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Katalina/ThreeMounth/6.jpg"
                                                                                            alt="котенок в подарок">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Katalina/ThreeMounth/7.jpg"
                                                                                            alt="котенок в подарок">
                                                                                    </div>
                                                                                    <div class="item"><img
                                                                                            title="фото котят норвежской кошки купить котенка норвежской лесной"
                                                                                            src="images/cats/kitty/K/Katalina/ThreeMounth/8.jpg"
                                                                                            alt="котенок в подарок">
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div class="container alert alert-primary"
                                                                                role="alert">

                                                                                <div class="row">
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_ThreeMounth"
                                                                                            href="images/cats/kitty/K/Katalina/ThreeMounth/1.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="котенок норвежской лесной кошки в москве купить котенка норвежской лесной кошки порода норвежская лесная кошка"
                                                                                                src="images/cats/kitty/K/Katalina/ThreeMounth/1.jpg"
                                                                                                alt="питомник норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_ThreeMounth"
                                                                                            href="images/cats/kitty/K/Katalina/ThreeMounth/2.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/K/Katalina/ThreeMounth/2.jpg"
                                                                                                alt="продажа норвежской">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_ThreeMounth"
                                                                                            href="images/cats/kitty/K/Katalina/ThreeMounth/3.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/K/Katalina/ThreeMounth/3.jpg"
                                                                                                alt="норвежские лесные котята">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_ThreeMounth"
                                                                                            href="images/cats/kitty/K/Katalina/ThreeMounth/4.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/K/Katalina/ThreeMounth/4.jpg"
                                                                                                alt="норвежский котенок">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_ThreeMounth"
                                                                                            href="images/cats/kitty/K/Katalina/ThreeMounth/5.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/K/Katalina/ThreeMounth/5.jpg"
                                                                                                alt="норвежский котенок">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_ThreeMounth"
                                                                                            href="images/cats/kitty/K/Katalina/ThreeMounth/6.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/K/Katalina/ThreeMounth/6.jpg"
                                                                                                alt="норвежский котенок">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_ThreeMounth"
                                                                                            href="images/cats/kitty/K/Katalina/ThreeMounth/7.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/K/Katalina/ThreeMounth/7.jpg"
                                                                                                alt="норвежский котенок">
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-4 col-6 thumb">
                                                                                        <a data-fancybox="cats_kitty_Katalina_ThreeMounth"
                                                                                            href="images/cats/kitty/K/Katalina/ThreeMounth/8.jpg">
                                                                                            <img class="img-fluid"
                                                                                                title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                                                src="images/cats/kitty/K/Katalina/ThreeMounth/8.jpg"
                                                                                                alt="норвежский котенок">
                                                                                        </a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </section>

                                                                        <!-- - Каталине три месяца -->

                                                                    </div>

                                                                    <div class="container alert alert-info"
                                                                        role="alert">
                                                                        <p>Порождение игры теней. Узор на мне -
                                                                            застывшая сцена этой вечной игры. Баланс
                                                                            торжества и торжество баланса.</p>
                                                                    </div>

                                                                </div>

                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary"
                                                                    data-dismiss="modal">Закрыть</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p class="text-center">Каталина. Рада знакомству.</p>
                                                <div class="d-flex flex-column justify-content-center bd-highlight">

                                                    <button class="flex-fill bd-highlight btn btn-secondary m-1"
                                                        data-placement="top" data-toggle="popover" title="Обрела дом"
                                                        data-content="Обрела дом у Владимира и Надежды из Москвы">Обрела
                                                        дом</button>
                                                    <button type="button"
                                                        class="flex-fill bd-highlight btn btn-primary m-1"
                                                        data-toggle="modal" data-target="#kittyKatalinaDocuments">
                                                        Документы
                                                    </button>
                                                    <button type="button"
                                                        class="flex-fill bd-highlight btn btn-primary m-1"
                                                        data-toggle="modal" data-target="#kittyKatalina">
                                                        Фото
                                                    </button>
                                                </div>

                                                <div class="modal fade" id="kittyKatalinaDocuments" tabindex="-1"
                                                    role="dialog" aria-labelledby="kittyKatalinaTitle"
                                                    aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title text-center"
                                                                    id="kittyKatalinaTitle">Метрика
                                                                </h5>
                                                                <button type="button" class="close" data-dismiss="modal"
                                                                    aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <a data-fancybox="cats_kitty_Katalina_Documents"
                                                                    href="images/cats/kitty/metriks/K/Katalina.jpg">
                                                                    <img class="img-fluid"
                                                                        title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                        src="images/cats/kitty/metriks/K/Katalina.jpg"
                                                                        alt="котята норвежской">
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </article>
                                </div>

                                <!-- Помет "K", Конец описания Каталина -->

                            </div>
                        </div>
                    </section>

                    <section class="tab-pane fade border-bottom border-primary" id="v-pills-common" role="tabpanel">

                        <div class="owl-carousel border border-primary"
                            style="background-color: rgba(248, 249, 250, 0);">
                            <div class="item"><img
                                    title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                                    src="images/cats/kitty/common/1.jpg" alt="норвежские лесные котята"></div>
                            <div class="item"><img
                                    title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                                    src="images/cats/kitty/common/2.jpg" alt="норвежская лесная питомник"></div>
                            <div class="item"><img
                                    title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                                    src="images/cats/kitty/common/3.jpg" alt="питомник норвежской"></div>
                            <div class="item"><img
                                    title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                                    src="images/cats/kitty/common/4.jpg" alt="продажа норвежской"></div>
                            <div class="item"><img
                                    title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                                    src="images/cats/kitty/common/5.jpg" alt="норвежские лесные котята"></div>
                            <div class="item"><img
                                    title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                                    src="images/cats/kitty/common/6.jpg" alt="норвежские лесные котята"></div>
                            <div class="item"><img
                                    title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                                    src="images/cats/kitty/common/7.jpg" alt="норвежские лесные котята"></div>
                            <div class="item"><img
                                    title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                                    src="images/cats/kitty/common/8.jpg" alt="норвежские лесные котята"></div>
                            <div class="item"><img
                                    title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                                    src="images/cats/kitty/common/9.jpg" alt="норвежские лесные котята"></div>
                            <div class="item"><img
                                    title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                                    src="images/cats/kitty/common/10.jpg" alt="норвежские лесные котята"></div>
                            <div class="item"><img
                                    title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                                    src="images/cats/kitty/common/11.jpg" alt="норвежские лесные котята"></div>
                            <div class="item"><img
                                    title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                                    src="images/cats/kitty/common/12.jpg" alt="норвежские лесные котята"></div>
                            <div class="item"><img
                                    title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                                    src="images/cats/kitty/common/14.jpg" alt="норвежские лесные котята"></div>
                            <div class="item"><img
                                    title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                                    src="images/cats/kitty/common/15.jpg" alt="норвежские лесные котята"></div>
                            <div class="item"><img
                                    title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                                    src="images/cats/kitty/common/16.jpg" alt="норвежские лесные котята"></div>
                        </div>


                        <div class="container alert alert-primary" role="alert">

                            <div class="row">
                                <div class="col-lg-3 col-md-4 col-6 thumb">
                                    <a data-fancybox="cats_kitty_common" href="images/cats/kitty/common/1.jpg">
                                        <img class="img-fluid"
                                            title="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                                            src="images/cats/kitty/common/1.jpg" alt="норвежский котенок">
                                    </a>
                                </div>
                                <div class="col-lg-3 col-md-4 col-6 thumb">
                                    <a data-fancybox="cats_kitty_common" href="images/cats/kitty/common/2.jpg">
                                        <img class="img-fluid"
                                            title="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                                            src="images/cats/kitty/common/2.jpg" alt="котята норвежской">
                                    </a>
                                </div>
                                <div class="col-lg-3 col-md-4 col-6 thumb">
                                    <a data-fancybox="cats_kitty_common" href="images/cats/kitty/common/3.jpg">
                                        <img class="img-fluid"
                                            title="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                                            src="images/cats/kitty/common/3.jpg" alt="купить котенка в москве">
                                    </a>
                                </div>
                                <div class="col-lg-3 col-md-4 col-6 thumb">
                                    <a data-fancybox="cats_kitty_common" href="images/cats/kitty/common/4.jpg">
                                        <img class="img-fluid"
                                            title="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                                            src="images/cats/kitty/common/4.jpg" alt="путешествие в икстлан">
                                    </a>
                                </div>
                                <div class="col-lg-3 col-md-4 col-6 thumb">
                                    <a data-fancybox="cats_kitty_common" href="images/cats/kitty/common/5.jpg">
                                        <img class="img-fluid"
                                            title="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                                            src="images/cats/kitty/common/5.jpg" alt="норвежские лесные красавицы">
                                    </a>
                                </div>
                                <div class="col-lg-3 col-md-4 col-6 thumb">
                                    <a data-fancybox="cats_kitty_common" href="images/cats/kitty/common/6.jpg">
                                        <img class="img-fluid"
                                            title="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                                            src="images/cats/kitty/common/6.jpg" alt="норвежские лесные красавицы">
                                    </a>
                                </div>
                                <div class="col-lg-3 col-md-4 col-6 thumb">
                                    <a data-fancybox="cats_kitty_common" href="images/cats/kitty/common/7.jpg">
                                        <img class="img-fluid"
                                            title="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                                            src="images/cats/kitty/common/7.jpg" alt="норвежские лесные красавицы">
                                    </a>
                                </div>
                                <div class="col-lg-3 col-md-4 col-6 thumb">
                                    <a data-fancybox="cats_kitty_common" href="images/cats/kitty/common/8.jpg">
                                        <img class="img-fluid"
                                            title="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                                            src="images/cats/kitty/common/8.jpg" alt="норвежские лесные красавицы">
                                    </a>
                                </div>
                                <div class="col-lg-3 col-md-4 col-6 thumb">
                                    <a data-fancybox="cats_kitty_common" href="images/cats/kitty/common/9.jpg">
                                        <img class="img-fluid"
                                            title="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                                            src="images/cats/kitty/common/9.jpg" alt="норвежские лесные красавицы">
                                    </a>
                                </div>
                                <div class="col-lg-3 col-md-4 col-6 thumb">
                                    <a data-fancybox="cats_kitty_common" href="images/cats/kitty/common/10.jpg">
                                        <img class="img-fluid"
                                            title="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                                            src="images/cats/kitty/common/10.jpg" alt="норвежские лесные красавицы">
                                    </a>
                                </div>
                                <div class="col-lg-3 col-md-4 col-6 thumb">
                                    <a data-fancybox="cats_kitty_common" href="images/cats/kitty/common/11.jpg">
                                        <img class="img-fluid"
                                            title="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                                            src="images/cats/kitty/common/11.jpg" alt="норвежские лесные красавицы">
                                    </a>
                                </div>
                                <div class="col-lg-3 col-md-4 col-6 thumb">
                                    <a data-fancybox="cats_kitty_common" href="images/cats/kitty/common/12.jpg">
                                        <img class="img-fluid"
                                            title="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                                            src="images/cats/kitty/common/12.jpg" alt="норвежские лесные красавицы">
                                    </a>
                                </div>
                                <div class="col-lg-3 col-md-4 col-6 thumb">
                                    <a data-fancybox="cats_kitty_common" href="images/cats/kitty/common/14.jpg">
                                        <img class="img-fluid"
                                            title="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                                            src="images/cats/kitty/common/14.jpg" alt="норвежские лесные красавицы">
                                    </a>
                                </div>
                                <div class="col-lg-3 col-md-4 col-6 thumb">
                                    <a data-fancybox="cats_kitty_common" href="images/cats/kitty/common/15.jpg">
                                        <img class="img-fluid"
                                            title="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                                            src="images/cats/kitty/common/15.jpg" alt="норвежские лесные красавицы">
                                    </a>
                                </div>
                                <div class="col-lg-3 col-md-4 col-6 thumb">
                                    <a data-fancybox="cats_kitty_common" href="images/cats/kitty/common/16.jpg">
                                        <img class="img-fluid"
                                            title="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                                            src="images/cats/kitty/common/16.jpg" alt="норвежские лесные красавицы">
                                    </a>
                                </div>
                            </div>
                        </div>

                    </section>

                </div>

                <!-- Помет "K", Конец описания -->

            </section>

            <section class="row m-1 mx-auto container-fluid">

                <div id="newsAreaBottom" class="col">

                    <h3 class="text-center">Новости</h3>

                    <div id="accordionBottom">

                        <article class="card">
                            <header class="card-header" id="headingBottom1">
                                <h5 class="mb-0 text-center">
                                    <button class="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                        data-target="#collapseBottom1" aria-expanded="false"
                                        aria-controls="collapseBottom1">
                                        Адьос! Хавьер!
                                    </button>
                                </h5>
                            </header>
                            <div id="collapseBottom1" class="collapse" aria-labelledby="headingBottom1"
                                data-parent="#accordionBottom">
                                <div class="card-body">
                                    <p>Нам двоим стало тесно в одной Москве, мой кузен, с омываемых всеми морями
                                        Пиреней! Ну что ж, Петербург теперь твоя стезя. Уверен, твое гордое имя ещё
                                        прогремит в серых бетонных колодцах и разнесётся над Невой как предзнаменование.
                                    </p>
                                    <p> Мы еще увидимся. Так говорим каждому, но этот случай особый. Хочется верить и
                                        надеяться, что всё у тебя отлично и даже лучше. Ладно, долгие проводы - лишние
                                        слезы. Адьос!</p>
                                </div>
                            </div>
                        </article>

                        <article class="card">
                            <header class="card-header" id="headingBottom2">
                                <h5 class="mb-0 text-center">
                                    <button class="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                        data-target="#collapseBottom2" aria-expanded="false"
                                        aria-controls="collapseBottom2">
                                        Ждем новостей, Каталина
                                    </button>
                                </h5>
                            </header>
                            <div id="collapseBottom2" class="collapse" aria-labelledby="headingBottom2"
                                data-parent="#accordionBottom">
                                <div class="card-body">
                                    <p>Ну что же, дорогая. Вот и твой кораблик стал медленно удаляться, тая в волнах.
                                        Вырвавшись из родного гнезда, не забывай его. Прими уготованный тебе путь со
                                        всей благодарностью, на которую способно твоё существо.</p>
                                    <p>Не сворачивай с него. Будь текучей как вода - стань центром своей маленькой
                                        вселенной с двумя солнцами, Каталина.</p>
                                </div>
                            </div>
                        </article>

                        <article class="card">
                            <header class="card-header" id="headingBottom3">
                                <h5 class="mb-0 text-center">
                                    <button class="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                        data-target="#collapseBottom3" aria-expanded="false"
                                        aria-controls="collapseBottom3">
                                        Попутного ветра, Хосефина.
                                    </button>
                                </h5>
                            </header>
                            <div id="collapseBottom3" class="collapse" aria-labelledby="headingBottom3"
                                data-parent="#accordionBottom">
                                <div class="card-body">
                                    <p>Вот и ещё одна на выданье. Наша Хосефина перемещается на новую заключительную
                                        стоянку на этой земле. Доброй охоты пожелаю тебе я. С радостью в глазах смотрит
                                        тебе в след что-то, что было тебе домом. </p>
                                    <p>Впереди новые свершения, свергнутые идеалы и спонтанные прыжки, резкие развороты
                                        на 180 и превышения скорости вне всяких пределов. Не забывай свои корни.</p>
                                </div>
                            </div>
                        </article>

                        <article class="card">
                            <header class="card-header" id="headingBottom4">
                                <h5 class="mb-0 text-center">
                                    <button class="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                        data-target="#collapseBottom4" aria-expanded="false"
                                        aria-controls="collapseBottom4">
                                        Счастливого пути, Карлос.
                                    </button>
                                </h5>
                            </header>
                            <div id="collapseBottom4" class="collapse" aria-labelledby="headingBottom4"
                                data-parent="#accordionBottom">
                                <div class="card-body">
                                    <p>Карлос - ты эталон породы. Главное, не задирай свой норвежский лесной нос от
                                        осознания этого факта. Будь счастлив сам и делись счастьем с другими.</p>
                                    <p>В общем, Карлос покинул нас и обрёл окончательный дом. Думаю, это понятно из
                                        напутственных речей выше. Кот, конечно, с характером - надо это понимать.
                                        Своеволен, но не агрессивен - не зря носит такое имя. Будет отличным
                                        компаньоном, исследователем и фигурантом любых дел и подозреваемым во всех
                                        кражах относительно угощения или упавших штор. Шучу конечно).</p>
                                    <p>Счастливого путешествия. Пусть воспоминания о твоём маленьком мире детства будут
                                        тебе ориентиром, когда все прочие ориентиры канут в бесконечность.</p>
                                </div>
                            </div>
                        </article>

                        <article class="card">
                            <header class="card-header" id="headingBottom5">
                                <h5 class="mb-0 text-center">
                                    <button class="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                        data-target="#collapseBottom5" aria-expanded="false"
                                        aria-controls="collapseBottom5">
                                        До свидания, Хуан.
                                    </button>
                                </h5>
                            </header>
                            <div id="collapseBottom5" class="collapse" aria-labelledby="headingBottom5"
                                data-parent="#accordionBottom">
                                <div class="card-body">
                                    <p>Хуан обрел новый дом, а мы обрели, наконец, спокойствие за его дальнейшую
                                        судьбу.
                                        Ну, и возможность выспаться.</p>
                                    <p>Этот посыпанный первым снегом господин уже обживается в новом доме, оставшись
                                        для
                                        нас легкой утренней метелью или типа того, которая, возможно, когда нибудь
                                        снова
                                        попадет нам в глаза.</p>
                                    <p>Теперь у тебя свое <mark>путешествие в Икстлан</mark> пройди его с улыбкой.</p>
                                </div>
                            </div>
                        </article>

                        <article class="card">
                            <header class="card-header" id="headingBottom6">
                                <h5 class="mb-0 text-center">
                                    <button class="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                        data-target="#collapseBottom6" aria-expanded="false"
                                        aria-controls="collapseBottom6">
                                        Константин обрел новый дом
                                    </button>
                                </h5>
                            </header>
                            <div id="collapseBottom6" class="collapse" aria-labelledby="headingBottom6"
                                data-parent="#accordionBottom">
                                <div class="card-body">
                                    <p>Первый есть. Константин, мы оба знаем, что все будет хорошо. Ты обрел дом и
                                        новых
                                        друзей.</p>
                                    <p>Примерно так. А если без соплей, то в добрый путь, братан! Будем приежать в
                                        гости
                                        и ты нас не забывай.</p>
                                    <p>Приколись. Если бы тебя звали не Константин, а Николай, то можно было бы
                                        вставить
                                        цитату: <mark>Ты меня, живя в комфорте, вспоминай. И смотри, не выкинь фортель
                                            Николай</mark>(с.) Ну я думаю посыл ты понял. Ладно не скучай. Будь
                                        истинным
                                        <mark>Норвежским лесным котом</mark> с большой буквы ("Н", "Л" или "К") сам
                                        выбирай.</mark> Ближе к лету
                                        заедем в гости.</mark></p>
                                </div>
                            </div>
                        </article>

                    </div>

                    <button class="btn btn-outline-primary btn-block my-1" type="button" data-toggle="collapse"
                        data-target="#collapseBottomExample" aria-expanded="false"
                        aria-controls="collapseBottomExample">
                        Архив
                    </button>

                    <div class="collapse" id="collapseBottomExample">

                        <div id="accordionBottomArh">

                            <article class="card">
                                <header class="card-header" id="headingBottomArh1">
                                    <h5 class="mb-0 text-center">
                                        <button class="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                            data-target="#collapseBottomArh1" aria-expanded="false"
                                            aria-controls="collapseBottomArh1">
                                            20 декабря 2017 – Регистрация питомника. Наш официальный день рождения.
                                        </button>
                                    </h5>
                                </header>
                                <div id="collapseBottomArh1" class="collapse" aria-labelledby="headingBottomArh1"
                                    data-parent="#accordionBottomArh">
                                    <div class="card-body">
                                        <p>Немного прозы. Перефразировав одну из известных русских поговорок, можно
                                            сказать, что без бумажки ты букашка, а с бумажкой <mark>норвежская лесная
                                                кошка.</mark></p>. <p>С миром повседневности нужно уметь
                                            взаимодействовать.
                                            Регистрацию
                                            в системе WCF (World Cat Federation, Германия) и полученные сертификаты
                                            можно
                                            считать первой ступенькой на это выщербленной лестнице. Вот так и
                                            происходит.
                                            Время неумолимо. Вчера ты маленький <mark>норвежский котенок</mark>, а
                                            сегодня
                                            дипломировнный экземляр породы.</p>
                                    </div>
                                </div>
                            </article>

                            <article class="card">
                                <header class="card-header" id="headingBottomArh2">
                                    <h5 class="mb-0 text-center">
                                        <button class="btn btn-link btn-wrap-normal" data-toggle="collapse"
                                            data-target="#collapseBottomArh2" aria-expanded="true"
                                            aria-controls="collapseBottomArh2">
                                            1 октября 2017 г. – Прибытие кошек. Наш неофициальный день рождения.
                                        </button>
                                    </h5>
                                </header>

                                <div id="collapseBottomArh2" class="collapse" aria-labelledby="headingBottomArh2"
                                    data-parent="#accordionBottomArh">
                                    <div class="card-body">
                                        <p>Итак, свершилось. Две <mark>норвежские лесные</mark> красавицы обрели новый
                                            дом.
                                            Начало одного - есть всегда окончание другого.</p>
                                        <p>Шум осеннего дождя и шуршание опадающих листьев ознаменовал
                                            переход от котят к кошкам. Но не стоит спешить с выводами. Трансорфация
                                            протекает плавно - без резких движений и перекосов. Тем не менее
                                            <mark>путешествие
                                                в
                                                Икстлан</mark> можно считать начатым. Это путешествие знаменито
                                            недостижимостью того
                                            положения вещей, которое было в момент его начала - в момент зарождения
                                            нового
                                            длинного пути. Но, как известно, прелесть ни в факте достижения конечной
                                            цели,
                                            а самом процессе.</p>
                                    </div>
                                </div>
                            </article>

                            <article class="card">
                                <header class="card-header" id="headingBottomArh3">
                                    <h5 class="mb-0 text-center">
                                        <button class="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                            data-target="#collapseBottomArh3" aria-expanded="false"
                                            aria-controls="collapseBottomArh3">
                                            Москва. 9 января 2018 г. – Прибытие Пампкина
                                        </button>
                                    </h5>
                                </header>
                                <div id="collapseBottomArh3" class="collapse" aria-labelledby="headingBottomArh3"
                                    data-parent="#accordionBottomArh">
                                    <div class="card-body">
                                        <p>Мохнатая чешская тыква или разбавим скромную женскую компанию нескромным
                                            мужским
                                            присутствием. В общем, пятиминутка контролируемой глупости срочно в студию
                                            /
                                            номер ну и т.д.</p>
                                        <p>Кот крепок душой, стоек психикой, доверчив и любит путешествовать самолетами
                                            и
                                            другими видами транспорта. Выдающийся экземпляр <mark>норвежской
                                                лесной</mark>
                                            породы.
                                            Ласковый, с вдумчивым и глубоким голосом, апельсиновыми глазами и хвостом
                                            размером с ещё одного кота. Воспитанник замечательной чешской семьи приехал
                                            покорять Россию и, надо сказать, пока все идёт по плану.</p>
                                    </div>
                                </div>
                            </article>

                            <article class="card">
                                <header class="card-header" id="headingBottomArh4">
                                    <h5 class="mb-0 text-center">
                                        <button class="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                            data-target="#collapseBottomArh4" aria-expanded="false"
                                            aria-controls="collapseBottomArh4">
                                            Москва. 16-17 июня 2018 – Первая выставка!
                                        </button>
                                    </h5>
                                </header>
                                <div id="collapseBottomArh4" class="collapse" aria-labelledby="headingBottomArh4"
                                    data-parent="#accordionBottomArh">
                                    <div class="card-body">
                                        <p>Ну что, барышни, с первой выставкой вас, однако! Много нервов потрачено,
                                            много
                                            времени и сил, но оно того стоило.</p>
                                        <p><mark>Питомники норвежских лесных кошек в Москве</mark> крайне
                                            немногочислены,
                                            но они есть и активно снабжают достойными конкурентами. Однако и мы не
                                            лыком,
                                            как говорится, шиты. Получены первые оценки и номинации, получен бесценный
                                            опыт, который будет использован в дальнейшем. Что тут еще скажешь?
                                            Дерзайте,
                                            барышни! В добрый путь.</p>
                                    </div>
                                </div>
                            </article>

                            <article class="card">
                                <header class="card-header" id="headingBottomArh5">
                                    <h5 class="mb-0 text-center">
                                        <button class="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                            data-target="#collapseBottomArh5" aria-expanded="false"
                                            aria-controls="collapseBottomArh5">
                                            Ноябрь в окно - пополнение полным ходом в дверь
                                        </button>
                                    </h5>
                                </header>
                                <div id="collapseBottomArh5" class="collapse" aria-labelledby="headingBottomArh5"
                                    data-parent="#accordionBottomArh">
                                    <div class="card-body">
                                        <p>Роддом. Вот роддом и всё тут. Писки, вопли, бессонные ночи. <mark>Норвежские
                                                лесные котята</mark> причиняют столько же радости и беспокойства при
                                            рождении, сколько и обычные, но есть и отличия.</p>
                                        <p>Прайд, оказывается - это не только о львах. Неотвратимая и основная черта
                                            характера кошки-матери у этой породы - это фундаментальный материнский
                                            инстинкт,
                                            причём по отношению ко всем котятам, не только своим.</p>
                                        <p> Обе кошки стали матерями
                                            с разницей в один день, поэтому всё делают вместе - кормят, умывают,
                                            отдыхают.
                                            Так сказать, в общее лукошко все рожали кошки. Ладно. Хватит шуток.
                                            Всем, кто хочет <mark>купить котенка в Москве</mark> (в общем-то и за её
                                            пределами никто вам не мешает), добро пожаловать в этом разделе</p>
                                    </div>
                                </div>
                            </article>

                            <article class="card">
                                <header class="card-header" id="headingBottomArh6">
                                    <h5 class="mb-0 text-center">
                                        <button class="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                            data-target="#collapseBottomArh6" aria-expanded="false"
                                            aria-controls="collapseBottomArh6">
                                            Воронеж, 27-28 октября 2018. Выставка "Осенние смотрины" от КЛК Люкс.
                                            (Тыквенные мысли часть
                                            2)
                                        </button>
                                    </h5>
                                </header>
                                <div id="collapseBottomArh6" class="collapse" aria-labelledby="headingBottomArh6"
                                    data-parent="#accordionBottomArh">
                                    <div class="card-body">
                                        <p>Дубль второй. Серое небо рушится вбок. Осень в разгаре без компромиссов и
                                            пощады. Всё те же старые необходимости, приготовления. Снова сидеть два дня
                                            в
                                            тесной палатке. Само собой, знаменитый характер <mark>норвежской
                                                лесной</mark>
                                            породы и врожденная деликатность не дает мне возможности громогласно
                                            возмутиться.
                                            Проживая вторую часть этого странного представления, начинаешь все чаще об
                                            этом
                                            вспоминать. Ну а после. Что после?
                                            Наконец, домой. Увижу семью.</p>
                                        <p>В этот раз открыт титул <mark>Большого международного чемпиона.</mark> Меня
                                            теперь ждут иные земли. Ну что ж, посмотрим, чем они смогут меня удивить.
                                        </p>
                                    </div>
                                </div>
                            </article>

                            <article class="card">
                                <header class="card-header" id="headingBottomArh7">
                                    <h5 class="mb-0 text-center">
                                        <button class="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                            data-target="#collapseBottomArh7" aria-expanded="false"
                                            aria-controls="collapseBottomArh7">
                                            Воронеж, 5-7 октября 2018. Выставка "Звезда Черноземья" (Тыквенные мысли
                                            часть
                                            1)
                                        </button>
                                    </h5>
                                </header>
                                <div id="collapseBottomArh7" class="collapse" aria-labelledby="headingBottomArh7"
                                    data-parent="#accordionBottomArh">
                                    <div class="card-body">
                                        <p>Незнакомый город пульсирует красками неожиданной осени. Её холодное дыхание
                                            заползает под кожу. Нам опять в дорогу. Опять. Сколько их было, сколько ещё
                                            будет. Нескончаемая вереница людей с всех сторон. Шумы, запахи, всполохи
                                            огня.
                                            Всё это так знакомо, но, с другой стороны, привыкнуть невозможно. С момента
                                            моего последнего выхода в свет прошла уже пара месяцев, и вот снова я на
                                            чужой,
                                            чёрной как смоль земле. Это Воронеж, столица Черноземья. Здесь мы
                                            задержимся на
                                            целый месяц. Добро пожаловать мне. Увидимся после.</p>
                                        <p>Закончили. Теперь могу с уверенностью сказать, что о таких как я здесь почти
                                            не
                                            слышали. Взял первое в своей жизни первое место. Первое "первое". Мда.
                                            Надо,
                                            видимо, больше читать. Помимо этого, теперь я <mark>Международный
                                                чемпион</mark>.
                                            Еще
                                            чуть-чуть и задеру свой прямой <mark>норвежский лесной нос.</mark></p>
                                    </div>
                                </div>
                            </article>

                        </div>

                    </div>

                </div>
            </section>

        </div>
    </main>

    <footer class="container border-left border-right border-bottom border-primary mb-5">

        <address>
            <p style="background-color: rgba(23, 162, 184, 0.7);" class="text-center border border-primary m-1">Контакты
            </p>
            <div class="d-flex flex-wrap justify-content-between">
                <div style="background-color: rgba(23, 162, 184, 0.7);" class="card border-primary m-1 flex-fill">
                    <div class="card-header text-center">Социальные сети</div>
                    <div class="card-body text-center">
                        <a class="btn btn-link" href="https://www.facebook.com/catsofixtlan/" role="button"><img
                                class="img-fluid"
                                title="уход за норвежской лесной кошкой купить котенка норвежской лесной"
                                src="images/social/facebook.png" alt="норвежские лесные котята"></a>
                        <a class="btn btn-link" href="https://www.instagram.com/fraulein.yulia/" role="button"><img
                                class="img-fluid"
                                title="фото котят норвежской кошки продажа норвежской питомник норвежской"
                                src="images/social/Instagram.png" alt="котенок норвежской лесной"></a>
                        <a class="btn btn-link" href="#" role="button"><img class="img-fluid"
                                title="норвежская лесная кошка купить норвежская лесная купить в москве"
                                src="images/social/g+.png" alt="норвежская лесная купить"></a>
                        <a class="btn btn-link"
                            href="https://www.youtube.com/channel/UCnN8BceKWMpll2pLWqY2jGw?view_as=subscriber"
                            role="button"><img class="img-fluid"
                                title="норвежская лесная кошка купить в москве цена норвежская лесная кошка купить"
                                src="images/social/youtube.png" alt="питомники норвежских кошек"></a>
                    </div>
                </div>
                <div style="background-color: rgba(23, 162, 184, 0.7);" class="card border-primary m-1 flex-fill">
                    <div class="card-header text-center">Телефоны</div>
                    <div class="card-body text-center">
                        <p class="card-text">+7 904 21 23 817 (Юлия)</p>
                    </div>
                </div>
                <div style="background-color: rgba(23, 162, 184, 0.7);" class="card border-primary m-1 flex-fill">
                    <div class="card-header text-center">E'mail</div>
                    <div class="card-body text-center">
                        <p class="card-text">l-stardust@yandex.ru</p>
                    </div>
                </div>
            </div>
        </address>

        <nav aria-label="breadcrumb">
            <ol class="breadcrumb border border-primary mb-1">
                <li class="breadcrumb-item"><a href="index.html">Главная</a></li>
                <li class="breadcrumb-item active" aria-current="page">Котята</li>
            </ol>
        </nav>

    </footer>

    <!-- Optional JavaScript -->

    <script>

        <?php $kittyShower->show_Init_Dropzones(); ?>

        //$('.kitten_get').on('click', function() {
            //console.log(this);
            //console.log($(this));
            //1111console.log($(this).attr('name_kitten'));
        //})

        $('#fff').on('click', function() {
            console.log($("#myselect_Juan").val());
        })

        $('#delete_period').on('click', function() {
            $('#form_delete_period').submit();
        })

    </script>

    <script>

        $(function () {
            $('[data-toggle="popover"]').popover({
                animation: true,
                trigger: 'focus'
            })
        })

        var MyResize = function () {

            var $mainArea = $("#mainArea");
            var $newsArea = $("#newsArea");
            var $newsAreaBottom = $("#newsAreaBottom");

            if (window.matchMedia('(max-width: 768px)').matches) {

                if ($newsArea.is(':visible')) {
                    $newsArea.hide();
                }

                if ($mainArea.hasClass('col-8')) {
                    $mainArea.removeClass('col-8');
                    $mainArea.addClass('col-12');
                }

                if ($newsArea.is(':hidden')) {
                    $newsAreaBottom.show();
                }

            } else {

                if ($newsArea.is(':hidden')) {
                    $newsArea.show();
                }

                if ($mainArea.hasClass('col-12')) {
                    $mainArea.removeClass('col-12');
                    $mainArea.addClass('col-8');
                }

                if ($newsArea.is(':visible')) {
                    $newsAreaBottom.hide();
                }

            }
        };

        $(window).resize(MyResize);
        $(MyResize);

        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            autoplay: true,
            smartSpeed: 3000,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

    </script>
</body>

</html>