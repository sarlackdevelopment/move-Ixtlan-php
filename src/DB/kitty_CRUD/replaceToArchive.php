<?php

require_once '../../../configDB.php';

/*********************************************************************************************************/
/* Уносим помет в архив */
/*********************************************************************************************************/

$json_obj = json_decode(file_get_contents('php://input'));

$brood_id  = $json_obj->brood_id;

if (isset($brood_id)) {
    $brood = R::findOne('broods', 'where id = ?', array($brood_id));
    if (($brood->archive === null) or ($brood->archive === "0")) {
        $brood->archive = "1";
    } else {
        $brood->archive = "0"; 
    }
    R::store($brood);
}

//header('Refresh: 3; url=http://move-ixtlan.ru/kitty.php' . $redirect);