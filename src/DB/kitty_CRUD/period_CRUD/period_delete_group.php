<?php

require '../../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

include('../../../../src/controllers/Files_Controller.php');

$post = $_POST;

/*********************************************************************************************************/
/* Удаляем выбранные периоды */
/*********************************************************************************************************/

$checks   = $post['checks'];
$brood_id = $post['brood_id'];

$ds           = DIRECTORY_SEPARATOR; 
$store_folder = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php/images/cats/kitty';

if (!empty($checks)) {

    if (isset($brood_id)) {
        if (($brood_id != '')) {

            $files_controller = new Files_Controller();

            $brood              = R::findOne('broods', 'where id = ?', array($brood_id));
            $basic_store_folder = $store_folder . $ds . $brood['symbol'];

            $kittens = R::getAll('SELECT name FROM kitty AS kitty WHERE broods_id = ?', array($brood_id));
            $periods = R::getAll('SELECT id FROM periods WHERE id in (' . implode(',', $checks) . ')');

            foreach ($kittens as $kiity) {

                $store_folder = '';               

                foreach ($periods as $period) {

                    $store_folder = $basic_store_folder . $ds . $kiity['name'] . $ds . $period['id'];
                    $files_controller->recursiveRemoveDir($store_folder);
    
                }

            }

            $imgkittyBeans = R::findCollection('imgkitty', 'periods_id in (' . implode(',', $checks) . ')');
            while ($imgkittyBean = $imgkittyBeans->next()) {
                R::trash($imgkittyBean);
            }

            $periodsBeans = R::findCollection('periods', 'id in (' . implode(',', $checks) . ')');
            while ($periodBean = $periodsBeans->next()) {
                R::trash($periodBean);
            }
        }
    }

}

header("Location: /Ixtlan-php/kitty.php");