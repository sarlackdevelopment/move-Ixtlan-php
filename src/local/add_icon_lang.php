<?php

require_once '../../configDB.php';

$files = $_FILES;
$post  = $_POST;

/*********************************************************************************************************/
/* Добавляем иконку языка */
/*********************************************************************************************************/

$lang_id  = $post['lang_id'];

$ds           = DIRECTORY_SEPARATOR; 
$store_folder = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php/images/lang';
 
if (!empty($files)) {

    $current_lang  = R::findOne('languages', 'id = ?', array($lang_id));

    if (!file_exists($store_folder)) {
        mkdir($store_folder, 0777, true);
    }

    $file_name      = $files['file']['name'];
    $temp_file_name = $files['file']['tmp_name'];  
    $target_file    = $store_folder . $ds.  $file_name; 
 
    if (is_uploaded_file($temp_file_name)) {
        move_uploaded_file($temp_file_name, $target_file);
    }

    $current_lang->icon_path = 'images/lang/' . $file_name;
        
    R::store($current_lang);

}