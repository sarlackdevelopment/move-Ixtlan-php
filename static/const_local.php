<?php

require_once 'src/local/utils.php';

class LocalConstants {

    public static function mainLocal() {

        $fieldName = UtilsLocal::currentLanguage()['short_caption'];
        //$_SESSION['local_constants'] = null;
        if (isset($_SESSION['local_constants'])) {
            return array(
                'main_title'              => $_SESSION['local_constants']['main_title'],
                'main_title_kitty'        => $_SESSION['local_constants']['main_title_kitty'],
                'home_page_title'         => $_SESSION['local_constants']['home_page_title'],
                'cats_males_page_title'   => $_SESSION['local_constants']['cats_males_page_title'],
                'cats_females_page_title' => $_SESSION['local_constants']['cats_females_page_title'],
                'kitty_page_title'        => $_SESSION['local_constants']['kitty_page_title'],
                'articles_page_title'     => $_SESSION['local_constants']['articles_page_title'],
                'customer_reviews_title'  => $_SESSION['local_constants']['customer_reviews_title'],
                'language_page_title'     => $_SESSION['local_constants']['language_page_title'],
                'secondary_title'         => $_SESSION['local_constants']['secondary_title'],
                'archive_title'           => $_SESSION['local_constants']['archive_title'],
                'about_cattery_title'     => $_SESSION['local_constants']['about_cattery_title'],
                'about_breed_title'       => $_SESSION['local_constants']['about_breed_title'],
                'exhibitions_title'       => $_SESSION['local_constants']['exhibitions_title'],
                'video_title'             => $_SESSION['local_constants']['video_title'],
                'news_title'              => $_SESSION['local_constants']['news_title'],
                'documents_title'         => $_SESSION['local_constants']['documents_title'],
                'main_breed_title'        => $_SESSION['local_constants']['main_breed_title'],
                'Julia'                   => $_SESSION['local_constants']['Julia'],
                'phone_numbers_title'     => $_SESSION['local_constants']['phone_numbers_title'],
                'social_networks_title'   => $_SESSION['local_constants']['social_networks_title'],
                'contacts_title'          => $_SESSION['local_constants']['contacts_title'],
                'born_banner'             => $_SESSION['local_constants']['born_banner'],
                'breed'                   => $_SESSION['local_constants']['breed'],
                'documents'               => $_SESSION['local_constants']['documents'],
                'details'                 => $_SESSION['local_constants']['details'],
                'free_state_male'         => $_SESSION['local_constants']['free_state_male'],
                'free_state_female'       => $_SESSION['local_constants']['free_state_female'],
                'book_state'              => $_SESSION['local_constants']['book_state'],
                'interest_state'          => $_SESSION['local_constants']['interest_state'],
                'have_home_state_male'    => $_SESSION['local_constants']['have_home_state_male'],
                'have_home_state_female'  => $_SESSION['local_constants']['have_home_state_female']
            );
        } else {
            $_SESSION['local_constants'] = array(
                'main_title'              => self::main_title($fieldName),
                'main_title_kitty'        => self::main_title_kitty($fieldName),
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
                'contacts_title'          => self::contacts_title($fieldName),
                'born_banner'             => self::born_banner($fieldName),
                'free_status'             => self::free_status($fieldName),
                'free'                    => self::free($fieldName),
                'breed'                   => self::breed($fieldName),
                'documents'               => self::documents($fieldName),
                'details'                 => self::details($fieldName),
                'free_state_male'         => self::free_state_male($fieldName),
                'free_state_female'       => self::free_state_female($fieldName),
                'book_state'              => self::book_state($fieldName),
                'interest_state'          => self::interest_state($fieldName),
                'have_home_state_male'    => self::have_home_state_male($fieldName),
                'have_home_state_female'  => self::have_home_state_female($fieldName)
            );
        }

        return $_SESSION['local_constants'];

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

    private static function main_title_kitty($fieldName) {

        switch ($fieldName) {
            case "rus" :
                return 'Котята норвежской лесной кошки в Москве. Фото, документы и бронирование котенка';
            case "eng" :
                return 'Kittens Norwegian forest cat in Moscow. Photos, documents and booking kitten';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Котята норвежской лесной кошки в Москве. Фото, документы и бронирование котенка';
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

    private static function born_banner($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return array(
                    'id'            => '1',
                    'action_title'  => 'Забронировать',
                    'main_message'  => 'У нас родились котята.',
                    'create_action' => true,
                    'target_page'   => 'kitty.php'
                );
            case "eng" :
                return array(
                    'id'            => '1',
                    'action_title'  => 'Book now',
                    'main_message'  => 'We have new litter',
                    'create_action' => true,
                    'target_page'   => 'kitty.php'
                );
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                array(
                    'id'            => '1',
                    'action_title'  => 'Забронировать',
                    'main_message'  => 'У нас родились котята.',
                    'create_action' => true,
                    'target_page'   => 'kitty.php'
                );
        }
    }

    private static function free_status($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Свободен для бронирования';
            case "eng" :
                return 'Free for book';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Свободен для бронирования';
        }
    }

    private static function free($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Свободен';
            case "eng" :
                return 'Free';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Свободен';
        }
    }

    private static function breed($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Помет';
            case "eng" :
                return 'Breed';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Помет';
        }
    }

    private static function documents($fieldName) {
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

    private static function details($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Подробнее';
            case "eng" :
                return 'Details';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Подробнее';
        }
    }

    private static function free_state_male($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Свободен';
            case "eng" :
                return 'Free';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Свободен';
        }
    }

    private static function free_state_female($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Свободна';
            case "eng" :
                return 'Free';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Свободна';
        }
    }

    private static function book_state($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Бронь';
            case "eng" :
                return 'Book';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Бронь';
        }
    }

    private static function interest_state($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Интерес';
            case "eng" :
                return 'Interest';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Интерес';
        }
    }

    private static function have_home_state_male($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Обрел дом';
            case "eng" :
                return 'Have home';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Обрел дом';
        }
    }

    private static function have_home_state_female($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Обрела дом';
            case "eng" :
                return 'Have home';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Обрела дом';
        }
    }

}