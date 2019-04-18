<?php

require '../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post = $_POST;

/*********************************************************************************************************/
/* Удаляем котенка */
/*********************************************************************************************************/

$kitten_id = $post['kitten_id'];

if (isset($kitten_id)) { 

    if ($kitten_id != '') { 

        $kitty = R::load('kitty', $kitten_id);
        R::trash($kitty);

    }
}