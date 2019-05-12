<?php

require '../../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

include('../../../../src/controllers/Files_Controller.php');

$post = $_POST;

/*********************************************************************************************************/
/* Удаляем тип документа */
/*********************************************************************************************************/

$kindofdocument_id = $post['kindofdocument_id'];

$ds           = DIRECTORY_SEPARATOR; 
$store_folder = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php/images/Certificates';

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

header("Location: /Ixtlan-php/index.php");