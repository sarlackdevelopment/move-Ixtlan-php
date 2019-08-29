<?php

require_once '../../src/utils.php';

if ( Utils::is_session_started() === FALSE ) session_start();

require_once '../../configDB.php';

$post = $_POST;

/*********************************************************************************************************/
/* Изменение параметров пользователя */
/*********************************************************************************************************/

$login    = $post['login'];
$password = $post['password'];
$email    = $post['email'];

if (isset($login) and isset($email) and isset($password)) {

    $current_user = R::findOne('users', 'where login = ?', array($_SESSION['login']));

    if ($login != '') {
        $current_user->login = $login;
        $_SESSION['login'] = $login;
    }

    if ($email != '') {
        $current_user->email = $email;
        $_SESSION['email'] = $email;
    }

    if ($password != '') {
        $current_user->password = password_hash($password, PASSWORD_DEFAULT);
    }

    R::store($current_user);

}

header("Location: /Ixtlan-php/index.php");