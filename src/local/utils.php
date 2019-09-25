<?php

class UtilsLocal {

    /* public static function currentLanguage() {

        $result = array(
            'caption'       => 'russian',
            'short_caption' => 'rus',
            'icon_path'     => 'images/lang/rusflag1.png'
        );

        if (!isset($_SESSION['login'])) {
            return $result;
        } else {
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

    } */



    public static function currentLanguage() {

        if (isset($_SESSION['current_language'])) {
            return array(
                'caption'       => $_SESSION['current_language']['caption'],
                'short_caption' => $_SESSION['current_language']['short_caption'],
                'icon_path'     => $_SESSION['current_language']['icon_path']
            );
        }

        $result = array(
            'caption'       => 'russian',
            'short_caption' => 'rus',
            'icon_path'     => 'images/lang/rusflag1.png'
        );

        if (!isset($_SESSION['login'])) {
            return $result;
        } else {
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
                <img title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва" class="img-fluid"
                    src="' . $language['icon_path'] . '" alt="питомник норвежской продажа норвежской котята норвежской">
            </div>';
        }
                        
        return $result;
    }

}