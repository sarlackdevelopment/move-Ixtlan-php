<?php

require_once '../../../configDB.php';
require_once '../../local/utils.php';
require_once '../../utils.php';

if ( Utils::is_session_started() === FALSE ) session_start();

$post = $_POST;

/*********************************************************************************************************/
/* Добавляем котенка */
/*********************************************************************************************************/

$name_of_kitty     = $post['name_of_kitty'];
$short_descryption = $post['short_descryption'];
$long_descryption  = $post['long_descryption'];
$brood_id          = $post['brood_id'];

if (isset($name_of_kitty) and isset($short_descryption) and isset($long_descryption) and isset($brood_id)) {

    if ($name_of_kitty != '' and $short_descryption != '' and $long_descryption != '' and $brood_id != '') {

        $kitty = R::dispense('kitty');

        $kitty->name              = $name_of_kitty;
        $kitty->short_descryption = $short_descryption;
        $kitty->state_descryption = 'Свободен для бронирования';
        $kitty->long_descryption  = $long_descryption;
        $kitty->banner            = '0';
        $kitty->_local            = UtilsLocal::currentLanguage()['short_caption'];        

        R::store($kitty);

        $state = R::findOne('states', 'where name = ?', array('Свободен'));
        $state->ownKittyList[] = $kitty;
        R::store($state);

        $broods = R::findOne('broods', 'where id = ?', array($brood_id));
        $broods->ownKittyList[] = $kitty;
        R::store($broods);

    }
}

header('Refresh: 3; url=http://move-ixtlan.ru/kitty.php' . $redirect);
//header("Location: /Ixtlan-php/kitty.php");