<?php

    require_once 'src/utils.php';
    require_once 'src/local/utils.php';
    require_once 'const_local.php';
    require_once 'main_config.php';

    if ( Utils::is_session_started() === FALSE ) session_start();

    header("Content-type: text/html; charset=UTF-8");

    include('src/auth/approve_post.php');

    require_once 'configDB.php';
    require_once 'check_rules.php';

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
<html>

<head>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- For SEO -->
    <meta name="robots" content="all">
    <meta name="description" content="купить норвежского лесного котенка из питомника уход за норвежской лесной кошкой путешествие в икстлан с проводниками sale Norwegian Forest cat kittens Norwegian Forest cat price">
    <meta name="keywords" content="catteries of Norwegian Forest cat Norwegian Forest cat kittens Journey to Ixtlan with a guide путешествие в икстлан с проводниками уход за норвежской лесной кошкой продажа норвежской">

    <meta name="yandex-verification" content="2b77fcebba7970e1" />
    <meta name="google-site-verification" content="9FQi4LPWuRTpZR0rfshrMJNvI_oB8Mca5jSjL4P-1kU" />
    <meta name='wmail-verification' content='158ac4f04dea3b87edd9c7bdfb1da775' />
    <meta name="msvalidate.01" content="DCD224CD8A3A7C635BAC1694873730D2" />

    <link rel="canonical" href="http://move-ixtlan.ru" />

    <!-- For localization -->
    <link rel="alternate" href="http://move-ixtlan.ru" hreflang="ru-ru" />
    <link rel="alternate" href="http://move-ixtlan.ru?lang=eng" hreflang="en-us" />
    <link rel="alternate" href="http://move-ixtlan.ru?lang=eng" hreflang="en-hu" />
    <link rel="alternate" href="http://move-ixtlan.ru?lang=eng" hreflang="en-de" />
    <link rel="alternate" href="http://move-ixtlan.ru?lang=eng" hreflang="en-au" />
    <link rel="alternate" href="http://move-ixtlan.ru?lang=eng" hreflang="en-at" />
    <link rel="alternate" href="http://move-ixtlan.ru?lang=eng" hreflang="en-gb" />
    <link rel="alternate" href="http://move-ixtlan.ru?lang=eng" hreflang="en-ie" />
    <link rel="alternate" href="http://move-ixtlan.ru?lang=eng" hreflang="en-it" />
    <link rel="alternate" href="http://move-ixtlan.ru?lang=eng" hreflang="en-cn" />
    <link rel="alternate" href="http://move-ixtlan.ru?lang=eng" hreflang="en-lv" />
    <link rel="alternate" href="http://move-ixtlan.ru?lang=eng" hreflang="en-lb" />
    <link rel="alternate" href="http://move-ixtlan.ru?lang=eng" hreflang="en-lt" />
    <link rel="alternate" href="http://move-ixtlan.ru?lang=eng" hreflang="en-lu" />
    <link rel="alternate" href="http://move-ixtlan.ru?lang=eng" hreflang="en-mt" />
    <link rel="alternate" href="http://move-ixtlan.ru?lang=eng" hreflang="en-ml" />
    <link rel="alternate" href="http://move-ixtlan.ru?lang=eng" hreflang="en-nz" />
    <link rel="alternate" href="http://move-ixtlan.ru?lang=eng" hreflang="en-no" />
    <link rel="alternate" href="http://move-ixtlan.ru?lang=eng" hreflang="en-cr" />
    <link rel="alternate" href="http://move-ixtlan.ru?lang=eng" hreflang="en-fi" />
    <link rel="alternate" href="http://move-ixtlan.ru?lang=eng" hreflang="en-fr" />
    <link rel="alternate" href="http://move-ixtlan.ru?lang=eng" hreflang="en-cz" />
    <link rel="alternate" href="http://move-ixtlan.ru?lang=eng" hreflang="en-ch" />
    <link rel="alternate" href="http://move-ixtlan.ru?lang=eng" hreflang="en-se" />
    <link rel="alternate" href="http://move-ixtlan.ru?lang=eng" hreflang="en-ee" />
    <link rel="alternate" href="http://move-ixtlan.ru?lang=eng" hreflang="en-jp" />

    <!-- navigation icon -->
    <link rel="shortcut icon" href="images/navigation.png" type="image/x-icon">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
        crossorigin="anonymous">

    <link rel="stylesheet" href="css/style.css" type="text/css" />

    <?php echo MainConfig::SEO_setting() ?>

    <!-- Yandex.Metrika counter
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
     /Yandex.Metrika counter -->

    <!-- Global site tag (gtag.js) - Google Analytics
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-130188408-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-130188408-1');
    </script>
    /Global site tag (gtag.js) - Google Analytics -->

    <!-- Google Tag Manager
    <script>
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-52BDR88');</script>
    End Google Tag Manager -->

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

    <title><?php echo LocalConstants::mainLocal()['main_title']; ?></title>

</head>

<body>

    <?php echo MainConfig::GoogleTagManager() ?>

    <?php 
        echo Utils::getPreloader();
        echo Utils::getModalSignUpForm("index.php");
        echo Utils::getModalApproveEmail();
        echo Utils::getModalEditUserSettings();
        echo Utils::strongBanner();
    ?>

    <header class="container my-1">
        
        <nav class="navbar navbar-expand-md navbar-dark bg-primary fixed-top mx-2">
            <a class="navbar-brand" href="/">
                <img title="<?php echo Utils::phrase_from_skr(); ?>" src="images/navigation.png"
                    alt="<?php echo Utils::phrase_from_skr(); ?>">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="index.php">
                            <?php echo LocalConstants::mainLocal()['home_page_title']; ?>
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="cats_females.php">
                            <?php echo LocalConstants::mainLocal()['cats_females_page_title']; ?>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="cats_males.php">
                            <?php echo LocalConstants::mainLocal()['cats_males_page_title']; ?>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="kitty.php">
                            <?php echo LocalConstants::mainLocal()['kitty_page_title']; ?>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="articles.php">
                            <?php echo LocalConstants::mainLocal()['articles_page_title']; ?>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="comments.php">
                            <?php echo LocalConstants::mainLocal()['customer_reviews_title']; ?>
                        </a>
                    </li>

                </ul>

                <ul class="navbar-nav ml-auto">
                    <li id="choice-lang" class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <?php echo LocalConstants::mainLocal()['language_page_title']; ?>
                        </a>
                        <div id="dropdown-choice-lang" class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <?php echo UtilsLocal::listLanguages(); ?>
                        </div>
                    </li>
                    <div id="lang_current" class="form-inline ml-1 mr-2">
                        <?php echo '<img src="' . UtilsLocal::currentLanguage()['icon_path'] . '">' ?>
                    </div>

                    <?php echo Utils::authSection(); ?>

                    <section class="form-inline">
                        <input id="hamburger" class="hamburger" type="checkbox"/>
                        <label class="hamburger" for="hamburger">
                            <i></i>
                        </label>
                        <div class="drawer-list container bg-primary">
                            <div class="container">
                                <?php 
                                    if (CHECK_RULES::ROOT()) {
                                        echo Utils::formAddLanguage();
                                    } 
                                    echo Utils::getToggleNews()
                                ?>
                            </div>
                        </div>
                    </section>

                </ul>               

            </div>
            
        </nav>

        <div class="container" style="margin-top: 4rem;">
            <img title="<?php echo Utils::phrase_from_skr(); ?>"
                src="images/Caption.png" alt="<?php echo Utils::phrase_from_skr(); ?>" class="mx-auto d-block img-fluid">
            <h1 class="text-center">
                <?php echo LocalConstants::mainLocal()['secondary_title']; ?>
            </h1>
        </div>

    </header>

    <main class="container">

        <?php 
            echo Utils::getModalAddLanguage();
            echo Utils::getModalDeleteLanguage();
            echo Utils::getModalEditIconLanguage();
        ?>

        <section class="d-flex bd-highlight">

            <section id="newsArea" class="p-2 bd-highlight" style="max-width:30%; min-width:30%;">

                <div class="container-fluid">

                    <h4 class="text-center align-self-center">
                        <?php echo LocalConstants::mainLocal()['news_title']; ?>
                    </h4>

                    <?php 
                        $newser->show_Main_Newses();
                        $newser->show_Editor_Form();
                    ?>

                    <div id="accordion">
                        <?php $newser->show_Newses(true, "#accordion"); ?>
                    </div>

                    <button class="btn btn-outline-primary btn-block my-1" type="button" data-toggle="collapse"
                        data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <?php echo LocalConstants::mainLocal()['archive_title']; ?>
                    </button>

                    <div class="collapse" id="collapseExample">
                        <div id="accordionArh">
                            <?php $newser->show_Newses(false, "#accordionArh"); ?>
                        </div>
                    </div>
                </div>

            </section>

            <!-- TODO Что то сделать с прыгающей панелью новостей при переключении подушек (теперь только для видео) -->

            <section id="mainArea" class="p-2 flex-grow-1 bd-highlight" style="overflow: hidden; background-color: rgba(248, 249, 250, 0.5);">

                <?php $newser->show_Main_Newses(true); ?>

                <div class="container">

                    <div class="nav nav-fill nav-pills d-flex justify-content-center" id="v-pills-tab" role="tablist">
                        <a class="nav-link active" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile"
                            role="tab" aria-controls="v-pills-profile" aria-selected="true">
                            <?php echo LocalConstants::mainLocal()['about_cattery_title']; ?>
                        </a>
                        <a class="nav-link" id="v-pills-about-tab" data-toggle="pill" href="#v-pills-about" role="tab"
                            aria-controls="v-pills-about" aria-selected="false">
                            <?php echo LocalConstants::mainLocal()['about_breed_title']; ?>
                        </a>
                        <a class="nav-link" id="v-pills-exhibitions-tab" data-toggle="pill" href="#v-pills-exhibitions"
                            role="tab" aria-controls="v-pills-exhibitions" aria-selected="false">
                            <?php echo LocalConstants::mainLocal()['exhibitions_title']; ?>
                        </a>
                        <a class="nav-link" id="v-pills-video-tab" data-toggle="pill" href="#v-pills-video" role="tab"
                            aria-controls="v-pills-video" aria-selected="false">
                            <?php echo LocalConstants::mainLocal()['video_title']; ?>
                        </a>
                        <a class="nav-link" id="v-pills-news-tab" data-toggle="pill" href="#v-pills-news" role="tab"
                            aria-controls="v-pills-news" aria-selected="false">
                            <?php echo LocalConstants::mainLocal()['news_title']; ?>
                        </a>
                        <a class="nav-link" id="v-pills-autors-tab" data-toggle="pill" href="#v-pills-autors" role="tab"
                            aria-controls="v-pills-autors" aria-selected="false">
                            <?php echo LocalConstants::mainLocal()['documents_title']; ?>
                        </a>
                        <?php 
                            if (CHECK_RULES::ROOT()) {
                                echo
                                '<a class="nav-link" id="v-pills-seopult-tab" data-toggle="pill" href="#v-pills-seopult" role="tab"
                                    aria-controls="v-pills-seopult" aria-selected="false" style="color: rgba(254, 221, 98, 1)">
                                        SEO PULT                           
                                </a>';
                            }
                        ?>
                    </div>

                </div>

                <div id="v-pills-tabContent" class="tab-content">

                    <section class="tab-pane fade show active container" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">

                        <div style="background-color: rgba(248, 249, 250, 0.5);">
                            <h4 class="text-center">
                                <?php echo LocalConstants::mainLocal()['about_cattery_title']; ?>
                            </h4>

                            <?php $articler->show_Main_Article(); ?>

                        </div>

                    </section>

                    <section class="tab-pane fade container" id="v-pills-about" role="tabpanel"
                        aria-labelledby="v-pills-about-tab">

                        <h3 class="text-center">
                            <?php echo LocalConstants::mainLocal()['main_breed_title']; ?>
                        </h3>

                        <div style="background-color: rgba(248, 249, 250, 0.5);">
                            <?php $articler->show_Descryption(); ?>
                        </div>

                    </section>

                    <section class="tab-pane fade container" id="v-pills-exhibitions" role="tabpanel" aria-labelledby="v-pills-exhibitions-tab">

                        <h3 class="text-center">
                            <?php echo LocalConstants::mainLocal()['exhibitions_title']; ?>
                        </h3>

                        <div id="accordionExhibitions">                      
                            <?php $exhibitioner->show_Exhibitions('#accordionExhibitions'); ?>
                        </div>

                    </section>

                    <section class="tab-pane fade container" id="v-pills-video" role="tabpanel" aria-labelledby="v-pills-video-tab">

                        <h3 class="text-center">
                            <?php echo LocalConstants::mainLocal()['video_title']; ?>
                        </h3>

                        <div style="background-color: rgba(248, 249, 250, 0.5);">
                            
                            <?php $videomaker->show_Video_Gallery(); ?>

                        </div>

                    </section>

                    <section class="tab-pane fade container" id="v-pills-news" role="tabpanel" aria-labelledby="v-pills-news-tab">

                        <h3 class="text-center">
                            <?php echo LocalConstants::mainLocal()['news_title']; ?>
                        </h3>

                        <div style="background-color: rgba(248, 249, 250, 0.5);">
                            <?php $newser->show_Full_Newses(); ?>
                        </div>

                    </section>

                    <section class="tab-pane fade container" id="v-pills-autors" role="tabpanel" aria-labelledby="v-pills-autors-tab">

                        <h3 class="text-center">
                            <?php echo LocalConstants::mainLocal()['documents_title']; ?>
                        </h3>

                        <div id="accordionCatsCertificates">
                            <?php $documenter->show_Documents('#accordionCatsCertificates'); ?> 
                        </div>

                    </section>

                    <section class="tab-pane fade container" id="v-pills-seopult" role="tabpanel" aria-labelledby="v-pills-seopult-tab">

                        <div class="container">
                            <?php echo Utils::show_SKR(); ?>  
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

            <h3 class="text-center">
                <?php echo LocalConstants::mainLocal()['news_title']; ?>
            </h3>

            <div id="accordionBottom">

                <?php $newser->show_Newses(true, "#accordionBottom", "Bottom"); ?>

                <button class="btn btn-outline-primary btn-block my-1" type="button" data-toggle="collapse"
                    data-target="#collapseBottomExample" aria-expanded="false" aria-controls="collapseBottomExample">
                    <?php echo LocalConstants::mainLocal()['archive_title']; ?>
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
            <p style="background-color: rgba(23, 162, 184, 0.7);" class="text-center m-1">
                <?php echo LocalConstants::mainLocal()['contacts_title']; ?>                      
            </p>
            <div class="d-flex flex-wrap justify-content-between">
                <div style="background-color: rgba(23, 162, 184, 0.7);" class="card m-1 flex-fill">
                    <div class="card-header text-center">
                        <?php echo LocalConstants::mainLocal()['social_networks_title']; ?>
                    </div>
                    <div class="card-body text-center">
                        <a href="https://www.facebook.com/catsofixtlan/" role="button"><img class="img-fluid"
                            title="<?php echo Utils::phrase_from_skr(); ?>" src="images/socialIcons/facebook.png"
                            alt="<?php echo Utils::phrase_from_skr(); ?>"></a>
                        <a href="https://www.instagram.com/fraulein.yulia/" role="button"><img class="img-fluid"
                            title="<?php echo Utils::phrase_from_skr(); ?>" src="images/socialIcons/Instagram.png"
                            alt="<?php echo Utils::phrase_from_skr(); ?>"></a>
                        <a href="https://www.youtube.com/channel/UCnN8BceKWMpll2pLWqY2jGw?view_as=subscriber/" role="button"><img class="img-fluid"
                            title="<?php echo Utils::phrase_from_skr(); ?>" src="images/socialIcons/youtube.png"
                            alt="<?php echo Utils::phrase_from_skr(); ?>"></a>
                    </div>
                </div>
                <div style="background-color: rgba(23, 162, 184, 0.7);" class="card m-1 flex-fill">
                    <div class="card-header text-center">
                        <?php echo LocalConstants::mainLocal()['phone_numbers_title']; ?>
                    </div>
                    <div class="card-body text-center">
                        <p class="card-text">
                            <?php echo LocalConstants::mainLocal()['Julia']; ?>
                        </p>
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
                <li class="breadcrumb-item active" aria-current="page">
                    <?php echo LocalConstants::mainLocal()['home_page_title']; ?>
                </li>
            </ol>
        </nav>

    </footer>

</body>

</html>