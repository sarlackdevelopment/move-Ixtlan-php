<?php

require_once '../../src/utils.php';

if ( Utils::is_session_started() === FALSE ) session_start();

require_once '../../configDB.php';
require_once '../../const_local.php';

$json_obj = json_decode(file_get_contents('php://input'));

$fieldName  = $json_obj->fieldName;
$fieldValue = $json_obj->fieldValue;

$result = '';

if (!isset($fieldName) or !isset($fieldValue)) {
    $result = LocalConstants::mainLocal()['wrong_parameters_title'];
} else {
    switch ($fieldName) {
        case "login_sign_up":
            if (R::count('users', 'where login = ?', array($fieldValue)) > 0) {
                $result = LocalConstants::mainLocal()['login_already_exist'];
            } else {
                $result = ''; 
            }
            break;
        case "login_sign_in":
            if (R::count('users', 'where login = ?', array($fieldValue)) == 0) {
                $result = LocalConstants::mainLocal()['user_unregistered'];
            } else {
                $result = ''; 
            }
            break;
        case "email_sign_up":
            if (R::count('users', 'where email = ?', array($fieldValue)) > 0) {
                $result = LocalConstants::mainLocal()['email_already_exist'];
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
                $result = LocalConstants::mainLocal()['login_already_exist'];
            } else {
                $result = ''; 
            }
            break;
        case "email_edit_user_settings":
            if (R::count('users', 'where email = ? and email != ?', array($fieldValue, $_SESSION['email'])) > 0) {
                $result = LocalConstants::mainLocal()['email_already_exist'];
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