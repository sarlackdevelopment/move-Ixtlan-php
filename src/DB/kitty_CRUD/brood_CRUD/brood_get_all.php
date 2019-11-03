<?php

require_once '../../../../configDB.php';
require_once '../../../local/utils.php';
require_once '../../../../const_local.php';
require_once '../../../utils.php';

if ( Utils::is_session_started() === FALSE ) session_start();

/*********************************************************************************************************/
/* Отдаем информацию обо всех пометах */
/*********************************************************************************************************/

$json_obj = json_decode(file_get_contents('php://input'));

$local = UtilsLocal::currentLanguage()['short_caption'];

$broods = R::findCollection('broods', 'where _local =? order by id', array($local));

$data = [];

while ($brood = $broods->next()) {
    $data[] = array(
        'id' => $brood['id'],
        'archive' => $brood['archive']
    );
}

$result = array(
    'data' => $data,
    'archive_title' => LocalConstants::mainLocal()['archive_title'],
    'hide_archive_title' => LocalConstants::mainLocal()['hide_archive_title']
);

echo json_encode($result);