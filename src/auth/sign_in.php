<?php

session_start();

require_once '../../configDB.php';

$post = $_POST;

/*********************************************************************************************************/
/* Вход пользователя */
/*********************************************************************************************************/

$login = $post['login'];

if (isset($login)) {
    if (($login != '')) {

        $_SESSION['login'] = $login;

        $current_user = R::findOne('users', 'where login = ?', array($login));
        $_SESSION['email'] = $current_user->email;

    }
}

header("Location: /Ixtlan-php/index.php");