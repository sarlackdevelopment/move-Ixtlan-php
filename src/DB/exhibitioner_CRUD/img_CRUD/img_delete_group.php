<?php

require_once '../../../../configDB.php';

/*********************************************************************************************************/
/* Удаляем выбранные изображения из выставочной галлереи */
/*********************************************************************************************************/

// DRY - нужно перенести в утилиты. Удаление изображений.

$json_obj = json_decode(file_get_contents('php://input'));

$checks     = $json_obj->checks;
$table_name = $json_obj->table_name;

if (!empty($checks) and (!empty($table_name))) {

    $ds           = DIRECTORY_SEPARATOR; 
    //$store_folder = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php';

    $imgs = R::findCollection($table_name, 'id in (' . implode(',', $checks) . ')');
    while ($img = $imgs->next()) {
        //unlink($store_folder . $ds . $img['path']);
        unlink($_SERVER['DOCUMENT_ROOT'] . $ds . $img['path']);
        R::trash($img);
    }

}