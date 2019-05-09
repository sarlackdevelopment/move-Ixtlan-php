<?php

require '../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post = $_POST;
//$log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';

/*********************************************************************************************************/
/* Удаляем обычную новость */
/*********************************************************************************************************/

$news_id = $post['news_id'];

if (isset($news_id)) {

    $news_table = R::load('news', $news_id);
    R::trash($news_table);

    //$info = "Удаляем обычную новость \r\n";
    //file_put_contents($log, $info, FILE_APPEND);

}

header("Location: /Ixtlan-php/index.php");