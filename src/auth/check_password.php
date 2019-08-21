<?php

require_once '../../configDB.php';

/*********************************************************************************************************/
/* Валидируем пароль */
/*********************************************************************************************************/

$json_obj = json_decode(file_get_contents('php://input'));

$login    = $json_obj->login;
$password = $json_obj->password;

if (isset($login) and isset($password)) {

    $current_user = R::findOne('users', 'where login = ?', array($login));
    $result       = password_verify($password, $current_user->password);

}

echo json_encode($result);