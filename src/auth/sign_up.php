<?php

require_once '../../src/utils.php';
require_once '../../src/local/utils.php';

if ( Utils::is_session_started() === FALSE ) session_start();

require_once '../../configDB.php';
require_once '../../main_config.php';

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

        // При авторизации запрашиваем и после кешируем язык
        $current_language = UtilsLocal::currentLanguage();

        $_SESSION['current_language'] = array(
            'caption'       => $current_language['caption'],
            'short_caption' => $current_language['short_caption'],
            'icon_path'     => $current_language['icon_path']
        );

        $_SESSION['local_constants'] = NULL;

        // TODO Дописать систему прав. Пока что закомментирована как неиспользуемая

        /* $rules = R::dispense('rules');

        $rules->name  = 'user';
        $rules->value = true;
        $rules->sharedUsersList[] = $user;

        R::store($rules); */

    }
}

MainConfig::root_redirect(
    array(
        'prom_path' => '', 
        'dev_path' => '/Ixtlan-php/index.php'
    )
);

