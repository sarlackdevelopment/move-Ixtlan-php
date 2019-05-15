<?php

require_once '../../../../configDB.php';

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
        $period->sharedBroodsList[] = R::findOne('broods', 'where id = ?', array($brood_id));

        R::store($period);
        
    }
}

header("Location: /Ixtlan-php/kitty.php");