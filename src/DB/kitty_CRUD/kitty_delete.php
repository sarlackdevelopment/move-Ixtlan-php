<?php

require '../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post = $_POST;

/*********************************************************************************************************/
/* Удаляем котенка */
/*********************************************************************************************************/

$kitten_id = $post['kitten_id'];

$log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';
$info = $kitten_id;
file_put_contents($log, $info, FILE_APPEND);

if (isset($kitty_id)) { 

    if ($name_of_kitty != '') { 

        //$kitty = R::load('kitty', $kitten_id);  Сегодня начинать здесь!!!
        //R::trash($kitty);

    }
}

//header("Location: /Ixtlan-php/kitty.php");