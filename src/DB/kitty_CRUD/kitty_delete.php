<?php

require_once '../../../configDB.php';
require_once '../../../main_config.php';

include('../../../src/controllers/Files_Controller.php');

/*********************************************************************************************************/
/* Удаляем котенка */
/*********************************************************************************************************/

$json_obj = json_decode(file_get_contents('php://input'));

$kitty_id = $json_obj->id;

if (isset($kitty_id)) { 

    $ds           = DIRECTORY_SEPARATOR; 
    //$store_folder = $_SERVER['DOCUMENT_ROOT'];
    //$store_folder = $_SERVER['DOCUMENT_ROOT'] . $ds . 'Ixtlan-php';
    $store_folder = MainConfig::root_store();

    $kitty = R::findOne('kitty', 'where id = ?', array($kitty_id));
    $brood = R::findOne('broods', 'where id = ?', array($kitty['broods_id']));

    $kitty_store_folder = $store_folder . $ds . 'images' . $ds . 'cats' . $ds . 'kitty' . $ds . $brood['symbol'] . $ds . $kitty['name'];

    $files_controller = new Files_Controller();
    $files_controller->recursiveRemoveDir($kitty_store_folder);

    $imgkitty = R::findCollection('imgkitty', 'where kitty_id = ?', array($kitty_id));
    while ($imgkitty_current = $imgkitty->next()) {
        R::trash($imgkitty_current);
    }

    R::trash($kitty);

}