<?php

require_once '../../src/utils.php';
require_once '../../src/local/utils.php';

if ( Utils::is_session_started() === FALSE ) session_start();

require_once '../../configDB.php';
require_once '../../main_config.php';

$post = $_POST;

/*********************************************************************************************************/
/* Вход пользователя */
/*********************************************************************************************************/

$login    = $post['login'];
$redirect = $post['redirect'];

if (isset($login)) {
    if (($login != '')) {

        $_SESSION['login'] = $login;

        $current_user = R::findOne('users', 'where login = ?', array($login));
        $_SESSION['email'] = $current_user->email;

        // При авторизации запрашиваем и после кешируем язык
        $current_language = UtilsLocal::currentLanguage();

        $_SESSION['current_language'] = array(
            'caption'       => $current_language['caption'],
            'short_caption' => $current_language['short_caption'],
            'icon_path'     => $current_language['icon_path']
        );

        $_SESSION['local_constants'] = NULL;

    }
}

MainConfig::root_redirect(
    array(
        'prom_path' => $redirect, 
        'dev_path' => '/Ixtlan-php/' . $redirect
    )
);
