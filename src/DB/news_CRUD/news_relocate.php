<?php

//require '../../../libs/rb/rb-mysql.php';
//R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

require_once '../../../configDB.php';

$post = $_POST;
//$log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';

/*********************************************************************************************************/
/* Перемещаем новость в архив (либо возврщаем из архива) */
/*********************************************************************************************************/

$news_id = $post['news_id'];

$in_archive = isset($post['in_archive']);
$in_main    = isset($post['in_main']);

if (isset($news_id)) {

    if ($in_archive or $in_main) {

        //$news_table = R::load('news', $news_id);
        $news_table = R::findOne('news', 'where id = ?', array($news_id));

        if ($in_archive) {      
            $news_table->archive = true;     
        }
        if ($in_main) {      
            $news_table->archive = false;     
        }

        R::store($news_table);

        //$info = "Перемещаем новость в архив (либо из архива) \r\n";
        //file_put_contents($log, $info, FILE_APPEND);
    }

}

header("Location: /Ixtlan-php/index.php");