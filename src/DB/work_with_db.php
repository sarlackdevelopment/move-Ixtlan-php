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

/* Удаляем обычную новость */

$form_id = $post['form_id'];

$is_delete = isset($post['delete']);

if (isset($form_id)) {

    if ($is_delete) {
        $news_table = R::load('news', $form_id);
        R::trash($news_table);
    }

}

/* Перемещаем новость в архив */

$in_archive = isset($post['in_archive']);
$in_main    = isset($post['in_main']);

if (isset($form_id)) {

    if ($in_archive or $in_main) {

        $news_table = R::load('news', $form_id);

        if ($in_archive) {      
            $news_table->archive = true;     
        }
        if ($in_main) {      
            $news_table->archive = false;     
        }

        R::store($news_table);
    }

}

header("Location: /Ixtlan-php/index.php");