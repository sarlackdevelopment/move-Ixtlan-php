<?php

session_start();

require_once '../../configDB.php';

$post = $_POST;

/*********************************************************************************************************/
/* Вход пользователя */
/*********************************************************************************************************/

$login    = $post['login'];
$password = $post['password'];

if (isset($login) and isset($password)) {
    if (($login != '') and ($password != '')) {
        $_SESSION['login'] = $login;
    }
}

header("Location: /Ixtlan-php/index.php");