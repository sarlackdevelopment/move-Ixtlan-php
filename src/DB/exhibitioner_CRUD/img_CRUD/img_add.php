<?php

require_once '../../../../configDB.php';

/*********************************************************************************************************/
/* Добавляем изображение в выставочную галлерею */
/*********************************************************************************************************/

$files = $_FILES;
$post  = $_POST;

$ds           = DIRECTORY_SEPARATOR; 
$store_folder = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php/images/Exhibitions/exhibition';
 
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
    $img_exhibition->path = 'images/Exhibitions/exhibition' . $exhibition_id . $ds . $file_name;

    $exhibition->ownItemList[] = $img_exhibition;
        
    R::store($exhibition);

} 

else {  

    $result  = array();
 
    $files = scandir($storeFolder);                 
    if ( false !== $files ) {
        foreach ( $files as $file ) {
            if ( '.' != $file && '..' != $file) {       
                $obj['name'] = $file;
                $obj['size'] = filesize($storeFolder.$ds.$file);
                $result[] = $obj;
            }
        }
    }
     
    header('Content-type: text/json');              
    header('Content-type: application/json');

    echo json_encode($result);
}

header("Location: /Ixtlan-php/index.php");