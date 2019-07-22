<?php

require_once '../../../configDB.php';

/*********************************************************************************************************/
/* Удаляем выбранные видео из выставочной галлереи */
/*********************************************************************************************************/

$json_obj = json_decode(file_get_contents('php://input'));
$checks = $json_obj->checks;

if (!empty($checks)) {

    $video = R::findCollection('video', 'id in (' . implode(',', $checks) . ')');
    while ($pice_of_video = $video->next()) {
        R::trash($pice_of_video);
    }

}