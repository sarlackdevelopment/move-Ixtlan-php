<?php

require_once '../../src/utils.php';

if ( Utils::is_session_started() === FALSE ) session_start();

require_once '../../configDB.php';

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

//header('Refresh: 3; url=http://move-ixtlan.ru/' . $redirect);
header("Location: /Ixtlan-php/" . $redirect);