<?php

require_once '../../../../configDB.php';

$post = $_POST;

/*********************************************************************************************************/
/* Добавляем помет */
/*********************************************************************************************************/

$name_of_brood = $post['name_of_brood'];

if (isset($name_of_brood)) {
    if ($name_of_brood != '') {

        // TODO убрать дублирующиеся колонки name и symbol
        $brood = R::dispense('broods');

        $brood->name    = $name_of_brood;
        $brood->hash    = sprintf("v-pills-headingBrood_%s", $name_of_brood);
        $brood->symbol  = $name_of_brood;
        $brood->archive = false;

        R::store($brood);

    }
}

header("Location: /Ixtlan-php/kitty.php");