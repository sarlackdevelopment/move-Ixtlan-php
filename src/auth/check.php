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
            $result = '';
            break;
        case "email":
            $result = 'Пользователь с такой электронной почтой уже присутствует';
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