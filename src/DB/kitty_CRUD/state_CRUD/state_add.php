<?php

require '../../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post = $_POST;

/*********************************************************************************************************/
/* Добавляем состояние */
/*********************************************************************************************************/

$name_of_state   = $post['name_of_state'];
$color_of_button = $post['color_of_button'];

if (isset($name_of_state) and isset($color_of_button)) {
    if ($name_of_state != '' and $color_of_button != '') {


        /*$brood  = R::findOne('broods', 'where id = ?', array($brood_id));
        $img_kitty = R::dispense('imgkitty');
        $brood->ownItemList[] = $img_kitty;
        R::store($brood);*/



        $states = R::dispense('states');

        $states->name = $name_of_state;
        $states->color = $color_of_button;

        R::store($states);

    }
}

header("Location: /Ixtlan-php/kitty.php");