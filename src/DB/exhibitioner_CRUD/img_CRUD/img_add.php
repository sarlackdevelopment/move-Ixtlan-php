<?php

require '../../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$log  = $_SERVER['DOCUMENT_ROOT']. '/Ixtlan-php/debug.txt';
//file_put_contents($log, '$ds=' . $ds . ';', FILE_APPEND);

/*********************************************************************************************************/
/* Добавляем изображение в выставочную галлерею */
/*********************************************************************************************************/

$post  = $_POST;
$files = $_FILES;

$ds          = DIRECTORY_SEPARATOR; 
$storeFolder = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php/tmp';
 
if (!empty($files)) {

    $tempFile   = $files['file']['tmp_name'];  
    $targetFile =  $storeFolder . $ds.  $_FILES['file']['name']; 
 
    move_uploaded_file($tempFile, $targetFile);

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