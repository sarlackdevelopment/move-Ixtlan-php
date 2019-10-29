<?php

require_once '../../src/utils.php';

if ( Utils::is_session_started() === FALSE ) session_start();

require_once '../../configDB.php';
require_once '../../main_config.php';

$post = $_POST;

/*********************************************************************************************************/
/* Вход пользователя */
/*********************************************************************************************************/

$login    = $post['login'];
$redirect = $post['redirect'];

if (isset($login) and isset($redirect)) {
    if (($login != '') and ($redirect != '')) {

        $_SESSION['login'] = $login;

        $current_user = R::findOne('users', 'where login = ?', array($login));
        $_SESSION['email'] = $current_user->email;

    }
}

MainConfig::root_redirect(
    array(
        'prom_path' => $redirect, 
        'dev_path' => '/Ixtlan-php/' . $redirect
    )
);
