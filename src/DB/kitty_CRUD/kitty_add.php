<?php

require '../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post = $_POST;

/*********************************************************************************************************/
/* Добавляем котенка */
/*********************************************************************************************************/

$name_of_kitty     = $post['name_of_kitty'];
$short_descryption = $post['short_descryption'];
$long_descryption  = $post['long_descryption'];

//$log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';
//$info = $state_id;
//file_put_contents($log, $info, FILE_APPEND);

if (isset($name_of_kitty) and isset($short_descryption) and isset($long_descryption)) {

    if ($name_of_kitty != '' and $short_descryption != '' and $long_descryption != '') {

        $kitty = R::dispense('kitty');

        $state = R::findOne('states', 'where name = ?', array('Свободен'));

        $kitty->name              = $name_of_kitty;
        $kitty->short_descryption = $short_descryption;
        $kitty->state             = $state['name'];
        $kitty->state_descryption = 'Свободен для бронирования';
        $kitty->long_descryption  = $long_descryption;

        R::store($kitty);

    }
}

header("Location: /Ixtlan-php/kitty.php");