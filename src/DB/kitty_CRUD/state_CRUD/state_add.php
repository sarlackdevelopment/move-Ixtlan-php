<?php

require_once '../../../../configDB.php';

$post = $_POST;

/*********************************************************************************************************/
/* Добавляем состояние */
/*********************************************************************************************************/

$name_of_state   = $post['name_of_state'];
$color_of_button = $post['color_of_button'];

if (isset($name_of_state) and isset($color_of_button)) {
    if ($name_of_state != '' and $color_of_button != '') {

        $states = R::dispense('states');

        $states->name  = $name_of_state;
        $states->color = $color_of_button;

        R::store($states);

    }
}

header("Location: /Ixtlan-php/kitty.php");