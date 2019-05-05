<?php

require '../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

include('../../../src/controllers/Files_Controller.php');

$post = $_POST;

$ds           = DIRECTORY_SEPARATOR; 
$store_folder = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php';

/*********************************************************************************************************/
/* Удаляем котенка */
/*********************************************************************************************************/

$kitten_id = $post['kitten_id'];

if (isset($kitten_id)) { 

    if ($kitten_id != '') { 

        $kitty = R::findOne('kitty', 'where id = ?', array($kitten_id));
        $brood = R::findOne('broods', 'where id = ?', array($kitty['broods_id']));

        $kitty_store_folder = $store_folder . '/images/cats/kitty' . $ds . $brood['symbol'] . $ds . $kitty['name'];

        $files_controller = new Files_Controller();
        $files_controller->recursiveRemoveDir($kitty_store_folder);

        $imgkitty = R::findCollection('imgkitty', 'where kitty_id = ?', array($kitty['id']));
        while ($imgkitty_current = $imgkitty->next()) {
            R::trash($imgkitty_current);
        }

        R::trash($kitty);

    }
}