<?php

require '../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post = $_POST;
$log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';

/*********************************************************************************************************/
/* Удаляем обычную новость */
/*********************************************************************************************************/

$form_id = $post['form_id'];

if (isset($form_id)) {

    $news_table = R::load('news', $form_id);
    R::trash($news_table);

    $info = "Удаляем обычную новость \r\n";
    file_put_contents($log, $info, FILE_APPEND);

}

header("Location: /Ixtlan-php/index.php");