<?php

require_once 'src/local/utils.php';

class LocalConstants {

    // TODO: 
    //     1. Перетащить текущий скрипт из папки static в корень проекта
    //     2. Попробывать сделать массив функций

    public static function mainLocal() {

        $fieldName = UtilsLocal::currentLanguage()['short_caption'];
        //$_SESSION['local_constants'] = NULL;
        if (isset($_SESSION['local_constants'])) {
            return array(
                'main_title'                      => $_SESSION['local_constants']['main_title'],
                'main_title_kitty'                => $_SESSION['local_constants']['main_title_kitty'],
                'home_page_title'                 => $_SESSION['local_constants']['home_page_title'],
                'cats_males_page_title'           => $_SESSION['local_constants']['cats_males_page_title'],
                'cats_females_page_title'         => $_SESSION['local_constants']['cats_females_page_title'],
                'kitty_page_title'                => $_SESSION['local_constants']['kitty_page_title'],
                'articles_page_title'             => $_SESSION['local_constants']['articles_page_title'],
                'customer_reviews_title'          => $_SESSION['local_constants']['customer_reviews_title'],
                'language_page_title'             => $_SESSION['local_constants']['language_page_title'],
                'secondary_title'                 => $_SESSION['local_constants']['secondary_title'],
                'archive_title'                   => $_SESSION['local_constants']['archive_title'],
                'hide_archive_title'              => $_SESSION['local_constants']['hide_archive_title'],
                'about_cattery_title'             => $_SESSION['local_constants']['about_cattery_title'],
                'about_breed_title'               => $_SESSION['local_constants']['about_breed_title'],
                'exhibitions_title'               => $_SESSION['local_constants']['exhibitions_title'],
                'video_title'                     => $_SESSION['local_constants']['video_title'],
                'news_title'                      => $_SESSION['local_constants']['news_title'],
                'documents_title'                 => $_SESSION['local_constants']['documents_title'],
                'main_breed_title'                => $_SESSION['local_constants']['main_breed_title'],
                'Julia'                           => $_SESSION['local_constants']['Julia'],
                'phone_numbers_title'             => $_SESSION['local_constants']['phone_numbers_title'],
                'social_networks_title'           => $_SESSION['local_constants']['social_networks_title'],
                'contacts_title'                  => $_SESSION['local_constants']['contacts_title'],
                'born_banner'                     => $_SESSION['local_constants']['born_banner'],
                'breed'                           => $_SESSION['local_constants']['breed'],
                'documents'                       => $_SESSION['local_constants']['documents'],
                'details'                         => $_SESSION['local_constants']['details'],
                'free_state_male'                 => $_SESSION['local_constants']['free_state_male'],
                'free_state_female'               => $_SESSION['local_constants']['free_state_female'],
                'book_state'                      => $_SESSION['local_constants']['book_state'],
                'interest_state'                  => $_SESSION['local_constants']['interest_state'],
                'have_home_state_male'            => $_SESSION['local_constants']['have_home_state_male'],
                'have_home_state_female'          => $_SESSION['local_constants']['have_home_state_female'],
                'common_photo'                    => $_SESSION['local_constants']['common_photo'],
                'two_weeks'                       => $_SESSION['local_constants']['two_weeks'],
                'one_month'                       => $_SESSION['local_constants']['one_month'],
                'two_months'                      => $_SESSION['local_constants']['two_months'],
                'three_months'                    => $_SESSION['local_constants']['three_months'],
                'four_months'                     => $_SESSION['local_constants']['four_months'],
                'five_months'                     => $_SESSION['local_constants']['five_months'],
                'articles_page_main_title'        => $_SESSION['local_constants']['articles_page_main_title'],
                'sign_in_title'                   => $_SESSION['local_constants']['sign_in_title'],
                'sign_out_title'                  => $_SESSION['local_constants']['sign_out_title'],
                'sign_up_title'                   => $_SESSION['local_constants']['sign_up_title'],
                'authentication_title'            => $_SESSION['local_constants']['authentication_title'],
                'login_title'                     => $_SESSION['local_constants']['login_title'],
                'password_title'                  => $_SESSION['local_constants']['password_title'],
                'sign_up_description'             => $_SESSION['local_constants']['sign_up_description'],
                'repeat_password_title'           => $_SESSION['local_constants']['repeat_password_title'],
                'email_title'                     => $_SESSION['local_constants']['email_title'],
                'sign_in_up_title'                => $_SESSION['local_constants']['sign_in_up_title'],
                'invitation_sign_in_title'        => $_SESSION['local_constants']['invitation_sign_in_title'],
                'invitation_sign_up_title'        => $_SESSION['local_constants']['invitation_sign_up_title'],
                'close_title'                     => $_SESSION['local_constants']['close_title'],
                'edit_user_setting_title'         => $_SESSION['local_constants']['edit_user_setting_title'],
                'save_title'                      => $_SESSION['local_constants']['save_title'],
                'photo_title'                     => $_SESSION['local_constants']['photo_title'],
                'hide_news_panel'                 => $_SESSION['local_constants']['hide_news_panel'],
                'show_news_panel'                 => $_SESSION['local_constants']['show_news_panel'],
                'wrong_parameters_title'          => $_SESSION['local_constants']['wrong_parameters_title'],
                'login_already_exist'             => $_SESSION['local_constants']['login_already_exist'],
                'user_unregistered'               => $_SESSION['local_constants']['user_unregistered'],
                'email_already_exist'             => $_SESSION['local_constants']['email_already_exist'],
                'approving_email'                 => $_SESSION['local_constants']['approving_email'],
                'do_approve_email'                => $_SESSION['local_constants']['do_approve_email'],
                'complete_approve_email_part_one' => $_SESSION['local_constants']['complete_approve_email_part_one'],
                'complete_approve_email_part_two' => $_SESSION['local_constants']['complete_approve_email_part_two'],
                'send_letter'                     => $_SESSION['local_constants']['send_letter'],
                'email_approve_instruction'       => $_SESSION['local_constants']['email_approve_instruction'],
                'email_is_not_approved'           => $_SESSION['local_constants']['email_is_not_approved'],
                'about_me_in_more_details'        => $_SESSION['local_constants']['about_me_in_more_details']
                
            );
        } else {
            $_SESSION['local_constants'] = array(
                'main_title'                      => self::main_title($fieldName),
                'main_title_kitty'                => self::main_title_kitty($fieldName),
                'home_page_title'                 => self::home_page_title($fieldName),
                'cats_males_page_title'           => self::cats_males_page_title($fieldName),
                'cats_females_page_title'         => self::cats_females_page_title($fieldName),
                'kitty_page_title'                => self::kitty_page_title($fieldName),
                'articles_page_title'             => self::articles_page_title($fieldName),
                'customer_reviews_title'          => self::customer_reviews_title($fieldName),
                'language_page_title'             => self::language_page_title($fieldName),
                'secondary_title'                 => self::secondary_title($fieldName),
                'archive_title'                   => self::archive_title($fieldName),
                'hide_archive_title'              => self::hide_archive_title($fieldName),
                'about_cattery_title'             => self::about_cattery_title($fieldName),
                'about_breed_title'               => self::about_breed_title($fieldName),
                'exhibitions_title'               => self::exhibitions_title($fieldName),
                'video_title'                     => self::video_title($fieldName),
                'news_title'                      => self::news_title($fieldName),
                'documents_title'                 => self::documents_title($fieldName),
                'main_breed_title'                => self::main_breed_title($fieldName),
                'Julia'                           => self::Julia($fieldName),
                'phone_numbers_title'             => self::phone_numbers_title($fieldName),
                'social_networks_title'           => self::social_networks_title($fieldName),
                'contacts_title'                  => self::contacts_title($fieldName),
                'born_banner'                     => self::born_banner($fieldName),
                'free_status'                     => self::free_status($fieldName),
                'free'                            => self::free($fieldName),
                'breed'                           => self::breed($fieldName),
                'documents'                       => self::documents($fieldName),
                'details'                         => self::details($fieldName),
                'free_state_male'                 => self::free_state_male($fieldName),
                'free_state_female'               => self::free_state_female($fieldName),
                'book_state'                      => self::book_state($fieldName),
                'interest_state'                  => self::interest_state($fieldName),
                'have_home_state_male'            => self::have_home_state_male($fieldName),
                'have_home_state_female'          => self::have_home_state_female($fieldName),
                'common_photo'                    => self::common_photo($fieldName),
                'two_weeks'                       => self::two_weeks($fieldName),
                'one_month'                       => self::one_month($fieldName),
                'two_months'                      => self::two_months($fieldName),
                'three_months'                    => self::three_months($fieldName),
                'four_months'                     => self::four_months($fieldName),
                'five_months'                     => self::five_months($fieldName),
                'articles_page_main_title'        => self::articles_page_main_title($fieldName),
                'sign_in_title'                   => self::sign_in_title($fieldName),
                'sign_out_title'                  => self::sign_out_title($fieldName),
                'sign_up_title'                   => self::sign_up_title($fieldName),
                'authentication_title'            => self::authentication_title($fieldName),
                'login_title'                     => self::login_title($fieldName),
                'password_title'                  => self::password_title($fieldName),
                'sign_up_description'             => self::sign_up_description($fieldName),
                'repeat_password_title'           => self::repeat_password_title($fieldName),
                'email_title'                     => self::email_title($fieldName),
                'sign_in_up_title'                => self::sign_in_up_title($fieldName),
                'invitation_sign_in_title'        => self::invitation_sign_in_title($fieldName),
                'invitation_sign_up_title'        => self::invitation_sign_up_title($fieldName),
                'close_title'                     => self::close_title($fieldName),
                'edit_user_setting_title'         => self::edit_user_setting_title($fieldName),
                'save_title'                      => self::save_title($fieldName),
                'photo_title'                     => self::photo_title($fieldName),
                'hide_news_panel'                 => self::hide_news_panel($fieldName),
                'show_news_panel'                 => self::show_news_panel($fieldName),
                'wrong_parameters_title'          => self::wrong_parameters_title($fieldName),
                'login_already_exist'             => self::login_already_exist($fieldName),
                'user_unregistered'               => self::user_unregistered($fieldName),
                'email_already_exist'             => self::email_already_exist($fieldName),
                'approving_email'                 => self::approving_email($fieldName),
                'do_approve_email'                => self::do_approve_email($fieldName),
                'complete_approve_email_part_one' => self::complete_approve_email_part_one($fieldName),
                'complete_approve_email_part_two' => self::complete_approve_email_part_two($fieldName),
                'send_letter'                     => self::send_letter($fieldName),
                'email_approve_instruction'       => self::email_approve_instruction($fieldName),
                'email_is_not_approved'           => self::email_is_not_approved($fieldName),
                'about_me_in_more_details'        => self::about_me_in_more_details($fieldName),
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
                return 'Архив...';
            case "eng" :
                return 'Archive...';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Архив...';
        }
    }

    private static function hide_archive_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Скрыть архив...';
            case "eng" :
                return 'Hide archive...';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Скрыть архив...';
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
                return 'Available for book';
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
                return 'Available';
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
                return 'Litter';
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
                return 'Available';
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
                return 'Available';
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

    private static function common_photo($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Общие фото';
            case "eng" :
                return 'Common photo';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Общие фото';
        }
    }

    private static function two_weeks($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Две недели';
            case "eng" :
                return 'Two weeks';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Две недели';
        }
    }

    private static function one_month($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Месяц';
            case "eng" :
                return 'One month';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Месяц';
        }
    }

    private static function two_months($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Два месяца';
            case "eng" :
                return 'Two months';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Два месяца';
        }
    }

    private static function three_months($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Три месяца';
            case "eng" :
                return 'Three months';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Три месяца';
        }
    }

    private static function four_months($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Четыре месяца';
            case "eng" :
                return 'Four months';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Четыре месяца';
        }
    }

    private static function five_months($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Пять месяцев';
            case "eng" :
                return 'Five months';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Пять месяцев';
        }
    }

    private static function articles_page_main_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Норвежские лесные кошки. Что нужно знать о породе.';
            case "eng" :
                return 'Norwegian Forest Cats (NFO). What do you need to know.';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Норвежские лесные кошки. Что нужно знать о породе.';
        }
    }

    private static function sign_out_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Выход';
            case "eng" :
                return 'Sign out';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Выход';
        }
    }

    private static function sign_in_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Вход';
            case "eng" :
                return 'Sign in';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Вход';
        }
    }

    private static function sign_up_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Регистрация';
            case "eng" :
                return 'Sign up';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Регистрация';
        }
    }

    private static function authentication_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Аутентификация';
            case "eng" :
                return 'Authentication';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Аутентификация';
        }
    }

    private static function login_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Логин';
            case "eng" :
                return 'Login';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Логин';
        }
    }

    private static function password_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Пароль';
            case "eng" :
                return 'Password';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Пароль';
        }
    }

    private static function sign_up_description($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Зарегистрировавшись вы сможете оставлять комментарии и 
                    отзывы, а также появится возможность редактирования и 
                    сохранения персональных настроек';
            case "eng" :
                return 'Sign up will allow you to commenting and also edit and
                    save private settings';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default :
                'Зарегистрировавшись вы сможете оставлять комментарии и 
                    отзывы, а также появится возможность редактирования и 
                    сохранения персональных настроек';
        }
    }

    private static function email_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Электронная почта';
            case "eng" :
                return 'Email';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default : 'Электронная почта';
        }
    }

    private static function repeat_password_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Повотрите пароль';
            case "eng" :
                return 'Repeat password';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default : 'Повотрите пароль';
        }
    }

    private static function sign_in_up_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Вход / Регистрация';
            case "eng" :
                return 'sign in / sign up';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default : 'Вход / Регистрация';
        }
    }

    private static function invitation_sign_in_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Пожалуйста введите свой логин и пароль';
            case "eng" :
                return 'Could you type your login and password?';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default : 'Пожалуйста введите свой логин и пароль';
        }
    }

    private static function invitation_sign_up_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Пожалуйста заполните информацию о себе';
            case "eng" :
                return 'Could you get me some information about yourself?';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default : 'Пожалуйста заполните информацию о себе';
        }
    }

    private static function close_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Закрыть';
            case "eng" :
                return 'Close';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default : 'Закрыть';
        }
    }

    private static function edit_user_setting_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Редактирование пользовательских данных';
            case "eng" :
                return 'Here you can customize your settings';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default : 'Редактирование пользовательских данных';
        }
    }

    private static function save_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Сохранить';
            case "eng" :
                return 'Save';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default : 'Сохранить';
        }
    }

    private static function photo_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'фото';
            case "eng" :
                return 'photo';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default : 'фото';
        }
    }

    private static function hide_news_panel($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Скрыть панель новостей';
            case "eng" :
                return 'Hide news panel';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default : 'Скрыть панель новостей';
        }
    }

    private static function show_news_panel($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Показать панель новостей';
            case "eng" :
                return 'Show news panel';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default : 'Показать панель новостей';
        }
    }

    private static function wrong_parameters_title($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Неверно заданы параметры';
            case "eng" :
                return 'Wrong parameters';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default : 'Неверно заданы параметры';
        }
    }

    private static function login_already_exist($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Пользователь с таким логином уже присутствует в базе данных';
            case "eng" :
                return 'User with this login is already exist';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default : 'Пользователь с таким логином уже присутствует в базе данных';
        }
    }

    private static function user_unregistered($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Пользователь с таким логином не зарегистрирован';
            case "eng" :
                return 'User with this login is unregistered';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default : 'Пользователь с таким логином не зарегистрирован';
        }
    }

    private static function email_already_exist($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Пользователь с таким адресом электронной почты уже присутствует в базе данных';
            case "eng" :
                return 'User with this email is already exist';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default : 'Пользователь с таким адресом электронной почты уже присутствует в базе данных';
        }
    }

    private static function approving_email($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Подтверждение электронной почты на сайте Ixtlan';
            case "eng" :
                return 'Approving email on the website Ixtlan';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default : 'Подтверждение электронной почты на сайте Ixtlan';
        }
    }

    private static function do_approve_email($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Подтвердить адрес электронной почты';
            case "eng" :
                return 'Do approve email';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default : 'Подтвердить адрес электронной почты';
        }
    }

    private static function complete_approve_email_part_one($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Для завершения процесса подтверждения адреса электронной почты вам нужно перейти по ссылке: ';
            case "eng" :
                return 'You need go to the reference for complete email approving process';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default : 'Для завершения процесса подтверждения адреса электронной почты вам нужно перейти по ссылке: ';
        }
    }

    private static function complete_approve_email_part_two($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Если вы понятия не имеете что это за письмо, просто удалите это сообщение.';
            case "eng" :
                return 'If you cannot figure out what hell is this message do in your letters, sorry... and just remove it.';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default : 'Если вы понятия не имеете что это за письмо, просто удалите это сообщение.';
        }
    }

    private static function send_letter($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Отправить письмо';
            case "eng" :
                return 'Send letter';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default : 'Отправить письмо';
        }
    }

    private static function email_approve_instruction($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Для подтверждения адреса электронной почты указанной при регистрации нужно отправить письмо по данному адресу.
                    После того как письмо придет, следовать инструкциям указанном в нём';
            case "eng" :
                return 'For approving email you need send some test-message (just push the button "Send"). 
                    After the letter came, you need do what it says (do not worry - all of you need to do just go to the 
                    reference and come back to this website)';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default : 'Для подтверждения адреса электронной почты указанной при регистрации нужно отправить письмо по данному адресу.
                После того как письмо придет, следовать инструкциям указанном в нём';
        }
    }

    private static function email_is_not_approved($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Email не подтвержден';
            case "eng" :
                return 'Email is not approved';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default : 'Email не подтвержден';
        }
    }

    private static function about_me_in_more_details($fieldName) {
        switch ($fieldName) {
            case "rus" :
                return 'Подробнее обо мне';
            case "eng" :
                return 'About me in more details';
            case "hun" :
                return '';
            case "chi" :
                return '';
            default : 'Подробнее обо мне';
        }
    }

}