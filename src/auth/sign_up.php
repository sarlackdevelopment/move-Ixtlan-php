<?php

require_once '../../configDB.php';

$post = $_POST;

/*********************************************************************************************************/
/* Регистрация пользователя */
/*********************************************************************************************************/

$login    = $post['login_sign_up'];
$password = $post['password_sign_up'];
$email    = $post['email_sign_up'];

if (isset($login) and isset($email) and isset($password)) {
    if (($login != '') and ($email != '') and ($password != '')) {

        $user = R::dispense('users');

        $user->login = $login;
        $user->email = $email;
        $user->password = password_hash($password, PASSWORD_DEFAULT);

        R::store($user);

    }
}

header("Location: /Ixtlan-php/index.php");
