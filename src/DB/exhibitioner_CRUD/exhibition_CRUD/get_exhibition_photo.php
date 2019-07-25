<?php

require_once '../../../../configDB.php';

/*********************************************************************************************************/
/* Получаем список id заданной таблицы */
/*********************************************************************************************************/

//-DRY Перенести в утилиты

$result = [];

$json_obj = json_decode(file_get_contents('php://input'));
$tableName = $json_obj->tableName;

if (isset($tableName)) {

    if ($tableName != '') {

        if ($tableName == 'catsadult') {
            $data = R::findCollection($tableName, 'where gender = ?', array($json_obj->params));
        } else {
            $data = R::findCollection($tableName);
        }

        while ($pice_of_data = $data->next()) {
            $result[] = array('id' => $pice_of_data['id']);   
        }
    
    }

}
  
echo json_encode($result);