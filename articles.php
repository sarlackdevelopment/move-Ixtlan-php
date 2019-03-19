<?php

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
    <meta name="description" content="содержание норвежской лесной кошки уход за норвежской лесной кошкой купить котенка купить котенка в москве">

    <!-- For SEO -->
    <link rel="canonical" href="http://move-ixtlan.ru/articles.html" />

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

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
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

    <title>Содержание и уход за норвежской лесной кошкой</title>

</head>

<body>
<!-- Optional JavaScript -->
<script>

var MyResize = function () {

    var $mainArea = $("#mainArea");
    var $newsArea = $("#newsArea");
    var $newsAreaBottom = $("#newsAreaBottom");
    var $mainNews = $("#mainNews");

    if (window.matchMedia('(max-width: 768px)').matches) {

        if ($newsArea.is(':visible')) {
            $newsArea.hide();
            $mainNews.hide();
        }

        if ($mainArea.hasClass('col-8')) {
            $mainArea.removeClass('col-8');
            $mainArea.addClass('col-12');
        }

        if ($newsArea.is(':hidden')) {
            $newsAreaBottom.show();
            $mainNews.show();
        }

    } else {

        if ($newsArea.is(':hidden')) {
            $newsArea.show();
            $mainNews.show();
        }

        if ($mainArea.hasClass('col-12')) {
            $mainArea.removeClass('col-12');
            $mainArea.addClass('col-8');
        }

        if ($newsArea.is(':visible')) {
            $newsAreaBottom.hide();
            $mainNews.hide();
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