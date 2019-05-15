<?php

require_once '../../../configDB.php';

$post = $_POST;
$log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';

/*********************************************************************************************************/
/* Редактируем обычную новость */
/*********************************************************************************************************/

$news_id      = $post['news_id'];
$news_body    = $post['news_body'];
$news_caption = $post['news_caption'];

if (isset($news_id)) {

    $news = R::findOne('news', 'where id = ?', array($news_id));
    
    if ($news) {
    
        if (isset($news_body) and ($news->body_news != $news_body)) {
            $news->body_news = $news_body;   
        }
    
        if (isset($news_caption) and ($news->caption_news != $news_caption)) {
            $news->caption_news = $news_caption;   
        }
    
        R::store($news); 
    
    }
    
}

header("Location: /Ixtlan-php/index.php");