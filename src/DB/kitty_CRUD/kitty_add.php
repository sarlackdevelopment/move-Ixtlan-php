<?php

require '../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post = $_POST;

/*********************************************************************************************************/
/* Добавляем котенка */
/*********************************************************************************************************/

$name_of_kitty = $post['name_of_kitty'];

$log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';
$info = $name_of_kitty;
file_put_contents($log, $info, FILE_APPEND);

if (isset($name_of_kitty)) {
    if ($name_of_kitty != '') {

        $kitty = R::dispense('kitty');
        $kitty->name = $name_of_kitty;
        R::store($kitty);

    }
}

header("Location: /Ixtlan-php/kitty.php");