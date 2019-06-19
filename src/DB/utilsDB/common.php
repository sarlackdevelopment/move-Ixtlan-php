<?php

require_once '../../../configDB.php';

$json_obj = json_decode(file_get_contents('php://input'));

$goal      = $json_obj->goal;
$tableName = $json_obj->tableName;

$result = array();

switch ($goal) {
    case 'countTable':
        $result[$goal] = R::count($tableName);
        break;
}

header('Content-Type: application/x-javascript; charset=utf8');  
echo json_encode($result);