<?php

class MainConfig {

    private static $__IT_IS_PROM__ = false;

    public static function root_redirect($paths) {
        if (self::$__IT_IS_PROM__) { 
            header('Refresh: 3; url=http://move-ixtlan.ru' . $paths['prom_path']);         
        } else {
            header("Location: " . $paths['dev_path']);
        }
    }

    public static function dev_name() {
        if (self::$__IT_IS_PROM__) {
            return ''; 
        } else {
            return 'Ixtlan-php';
        }
    }

    public static function root_store() {
        if (self::$__IT_IS_PROM__) {
            return $_SERVER['DOCUMENT_ROOT'];         
        } else {
            return $_SERVER['DOCUMENT_ROOT'] . DIRECTORY_SEPARATOR . self::dev_name();
        }
    }

    public static function SEO_setting() {
        if (!self::$__IT_IS_PROM__) {
            return '';         
        } else {
            return 
            '<!-- Yandex.Metrika counter -->
            <script type="text/javascript" >
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(51380782, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            </script>
            <noscript><div><img src="https://mc.yandex.ru/watch/51380782" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
            <!-- /Yandex.Metrika counter -->';

        }
    }

    /*  До лучших времен, когда я разберусь что такое google теги
        <!-- Google Tag Manager -->
            <script>
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":
                new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src=
                "https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,"script","dataLayer","GTM-52BDR88");</script>
            <!-- End Google Tag Manager -->
    */

    public static function GoogleTagManager() {
        if (!self::$__IT_IS_PROM__) {
            return '';         
        } else {
            return 
            '<!-- Google Tag Manager (noscript) -->
            <noscript>
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-52BDR88"
                    height="0" width="0" style="display:none;visibility:hidden"></iframe>
            </noscript>
            <!-- End Google Tag Manager (noscript) -->';
        }
    }
    
}