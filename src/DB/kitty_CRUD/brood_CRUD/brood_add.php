<?php

//require '../../../../libs/rb/rb-mysql.php';
//R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

require_once '../../../../configDB.php';

$post = $_POST;

/*********************************************************************************************************/
/* Добавляем помет */
/*********************************************************************************************************/

$name_of_brood = $post['name_of_brood'];

if (isset($name_of_brood)) {
    if ($name_of_brood != '') {

        $brood = R::dispense('broods');

        $brood->name    = sprintf("Помет \"%s\"", $name_of_brood);
        $brood->hash    = sprintf("v-pills-headingBrood_%s", $name_of_brood);
        $brood->symbol  = $name_of_brood;
        $brood->archive = false;

        R::store($brood);

    }
}

header("Location: /Ixtlan-php/kitty.php");