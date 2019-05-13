<?php

//require '../../../libs/rb/rb-mysql.php';
//R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

require_once '../../../configDB.php';

$post = $_POST;

/*********************************************************************************************************/
/* Удаляем обычную новость */
/*********************************************************************************************************/

$news_id = $post['news_id'];

if (isset($news_id)) {

    $news_table = R::load('news', $news_id);
    R::trash($news_table);

}

header("Location: /Ixtlan-php/index.php");