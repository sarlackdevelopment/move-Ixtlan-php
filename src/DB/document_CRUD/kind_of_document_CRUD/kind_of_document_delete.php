<?php

require_once '../../../../configDB.php';

include('../../../../src/controllers/Files_Controller.php');

/*********************************************************************************************************/
/* Удаляем тип документа */
/*********************************************************************************************************/

$json_obj = json_decode(file_get_contents('php://input'));

$kindofdocument_id = $json_obj->id;

$ds           = DIRECTORY_SEPARATOR; 
$store_folder = $_SERVER['DOCUMENT_ROOT'] . $ds . 'images' . $ds . 'Certificates';

if (isset($kindofdocument_id)) {

    $imgkindofdocument = R::findCollection('imgkindofdocument', 'kindofdocuments_id = ?', array($kindofdocument_id));
    while ($img_exhibition = $imgkindofdocument->next()) {
        R::trash($img_exhibition);
    }

    $kindofdocuments = R::load('kindofdocuments', $kindofdocument_id);
    R::trash($kindofdocuments);

    $store_folder  = $store_folder . $ds . $kindofdocument_id;

    if (file_exists($store_folder)) {
        $files_controller = new Files_Controller();
        $files_controller->recursiveRemoveDir($store_folder);
    }

}