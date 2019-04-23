<?php

require '../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post = $_POST;

$ds           = DIRECTORY_SEPARATOR; 
$store_folder = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php';

/*********************************************************************************************************/
/* Удаляем котенка */
/*********************************************************************************************************/

$kitten_id = $post['kitten_id'];

if (isset($kitten_id)) { 

    if ($kitten_id != '') { 

        $kitty = R::findOne('kitty', 'where id = ?', array($kitten_id));
        R::trash($kitty);

        unlink($store_folder . $ds . $kitty['main_photo']);

    }
}