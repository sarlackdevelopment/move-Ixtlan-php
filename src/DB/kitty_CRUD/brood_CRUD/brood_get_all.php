<?php

require_once '../../../../configDB.php';

/*********************************************************************************************************/
/* Отдаем информацию обо всех пометах */
/*********************************************************************************************************/

$json_obj = json_decode(file_get_contents('php://input'));

$result = [];

$broods = R::findCollection('broods');

while ($brood = $broods->next()) {
    $result[] = array(
        'id' => $brood['id'],
        'archive' => $brood['archive']
    );
}

echo json_encode($result);