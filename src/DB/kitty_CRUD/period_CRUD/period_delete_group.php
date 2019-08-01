<?php

require_once '../../../../configDB.php';

include('../../../../src/controllers/Files_Controller.php');

/*********************************************************************************************************/
/* Удаляем выбранные периоды */
/*********************************************************************************************************/

$json_obj = json_decode(file_get_contents('php://input'));

$checks   = $json_obj->checks;
$brood_id = $json_obj->brood_id;

if (!empty($checks)) {

    if (isset($brood_id)) {
        if (($brood_id != '')) {

            $ds           = DIRECTORY_SEPARATOR; 
            $store_folder = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php/images/cats/kitty';

            $files_controller = new Files_Controller();

            $data = R::getAll('SELECT 
                kitty.name AS name, 
                broods_periods.periods_id AS id,
                broods.symbol AS symbol
            FROM broods_periods AS broods_periods 
                INNER JOIN kitty AS kitty	
                    ON broods_periods.broods_id = kitty.broods_id
                INNER JOIN imgkitty AS imgkitty
                    ON kitty.id = imgkitty.kitty_id
                        AND broods_periods.periods_id = imgkitty.periods_id
                INNER JOIN broods AS broods
                    ON broods_periods.broods_id = broods.id
            WHERE
                broods_periods.broods_id = ?
                    AND broods_periods.periods_id IN (' . implode(',', $checks) . ')
            GROUP BY name, id, symbol', array($brood_id));

            foreach ($data as $pice_of_data) {
                $files_controller->recursiveRemoveDir(
                    $store_folder
                        . $ds . $pice_of_data['symbol']
                        . $ds . $pice_of_data['name']
                        . $ds . $pice_of_data['id']);
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