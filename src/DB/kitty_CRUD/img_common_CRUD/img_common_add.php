<?php

require_once '../../../../configDB.php';

$post  = $_POST;
$files = $_FILES;

/*********************************************************************************************************/
/* Добавляем общее фото */
/*********************************************************************************************************/

$ds           = DIRECTORY_SEPARATOR; 
$store_folder = $_SERVER['DOCUMENT_ROOT'] . $ds . 'images' . $ds . 'cats' . $ds . 'kitty' . $ds . 'common';

if (!empty($files)) {

    if (!file_exists($store_folder)) {
        mkdir($store_folder, 0777, true);
    }

    $file_name      = $files['file']['name'];
    $temp_file_name = $files['file']['tmp_name'];  
    $target_file    = $store_folder . $ds.  $file_name;

    if (is_uploaded_file($temp_file_name)) {
        move_uploaded_file($temp_file_name, $target_file);
    }

    $img_common = R::dispense('imgcommon');

    $img_common->name = $file_name;
    $img_common->path = 'images' . $ds . 'cats' . $ds . 'kitty' . $ds . 'common' . $ds . $file_name;

    R::store($img_common);

}

header('Refresh: 3; url=http://move-ixtlan.ru/kitty.php' . $redirect);
//header("Location: /Ixtlan-php/kitty.php");