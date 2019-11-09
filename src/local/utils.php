<?php

require_once 'utils.php';

class UtilsLocal {

    public static function currentLanguage() {

        // Идея такова:
        // Весь цимес в том авторизован пользователь или нет. 
        // 1. Пользователь неавторизован. Мы може перейти по ссылке вида http://move-ixtlan/index.php?lang=eng
        //    и получим контент на целевом языке. Это сделано для SEO при локализации. На каждой странице есть перелинковка
        //    которая в зависимости от локации откравляет (ну, в теории должна отправлять) поискового робота Google на
        //    локализованную страницу. Что касается человека, то переключение языков происходит как в обычном режиме, так
        //    методом подстановки в параметр lang URL сокращения целевого языка. Кэширование в сессии при этом каждый раз сбрасывается.
        // 2. Пользователь авторизован. Переключение языков происходит только в штатном режиме. Правка URL не поддерживается, так 
        //    как работает кэширование сессии. 

        if (!isset($_GET['lang'])) {
            $result = array(
                'caption'       => 'russian',
                'short_caption' => 'rus',
                'icon_path'     => 'images/lang/rusflag1.png'
            );
        } else {
            $lang = R::findOne('languages', 'where short_caption = ?', array($_GET['lang']));
            if ($lang == null) {                
                $result = array(
                    'caption'       => 'russian',
                    'short_caption' => 'rus',
                    'icon_path'     => 'images/lang/rusflag1.png'
                ); 
            } else {
                $result = array(
                    'caption'       => $lang['caption'],
                    'short_caption' => $lang['short_caption'],
                    'icon_path'     => $lang['icon_path']
                );
            }
        }

        if (!isset($_SESSION['login'])) {
            $_SESSION['local_constants'] = NULL;
            return $result;
        } else {

            if (isset($_SESSION['current_language'])) {
                return array(
                    'caption'       => $_SESSION['current_language']['caption'],
                    'short_caption' => $_SESSION['current_language']['short_caption'],
                    'icon_path'     => $_SESSION['current_language']['icon_path']
                );
            }

            $languages = R::getAll(
                'SELECT
                    languages.caption AS caption,
                    languages.icon_path AS icon_path,
                    languages.short_caption AS short_caption
                FROM languages AS languages
                    INNER JOIN
                        (SELECT
                            userssettings.value AS lang_id
                        FROM users AS users 
                            INNER JOIN userssettings AS userssettings
                                ON users.id = userssettings.users_id
                                    AND (users.login = ?)
                                    AND (userssettings.name = ?)) AS sub
                ON languages.id = sub.lang_id', array($_SESSION['login'], "lang"));

            if (count($languages) === 0) {
                return $result;
            } else {
                foreach ($languages as $current_lang) {
                    return array(
                        'caption'       => $current_lang['caption'],
                        'short_caption' => $current_lang['short_caption'],
                        'icon_path'     => $current_lang['icon_path']
                    );
                }
            }
 
        }

    }

    public static function listLanguages() {

        $result = '';

        $languages = R::findCollection('languages');
        while ($language = $languages->next()) {
            $result = $result . '
            <div id="lang_' . $language['short_caption'] . '" class="d-flex align-items-center justify-content-between mx-2 p-2" style="background-color: rgba(0,0,0,.03); cursor: pointer;">
                <span>' . $language['short_caption'] . '</span>
                <img title="' . Utils::phrase_from_skr() .'" class="img-fluid"
                    src="' . $language['icon_path'] . '" alt="' . Utils::phrase_from_skr() .'">
            </div>';
        }
                        
        return $result;
    }

}