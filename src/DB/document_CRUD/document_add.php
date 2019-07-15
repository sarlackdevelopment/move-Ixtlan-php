<?php

require_once '../../../configDB.php';

/*********************************************************************************************************/
/* Добавляем изображение в тип документов */
/*********************************************************************************************************/

$files = $_FILES;
$post  = $_POST;

$ds           = DIRECTORY_SEPARATOR; 
$store_folder = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php/images/Certificates/';
 
if (!empty($files)) {

    $kindofdocuments_id = $post["kindofdocuments_id"];
    $store_folder       = $store_folder . $kindofdocuments_id;

    if (!file_exists($store_folder)) {
        mkdir($store_folder, 0777, true);
    }

    $file_name      = $files['file']['name'];
    $temp_file_name = $files['file']['tmp_name'];  
    $target_file    = $store_folder . $ds.  $file_name; 
 
    if (is_uploaded_file($temp_file_name)) {
        move_uploaded_file($temp_file_name, $target_file);
    }

    $kindofdocument = R::findOne('kindofdocuments', 'id = ?', array($kindofdocuments_id));

    $img_kindofdocument = R::dispense('imgkindofdocument');

    $img_kindofdocument->name = $file_name;
    $img_kindofdocument->path = 'images/Certificates/' . $kindofdocuments_id . $ds . $file_name;

    $kindofdocument->ownItemList[] = $img_kindofdocument;
        
    R::store($kindofdocument);

} 

/* else {  

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
} */

header("Location: /Ixtlan-php/index.php");