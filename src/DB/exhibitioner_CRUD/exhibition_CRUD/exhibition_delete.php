<?php

require_once '../../../../configDB.php';

include('../../../../src/controllers/Files_Controller.php');

//$post = $_POST;
$json_obj = json_decode(file_get_contents('php://input'));

$exhibition_id = $json_obj->id;

$log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';
$info = $exhibition_id;
file_put_contents($log, $info, FILE_APPEND);

/*********************************************************************************************************/
/* Удаляем выставку */
/*********************************************************************************************************/

//$exhibition_id = $post['id'];

if (isset($exhibition_id)) {

    $ds           = DIRECTORY_SEPARATOR; 
    $store_folder = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php/images/Exhibitions/exhibition';

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

//header("Location: /Ixtlan-php/index.php");