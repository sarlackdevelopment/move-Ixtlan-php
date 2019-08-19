<?php

session_start();

require_once '../../configDB.php';

$post = $_POST;

/*********************************************************************************************************/
/* Вход пользователя */
/*********************************************************************************************************/

$login    = $post['login_sign_in'];
$password = $post['password_sign_in'];

if (isset($login) and isset($password)) {
    if (($login != '') and ($password != '')) {

        $_SESSION['login'] = $login;

        $log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';
        $info = "Из файла авторизации: " . $_SESSION['login'];
        file_put_contents($log, $info, FILE_APPEND);

        /* $user = R::dispense('users');

        $user->login = $login;
        $user->email = $email;
        $user->password = password_hash($password, PASSWORD_DEFAULT);

        R::store($user); */

    }
}

header("Location: /Ixtlan-php/index.php");