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

        $suffix = UtilsLocal::currentLanguage()['short_caption'];
        //$col_caption_news = 'caption_news_' . $suffix;
        //$col_body_news    = 'body_news_' . $suffix;

        $news_table = R::dispense('news');

        /* R::ext('xdispense', function($table_name){
            return R::getRedBean()->dispense($table_name);
        });

        $news_table = R::xdispense('news-' . $suffix); */

        $news_table->col_caption_news = $caption_news;
        $news_table->col_body_news    = $body_news;
        $news_table->archive           = false;

        R::store($news_table);

    }

}

header("Location: /Ixtlan-php/index.php");