<?php

//require '../../../libs/rb/rb-mysql.php';
//R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

require_once '../../../configDB.php';

$post = $_POST;

/*********************************************************************************************************/
/* Добавляем взрослого кота */
/*********************************************************************************************************/

$short_descryption = $post['short_descryption'];
$long_descryption  = $post['long_descryption'];
$name              = $post['name'];
$gender            = $post['gender'];
$redirect          = $post['redirect'];

if (isset($short_descryption) and isset($long_descryption) 
    and isset($name) and isset($gender)) {

    if (trim($short_descryption) != '' and trim($long_descryption) != ''
        and trim($name) != '' and trim($gender) != '') {

        $catsadult = R::dispense('catsadult');

        $catsadult->short_descryption = $short_descryption;
        $catsadult->long_descryption  = $long_descryption;
        $catsadult->name              = $name;
        $catsadult->gender            = $gender;

        R::store($catsadult);

    }

}

header("Location: /Ixtlan-php/" . $redirect);