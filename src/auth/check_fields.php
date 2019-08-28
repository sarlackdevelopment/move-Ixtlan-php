<?php

session_start();

require_once '../../configDB.php';

$json_obj = json_decode(file_get_contents('php://input'));

$fieldName  = $json_obj->fieldName;
$fieldValue = $json_obj->fieldValue;

$result = '';

if (!isset($fieldName) or !isset($fieldValue)) {
    $result = 'Неверно заданы параметры';
} else {
    switch ($fieldName) {
        case "login_sign_up":
            if (R::count('users', 'where login = ?', array($fieldValue)) > 0) {
                $result = 'Пользователь с таким логином уже присутствует в базе данных';
            } else {
                $result = ''; 
            }
            break;
        case "login_sign_in":
            if (R::count('users', 'where login = ?', array($fieldValue)) == 0) {
                $result = 'Пользователь с таким логином не зарегистрирован';
            } else {
                $result = ''; 
            }
            break;
        case "email_sign_up":
            if (R::count('users', 'where email = ?', array($fieldValue)) > 0) {
                $result = 'Пользователь с таким адресом электронной почты уже присутствует в базе данных';
            } else {
                $result = ''; 
            }
            break;
        case "password_sign_up":
            $result = '';
            break;
        case "confirmpassword_sign_up":
            $result = '';
            break;
        case "login_edit_user_settings":
            if (R::count('users', 'where login = ? and login != ?', array($fieldValue, $_SESSION['login'])) > 0) {
                $result = 'Пользователь с таким логином уже присутствует в базе данных';
            } else {
                $result = ''; 
            }
            break;
        case "email_edit_user_settings":
            if (R::count('users', 'where email = ? and email != ?', array($fieldValue, $_SESSION['email'])) > 0) {
                $result = 'Пользователь с таким адресом электронной почты уже присутствует в базе данных';
            } else {
                $result = ''; 
            }
            break;
        case "password_edit_user_settings":
            $result = '';
            break;
        case "confirmpassword_edit_user_settings":
            $result = '';
            break;
    } 
}

echo json_encode($result);