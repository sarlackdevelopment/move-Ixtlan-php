<?php

require '../../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post = $_POST;
$log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';

/*********************************************************************************************************/
/* Удаляем выставку */
/*********************************************************************************************************/

$form_id = $post['form_id'];

if (isset($form_id)) {

    $exhibitions_table = R::load('exhibitions', $form_id);
    R::trash($exhibitions_table);

    $info = "Удаляем выставку \r\n";
    file_put_contents($log, $info, FILE_APPEND);

}

header("Location: /Ixtlan-php/index.php");