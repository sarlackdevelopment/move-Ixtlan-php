<?php

require '../../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

include('../../../../src/controllers/Files_Controller.php');

$post = $_POST;

$ds           = DIRECTORY_SEPARATOR; 
$store_folder = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php/images/Exhibitions/exhibition';

/*********************************************************************************************************/
/* Удаляем выставку */
/*********************************************************************************************************/

$exhibition_id = $post['exhibition_id'];

if (isset($exhibition_id)) {

    $imgexhibitions = R::findCollection('imgexhibitions', 'exhibitions_id = ?', array($exhibition_id));
    while ($img_exhibition = $imgexhibitions->next()) {
        R::trash($img_exhibition);
    }

    $exhibitions_table = R::load('exhibitions', $exhibition_id);
    R::trash($exhibitions_table);

    $store_folder  = $store_folder . $exhibition_id;

    if (file_exists($store_folder)) {
        $files_controller = new Files_Controller();
        $files_controller->recursiveRemoveDir($store_folder);
    }

}

header("Location: /Ixtlan-php/index.php");