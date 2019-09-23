<?php

require_once '../../configDB.php';

/*********************************************************************************************************/
/* Получаем список всех языков с сервера */
/*********************************************************************************************************/

$result    = [];
$languages = R::findCollection('languages');

while ($language = $languages->next()) {
    $result[] = array(
        'lang_id'       => $language['id'],
        'path'          => $language['icon_path'],
        'short_caption' => $language['short_caption'],
        'caption'       => $language['caption']);
}

echo json_encode($result);