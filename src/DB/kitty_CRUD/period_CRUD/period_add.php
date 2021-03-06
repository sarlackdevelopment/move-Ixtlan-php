<?php

require_once '../../../../configDB.php';
require_once '../../../local/utils.php';
require_once '../../../utils.php';
require_once '../../../../main_config.php';

if ( Utils::is_session_started() === FALSE ) session_start();

$post = $_POST;

/*********************************************************************************************************/
/* Добавляем период */
/*********************************************************************************************************/

$name_of_period = $post['name_of_period'];
$brood_id       = $post['brood_id'];

if (isset($name_of_period) and isset($brood_id)) {
    if (($name_of_period != '') and ($brood_id != '')) {

        $period = R::dispense('periods');

        $period->name               = $name_of_period;
        $period->_local             = UtilsLocal::currentLanguage()['short_caption'];
        $period->sharedBroodsList[] = R::findOne('broods', 'where id = ?', array($brood_id));

        R::store($period);
        
    }
}

MainConfig::root_redirect(
    array(
        'prom_path' => 'kitty.php', 
        'dev_path' => '/Ixtlan-php/kitty.php'
    )
);