<?php

require_once '../../../configDB.php';

$post = $_POST;
$log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';

/*********************************************************************************************************/
/* Добавляем обычную новость */
/*********************************************************************************************************/

$caption_news = $post['caption_news'];
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

}

header("Location: /Ixtlan-php/index.php");