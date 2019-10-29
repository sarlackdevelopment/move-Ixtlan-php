<?php

require_once '../../../../configDB.php';
require_once '../../../../main_config.php';

include('../../../../src/controllers/Files_Controller.php');

$json_obj = json_decode(file_get_contents('php://input'));

$exhibition_id = $json_obj->id;

/*********************************************************************************************************/
/* Удаляем выставку */
/*********************************************************************************************************/

if (isset($exhibition_id)) {

    $ds           = DIRECTORY_SEPARATOR; 
    $store_folder = MainConfig::root_store() . $ds . 'images' . $ds . 'Exhibitions' . $ds . 'exhibition';

    $imgexhibitions = R::findCollection('imgexhibitions', 'exhibitions_id = ?', array($exhibition_id));
    while ($img_exhibition = $imgexhibitions->next()) {
        R::trash($img_exhibition);
    }

    $exhibitions_table = R::findOne('exhibitions', 'where id = ?', array($exhibition_id));
    R::trash($exhibitions_table);

    $store_folder  = $store_folder . $exhibition_id;

    if (file_exists($store_folder)) {
        $files_controller = new Files_Controller();
        $files_controller->recursiveRemoveDir($store_folder);
    }

}