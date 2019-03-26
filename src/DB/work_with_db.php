<?php

require '../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post = $_POST;

/*********************************************************************************************************/
/* Работа с новостями. Добавляем обычную и срочные новости. Переносим новости в архив */
/*********************************************************************************************************/

/* Добавляем обычную новость */

$caption_news = $post['caption_news'];
$body_news    = $post['body_news'];

if (isset($caption_news) and isset($body_news)) {

    $news_table = R::dispense('news');

    $news_table->caption_news = $caption_news;
    $news_table->body_news    = $body_news;
    $news_table->archive      = false;

    R::store($news_table);

}

header("Location: /Ixtlan-php/index.php");