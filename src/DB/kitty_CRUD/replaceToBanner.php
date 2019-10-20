<?php

require_once '../../../configDB.php';

/*********************************************************************************************************/
/* Выносим котенка в баннер */
/*********************************************************************************************************/

$json_obj = json_decode(file_get_contents('php://input'));

$modal              = $json_obj->modal;
$kitty_id           = $json_obj->kitty_id;
$banner_header      = $json_obj->banner_header;
$banner_description = $json_obj->banner_description;

if (isset($kitty_id) and isset($modal)) {

    if ($modal === 'hide') {

        $kitty = R::findOne('kitty', 'where id = ?', array($kitty_id));
        $kitty->banner = "0";

        R::store($kitty);

    } else {

        $kittens = R::findCollection('kitty');
        while ($one_kitty = $kittens->next()) {
            $one_kitty->banner = "0";
            R::store($one_kitty);
        }

        $kitty = R::findOne('kitty', 'where id = ?', array($kitty_id));

        $kitty->banner             = "1";
        $kitty->banner_header      = $banner_header;
        $kitty->banner_description = $banner_description;

        R::store($kitty);

    }

}

//header('Refresh: 3; url=http://move-ixtlan.ru/kitty.php' . $redirect);