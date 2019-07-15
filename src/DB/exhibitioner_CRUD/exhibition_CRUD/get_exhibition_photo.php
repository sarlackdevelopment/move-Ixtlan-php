<?php

require_once '../../../../configDB.php';

/*********************************************************************************************************/
/* Получаем список id заданной таблицы */
/*********************************************************************************************************/

$result = [];

$json_obj = json_decode(file_get_contents('php://input'));
$tableName = $json_obj->tableName;

if (isset($tableName)) {

    if ($tableName != '') {

        $data = R::findCollection($tableName);

        while ($pice_of_data = $data->next()) {
            $result[] = array('id' => $pice_of_data['id']);   
        }
    
    }

}

header('Content-Type: application/x-javascript; charset=utf8');  
echo json_encode($result);