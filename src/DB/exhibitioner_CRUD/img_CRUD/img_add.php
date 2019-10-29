<?php

require_once '../../../../configDB.php';
require_once '../../../../main_config.php';

/*********************************************************************************************************/
/* Добавляем изображение в выставочную галлерею */
/*********************************************************************************************************/

$files = $_FILES;
$post  = $_POST;

$ds           = DIRECTORY_SEPARATOR; 
$store_folder = MainConfig::root_store() . $ds . 'images' . $ds . 'Exhibitions' . $ds . 'exhibition';
 
if (!empty($files)) {

    $exhibition_id = $post["exhibition_id"];
    $store_folder  = $store_folder . $exhibition_id;

    if (!file_exists($store_folder)) {
        mkdir($store_folder, 0777, true);
    }

    $file_name      = $files['file']['name'];
    $temp_file_name = $files['file']['tmp_name'];  
    $target_file    = $store_folder . $ds.  $file_name; 
 
    if (is_uploaded_file($temp_file_name)) {
        move_uploaded_file($temp_file_name, $target_file);
    }

    $exhibition = R::findOne('exhibitions', 'id = ?', array($exhibition_id));

    $img_exhibition = R::dispense('imgexhibitions');

    $img_exhibition->name = $file_name;
    $img_exhibition->path = 'images' . $ds . 'Exhibitions' . $ds . 'exhibition' . $exhibition_id . $ds . $file_name;

    $exhibition->ownItemList[] = $img_exhibition;
        
    R::store($exhibition);

}

MainConfig::root_redirect(
    array(
        'prom_path' => '', 
        'dev_path' => '/Ixtlan-php/index.php'
    )
);