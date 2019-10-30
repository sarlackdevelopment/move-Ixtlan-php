<?php

require_once '../../../../configDB.php';
require_once '../../../local/utils.php';

/*********************************************************************************************************/
/* Отдаем информацию обо всех пометах */
/*********************************************************************************************************/

$json_obj = json_decode(file_get_contents('php://input'));

$result = [];

$local = UtilsLocal::currentLanguage()['short_caption'];

$broods = R::findCollection('broods', 'where _local =? order by id', array($local));

while ($brood = $broods->next()) {
    $result[] = array(
        'id' => $brood['id'],
        'archive' => $brood['archive']
    );
}

echo json_encode($result);