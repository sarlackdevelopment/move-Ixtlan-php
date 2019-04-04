<?php

require '../../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$log  = $_SERVER['DOCUMENT_ROOT']. '/Ixtlan-php/debug.txt';

/*********************************************************************************************************/
/* Привязываем изображение к галлерее */
/*********************************************************************************************************/

$post  = $_POST;

$form_id           = $post['form_id'];
$short_descryption = $post['short_descryption'];
$long_descryption  = $post['long_descryption'];

if (isset($form_id)) {

    $exhibition = R::load('exhibitions', $form_id);
    $imgs       = R::findCollection('imgexhibitions');

    while ($img = $imgs->next()) {
        $exhibition->ownItemList[] = $img;
    }

}

header("Location: /Ixtlan-php/index.php");