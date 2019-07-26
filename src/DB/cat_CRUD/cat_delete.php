<?php

require_once '../../../configDB.php';

include('../../../src/controllers/Files_Controller.php');

/*********************************************************************************************************/
/* Удаляем (ну вдруг неправильно добавили...) */
/*********************************************************************************************************/

$json_obj = json_decode(file_get_contents('php://input'));

$catsadult_id = $json_obj->id;

if (isset($catsadult_id)) {

    $ds           = DIRECTORY_SEPARATOR; 
    $store_folder = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php/images/cats';

    $imgcatsadult = R::findCollection('imgcatsadult', 'catsadult_id = ?', array($catsadult_id));
    while ($img_catsadult = $imgcatsadult->next()) {
        R::trash($img_catsadult);
    }

    $catsadult = R::findOne('catsadult', 'where id = ?', array($catsadult_id));
    $store_folder = $store_folder . $ds . $catsadult['gender'] . $ds . $catsadult_id;
    R::trash($catsadult);

    if (file_exists($store_folder)) {
        $files_controller = new Files_Controller();
        $files_controller->recursiveRemoveDir($store_folder);
    }

}