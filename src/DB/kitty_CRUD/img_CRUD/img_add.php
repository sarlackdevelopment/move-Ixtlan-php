<?php

require '../../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post = $_POST;

/*********************************************************************************************************/
/* Добавляем фото котенка */
/*********************************************************************************************************/

$kitty_name  = $post['kitty_name'];
$period_name = $post['period_name'];

if (isset($kitty_name) and isset($period_name)) {

    if (trim($kitty_name) != '' and trim($period_name) != '') {

        $log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';
        $info = $kitty_name . ' : ' . $period_name;
        file_put_contents($log, $info, FILE_APPEND);

        /*$news_table = R::dispense('news');

        $news_table->caption_news = $caption_news;
        $news_table->body_news    = $body_news;
        $news_table->archive      = false;

        R::store($news_table);

        $info = "Добавляем обычную новость \r\n";
        file_put_contents($log, $info, FILE_APPEND);*/
    }

}

header("Location: /Ixtlan-php/kitty.php");