<?php

require_once '../../../../configDB.php';
require_once '../../../../main_config.php';
require_once '../../../local/utils.php';
require_once '../../../utils.php';

if ( Utils::is_session_started() === FALSE ) session_start();

$post = $_POST;

/*********************************************************************************************************/
/* Добавляем помет */
/*********************************************************************************************************/

$name_of_brood = $post['name_of_brood'];
$birth_date    = $post['birth_date'];

if (isset($name_of_brood) and isset($birth_date)) {
    if (($name_of_brood != '') and ($birth_date != '')) {

        // TODO убрать дублирующиеся колонки name и symbol. Скорее всего hash тоже лишнее
        $brood = R::dispense('broods');

        $brood->name       = $name_of_brood;
        $brood->hash       = sprintf("v-pills-headingBrood_%s", $name_of_brood);
        $brood->symbol     = $name_of_brood;
        $brood->birth_date = $birth_date;
        $brood->_local     = UtilsLocal::currentLanguage()['short_caption'];
        $brood->archive    = false;

        R::store($brood);

    }
}

MainConfig::root_redirect(
    array(
        'prom_path' => 'kitty.php', 
        'dev_path' => '/Ixtlan-php/kitty.php'
    )
);