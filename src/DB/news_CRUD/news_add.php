<?php

require_once '../../../configDB.php';
require_once '../../local/utils.php';

require_once '../../utils.php';

if ( Utils::is_session_started() === FALSE ) session_start();

$post = $_POST;

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
        $news_table->_local       = UtilsLocal::currentLanguage()['short_caption'];

        R::store($news_table);

    }

}

header("Location: /Ixtlan-php/index.php");