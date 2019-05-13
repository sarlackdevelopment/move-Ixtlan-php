<?php

//require '../../../../libs/rb/rb-mysql.php';
//R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

require_once '../../../../configDB.php';

$post  = $_POST;
$files = $_FILES;

/*********************************************************************************************************/
/* Добавляем общее фото */
/*********************************************************************************************************/

$ds           = DIRECTORY_SEPARATOR; 
$store_folder = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php/images/cats/kitty/common';

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
    $img_common->path = 'images/cats/kitty/common' . $ds . $file_name;

    R::store($img_common);

}

header("Location: /Ixtlan-php/kitty.php");