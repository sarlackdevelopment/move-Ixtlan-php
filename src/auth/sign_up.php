<?php

session_start();
header("Content-type: text/html; charset=UTF-8");

require_once '../../configDB.php';

$post = $_POST;

/*********************************************************************************************************/
/* Регистрация пользователя */
/*********************************************************************************************************/

$login    = $post['login'];
$password = $post['password'];
$email    = $post['email'];

if (isset($login) and isset($email) and isset($password)) {
    if (($login != '') and ($email != '') and ($password != '')) {

        $user = R::dispense('users');

        $user->login    = $login;
        $user->email    = $email;
        $user->approve  = false;
        $user->password = password_hash($password, PASSWORD_DEFAULT);

        R::store($user);

        $_SESSION['login'] = $login;
        $_SESSION['email'] = $email;

        $rules = R::dispense('rules');

        $rules->name  = 'user';
        $rules->value = true;
        $rules->sharedBroodsList[] = $user;

        R::store($rules);

    }
}

header("Location: /Ixtlan-php/index.php");
