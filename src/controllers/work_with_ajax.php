<?php

require '../DB/Connector.php';

$post = $_POST;

if (isset($post['caption_news']) and (isset($post['body_news']))) {

    $news_table = R::dispense('news');

    $news_table->caption_news = $post['caption_news'];
    $news_table->body_news    = $post['body_news'];
    $news_table->archive      = false;

    R::store($news_table);

}

header("Location: /Ixtlan-php/index.php");