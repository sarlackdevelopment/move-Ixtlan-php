<?php

require_once '../../configDB.php';

$json_obj = json_decode(file_get_contents('php://input'));

$fieldName  = $json_obj->fieldName;
$fieldValue = $json_obj->fieldValue;

$result = '';

if (!isset($fieldName) or !isset($fieldValue)) {
    $result = 'Неверно заданы параметры';
} else {
    switch ($fieldName) {
        case "login":
            if (R::count('users', 'where login = ?', array($fieldValue)) > 0) {
                $result = 'Пользователь с таким логином уже присутствует в базе данных';
            } else {
                $result = ''; 
            }
            break;
        case "email":
            if (R::count('users', 'where email = ?', array($fieldValue)) > 0) {
                $result = 'Пользователь с таким адресом электронной почты уже присутствует в базе данных';
            } else {
                $result = ''; 
            }
            break;
        case "password":
            $result = '';
            break;
        case "confirmpassword":
            $result = '';
            break;
    } 
}

echo json_encode($result);