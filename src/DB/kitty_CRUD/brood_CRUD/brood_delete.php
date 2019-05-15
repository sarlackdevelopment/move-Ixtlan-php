<?php

require_once '../../../../configDB.php';

include('../../../../src/controllers/Files_Controller.php');

$post = $_POST;

$ds           = DIRECTORY_SEPARATOR; 
$store_folder = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php/images/cats/kitty';

/*********************************************************************************************************/
/* Удаляем помет */
/*********************************************************************************************************/

$brood_id = $post['brood_id'];

if (isset($brood_id)) { 

    if ($brood_id != '') { 

        // Удаляем изображения котят связанных с пометом

        $imgkitty = R::getAll(
            'SELECT imgkitty.* FROM imgkitty AS imgkitty INNER JOIN kitty AS kitty ON imgkitty.kitty_id = kitty.id AND kitty.broods_id = ?', 
                array($brood_id));
     
        $imgkittyBeans = R::convertToBeans('imgkitty', $imgkitty);

        foreach ($imgkittyBeans as $imgkittyBean) {
            R::trash($imgkittyBean);
        }

        // Удаляем периоды, связаные с пометом

        $periods = R::getAll(
            'SELECT periods.* FROM periods AS periods INNER JOIN broods_periods AS broods_periods ON periods.id = broods_periods.periods_id AND broods_periods.broods_id = ?', 
                array($brood_id));

        $periodsBeans = R::convertToBeans('periods', $periods);

        foreach ($periodsBeans as $periodsBean) {
            R::trash($periodsBean);
        } 

        // Удаляем периоды котят связанных с пометом

        $kittens = R::findCollection('kitty', 'where broods_id = ?', array($brood_id));

        while ($kitty = $kittens->next()) {
            R::trash($kitty);
        } 

        // Удаляем сам помет

        $brood = R::findOne('broods', 'where id = ?', array($brood_id));
        R::trash($brood);

        // Удаляем все каталоги с диска

        $files_controller = new Files_Controller();
        $files_controller->recursiveRemoveDir($store_folder . $ds . $brood['symbol']);

    }
}