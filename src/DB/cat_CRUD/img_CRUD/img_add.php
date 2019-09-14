<?php

require_once '../../../../configDB.php';

/*********************************************************************************************************/
/* Добавляем изображение кошки или кота */
/*********************************************************************************************************/

$files = $_FILES;
$post  = $_POST;

$ds           = DIRECTORY_SEPARATOR; 
$store_folder = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php/images/cats/';
 
if (!empty($files)) {

    $catsadult_id = $post["catsadult_id"];

    $catsadult    = R::findOne('catsadult', 'id = ?', array($catsadult_id));
    $store_folder = $store_folder . $catsadult['gender'] . $ds . $catsadult_id;

    if (!file_exists($store_folder)) {
        mkdir($store_folder, 0777, true);
    }

    $file_name      = $files['file']['name'];
    $temp_file_name = $files['file']['tmp_name'];  
    $target_file    = $store_folder . $ds.  $file_name; 
 
    if (is_uploaded_file($temp_file_name)) {
        move_uploaded_file($temp_file_name, $target_file);
    }

    $catsadult = R::findOne('catsadult', 'id = ?', array($catsadult_id));

    $img_catsadult = R::dispense('imgcatsadult');

    $img_catsadult->name = $file_name;
    $img_catsadult->path = 'images/cats/' . $catsadult['gender'] . $ds . $catsadult_id . $ds . $file_name;

    $catsadult->ownItemList[] = $img_catsadult;
        
    R::store($catsadult);

}

header("Location: /Ixtlan-php/cats_females.php");