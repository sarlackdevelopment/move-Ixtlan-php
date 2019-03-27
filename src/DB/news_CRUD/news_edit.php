<?php

require '../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post = $_POST;
$log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';

/*********************************************************************************************************/
/* Редактируем обычную новость */
/*********************************************************************************************************/

$form_id   = $post['form_id'];
$news_body = $post['news_body'];

if (isset($form_id)) {

    if (isset($news_body)) { 

        $news_table = R::load('news', $form_id);
        $news_table->body_news = $news_body;
        R::store($news_table);

        $info = "Редактируем новость \r\n";
        file_put_contents($log, $info, FILE_APPEND);
    
    }

}

header("Location: /Ixtlan-php/index.php");