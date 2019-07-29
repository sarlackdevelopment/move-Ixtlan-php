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

    if ($tableName == 'catsadult') {
        $data = R::findCollection($tableName, 'where gender = ?', array($json_obj->params));
        while ($pice_of_data = $data->next()) {
            $result[] = array('id' => $pice_of_data['id']);
        }
    } else if ($tableName == 'imgkitty') {
        $data = R::findCollection($tableName, 'group by kitty_id, periods_id');
        while ($pice_of_data = $data->next()) {
            $result[] = array(
                'kitty_id' => $pice_of_data['kitty_id'],
                'periods_id' => $pice_of_data['periods_id']
            );
        }
    } else if ($tableName == 'kitty') {
        $data = R::findCollection($tableName);
        while ($pice_of_data = $data->next()) {
            $result[] = array(
                'kitty_id' => $pice_of_data['id'],
                'brood_id' => $pice_of_data['broods_id']
            );
        }
    } else {
        $data = R::findCollection($tableName);
        while ($pice_of_data = $data->next()) {
            $result[] = array('id' => $pice_of_data['id']);
        }
    }

}
  
echo json_encode($result);