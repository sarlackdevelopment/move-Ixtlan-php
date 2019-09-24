<?php

require_once 'src/local/utils.php';

class LocalConstants {

    public static function mainLocal() {

        //if (!(isset($_SESSION['mainLocal'])) or ($_SESSION['mainLocal'] === '')) {
        //if (!(isset($_SESSION['mainLocal']))) {

            $fieldName = UtilsLocal::currentLanguage()['short_caption'];

            //$_SESSION['mainLocal'] = array(
            return array(
                'main_title'              => self::main_title($fieldName),
                'home_page_title'         => self::home_page_title($fieldName),
                'cats_males_page_title'   => self::cats_males_page_title($fieldName),
                'cats_females_page_title' => self::cats_females_page_title($fieldName),
                'kitty_page_title'        => self::kitty_page_title($fieldName),
                'articles_page_title'     => self::articles_page_title($fieldName),
                'customer_reviews_title'  => self::customer_reviews_title($fieldName),
                'language_page_title'     => self::language_page_title($fieldName),
                'secondary_title'         => self::secondary_title($fieldName),
                'archive_title'           => self::archive_title($fieldName),
                'about_cattery_title'     => self::about_cattery_title($fieldName),
                'about_breed_title'       => self::about_breed_title($fieldName),
                'exhibitions_title'       => self::exhibitions_title($fieldName),
                'video_title'             => self::video_title($fieldName),
                'news_title'              => self::news_title($fieldName),
                'documents_title'         => self::documents_title($fieldName),
                'main_breed_title'        => self::main_breed_title($fieldName),
                'Julia'                   => self::Julia($fieldName),
                'phone_numbers_title'     => self::phone_numbers_title($fieldName),
                'social_networks_title'   => self::social_networks_title($fieldName),
                'contacts_title'          => self::contacts_title($fieldName)
            );

        //}

        //$log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';
        //file_put_contents($log, $_SESSION['mainLocal'], FILE_APPEND);

        //return $_SESSION['mainLocal'];

    }

    private static function main_title($fieldName) {

        switch ($fieldName) {
            case "rus" :
                return 'Питомник норвежских лесных кошек Ixtlan в Москве';
            case "eng" :
                return 'Norwegian Forest Cats Cattery Ixtlan';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Питомник норвежских лесных кошек Ixtlan в Москве';
        }
    }

    private static function home_page_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Главная';
            case "eng" :
                return 'Home';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Главная';
        }
    }

    private static function cats_males_page_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Коты';
            case "eng" :
                return 'Cats (male)';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Коты';
        }
    }

    private static function cats_females_page_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Кошки';
            case "eng" :
                return 'Cats (female)';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Кошки';
        }
    }

    private static function kitty_page_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Котята';
            case "eng" :
                return 'kittens';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Котята';
        }
    }

    private static function articles_page_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Статьи';
            case "eng" :
                return 'Articles';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Статьи';
        }
    }

    private static function customer_reviews_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Отзывы';
            case "eng" :
                return 'Customer reviews';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Отзывы';
        }
    }

    private static function language_page_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Язык';
            case "eng" :
                return 'Language';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Язык';
        }
    }

    private static function secondary_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Питомник норвежских лесных кошек в Москве';
            case "eng" :
                return 'Norwegian Forest Cats Cattery in Moscow';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Питомник норвежских лесных кошек в Москве';
        }
    }

    private static function archive_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Архив';
            case "eng" :
                return 'Archive';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Архив';
        }
    }

    private static function about_cattery_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'О питомнике';
            case "eng" :
                return 'About our cattery';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'О питомнике';
        }
    }

    private static function about_breed_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'О породе';
            case "eng" :
                return 'About breed';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'О породе';
        }
    }

    private static function exhibitions_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Выставки';
            case "eng" :
                return 'Cat shows';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Выставки';
        }
    }

    private static function video_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Видео';
            case "eng" :
                return 'Video';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Видео';
        }
    }

    private static function news_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Новости';
            case "eng" :
                return 'News';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Новости';
        }
    }

    private static function documents_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Документы';
            case "eng" :
                return 'Documents';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Документы';
        }
    }

    private static function main_breed_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Порода Норвежская лесная кошка';
            case "eng" :
                return 'Norwegian Forest Cat Breed';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Порода Норвежская лесная кошка';
        }
    }

    private static function Julia($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return '+7 904 21 23 817 (Юлия)';
            case "eng" :
                return '+7 904 21 23 817 (Julia)';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                '+7 904 21 23 817 (Юлия)';
        }
    }

    private static function phone_numbers_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Телефоны';
            case "eng" :
                return 'Numbers';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Телефоны';
        }
    }

    private static function social_networks_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Социальные сети';
            case "eng" :
                return 'Social networks';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Социальные сети';
        }
    }

    private static function contacts_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Контакты';
            case "eng" :
                return 'Contacts';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Контакты';
        }
    }

}