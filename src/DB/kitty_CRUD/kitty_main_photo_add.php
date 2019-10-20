<?php

require_once '../../../configDB.php';

$files = $_FILES;
$post  = $_POST;

/*********************************************************************************************************/
/* Добавляем главное фото */
/*********************************************************************************************************/

$kitty_id  = $post['kitty_id'];
$brood_id  = $post['brood_id'];

$ds           = DIRECTORY_SEPARATOR; 
$store_folder = $_SERVER['DOCUMENT_ROOT'] . $ds .'images' . $ds . 'cats' . $ds . 'kitty';
 
if (!empty($files)) {

    $kitty  = R::findOne('kitty', 'id = ?', array($kitty_id));
    $brood  = R::findOne('broods', 'where id = ?', array($brood_id));

    $store_folder = $store_folder . $ds . $brood['symbol'] . $ds . $kitty['name'];

    if (!file_exists($store_folder)) {
        mkdir($store_folder, 0777, true);
    }

    $file_name      = $files['file']['name'];
    $temp_file_name = $files['file']['tmp_name'];  
    $target_file    = $store_folder . $ds.  $file_name; 
 
    if (is_uploaded_file($temp_file_name)) {
        move_uploaded_file($temp_file_name, $target_file);
    }

    $kitty->main_photo = 'images' . $ds . 'cats' . $ds . 'kitty' . $ds . $brood['symbol'] . $ds . $kitty['name'] . $ds . $file_name;
        
    R::store($kitty);

}

header('Refresh: 3; url=http://move-ixtlan.ru/kitty.php' . $redirect);
//header("Location: /Ixtlan-php/kitty.php");