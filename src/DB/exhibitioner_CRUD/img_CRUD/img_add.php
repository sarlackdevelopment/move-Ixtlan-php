<?php

require '../../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$log  = $_SERVER['DOCUMENT_ROOT']. '/Ixtlan-php/debug.txt';

/*********************************************************************************************************/
/* Добавляем изображение в выставочную галлерею */
/*********************************************************************************************************/

/*$caption_news = $post['caption_news'];
$body_news    = $post['body_news'];

if (isset($caption_news) and isset($body_news)) {

    if (trim($caption_news) != '' and trim($body_news) != '') {
        $news_table = R::dispense('news');

        $news_table->caption_news = $caption_news;
        $news_table->body_news    = $body_news;
        $news_table->archive      = false;

        R::store($news_table);

        $info = "Добавляем обычную новость \r\n";
        file_put_contents($log, $info, FILE_APPEND);
    }

} */

$post  = $_POST;
$files = $_FILES;

$ds          = DIRECTORY_SEPARATOR; 
$storeFolder = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php/tmp';

//file_put_contents($log, '$ds=' . $ds . ';', FILE_APPEND);
//file_put_contents($log, '$storeFolder=' . $storeFolder . ';', FILE_APPEND);
 
if (!empty($files)) {

    $tempFile = $files['file']['tmp_name'];  
    
    //file_put_contents($log, '$tempFile=' . $tempFile . ';', FILE_APPEND);
 
    //$targetPath = dirname( __FILE__ ) . $ds. $storeFolder . $ds; 

    //file_put_contents($log, '$ds=' . $targetPath . ';', FILE_APPEND);
 
    $targetFile =  $storeFolder . $ds.  $_FILES['file']['name']; 

    //file_put_contents($log, '$targetFile=' . $targetFile . ';', FILE_APPEND);
 
    move_uploaded_file($tempFile, $targetFile);

}

//$info = count($files['image']['name']) . " \r\n";

/* << file_put_contents($log, "Здесь 1", FILE_APPEND);
           
if (!empty($files)) {

    file_put_contents($log, "Здесь 2", FILE_APPEND);

    for ($i = 0; $i < count($files['image']['name']); $i++) {

        file_put_contents($log, "Здесь 3", FILE_APPEND);

        if (is_uploaded_file($files['image']['tmp_name'][$i])) {

            $commonpath = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php/tmp';
            $path       = $commonpath . '/' . $files['image']['name'][$i];

            //file_put_contents($log, $_SERVER['DOCUMENT_ROOT'], FILE_APPEND);
            file_put_contents($log, $commonpath . '\r\n', FILE_APPEND);
            file_put_contents($log, $path . '\r\n', FILE_APPEND);
            //file_put_contents($log, $files['image']['tmp_name'][$i], FILE_APPEND);

            move_uploaded_file($files['image']['tmp_name'][$i], $path);

            //mkdir($commonpath . '/temp1', 0777, true);

        }
        //$path       = $commonpath . '/' . $files['image']['name'][$i];
        //move_uploaded_file($files['image']['tmp_name'][$i], $path);
        //file_put_contents($log, $files['image']['tmp_name'][0], FILE_APPEND);
        //if (!file_exists($commonpath)) {
        //    mkdir($commonpath, 0777, true);
        //}  

    }

    //$info = count($files['image']['name']);
    //file_put_contents($log, $info, FILE_APPEND);

    //addFilesIntoDB($files);
    //print'<meta http-equiv="refresh" content="0;AdminPanel.php">';    
} >> */

function addFilesIntoDB($files) {

    $info = count($files['image']['name']);
    file_put_contents($log, $info, FILE_APPEND);
            
    //for ($i = 0; $i < count($files['image']['name']); $i++) {

        //$i = 1;
        $info = "2 \r\n";
        file_put_contents($log, "выдораыолвралоыдварлыва", FILE_APPEND);

        /*if (is_uploaded_file($files['image']['tmp_name'][$i])) {
            
            $info = "3 \r\n";
            file_put_contents($log, $info, FILE_APPEND);

            $commonpath = $_SERVER['DOCUMENT_ROOT'] . '/tmp';
    
            if (!file_exists($commonpath)) {

                $info = "4 \r\n";
                file_put_contents($log, $info, FILE_APPEND);

                mkdir($commonpath, 0700, true);        
            }

            $path = $commonpath . '/' . $files['image']['name'][$i];  
            move_uploaded_file($files['image']['tmp_name'][$i], $path);
            //addImageIn($path);
                
        }*/
    //}
        
}

/*function getPathForCategory() {
            
    //$parameters = $_POST;           
    if (isset($parameters['nameCategory'])) {
        
        $nameCategory = $parameters['nameCategory'];
        //$commonpath = 'images/Галлерея/'. $nameCategory;
        $commonpath = $_SERVER['DOCUMENT_ROOT'] . '/tmp';
    
        if (!file_exists($commonpath)){
            mkdir($commonpath, 0700, true);        
        }
    
        return $commonpath;
    
    }
    
}

function addImageIn($path) {
    
    $parameters = $_POST;
    if (isset($parameters['nameCategory'])) {
        $imgInfo = ['path'     => $path,
                    'location' => $parameters['nameCategory'],
                    'width'    => '255',
                    'height'   => '322',
                    'alt'      => 'Изображение отсутсвует'];
            
        addRelationIMG_Category($imgInfo);
        
    }
}*/

header("Location: /Ixtlan-php/index.php");