<?php

require_once '../../../configDB.php';
require_once '../../local/utils.php';
require_once '../../utils.php';
require_once '../../../main_config.php';

if ( Utils::is_session_started() === FALSE ) session_start();

/*********************************************************************************************************/
/* Выносим котенка в баннер */
/*********************************************************************************************************/

$json_obj = json_decode(file_get_contents('php://input'));

$modal              = $json_obj->modal;
$kitty_id           = $json_obj->kitty_id;
$banner_header      = $json_obj->banner_header;
$banner_description = $json_obj->banner_description;

if (isset($kitty_id) and isset($modal)) {

    $local = UtilsLocal::currentLanguage()['short_caption'];

    if ($modal === 'hide') {

        $kitty = R::findOne('kitty', 'where id = ? and _local = ?', array($kitty_id, $local));
        $kitty->banner = "0";

        R::store($kitty);

    } else {

        $kittens = R::findCollection('kitty', 'where _local = ?', array($local));
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

MainConfig::root_redirect(
    array(
        'prom_path' => 'kitty.php', 
        'dev_path' => '/Ixtlan-php/kitty.php'
    )
);