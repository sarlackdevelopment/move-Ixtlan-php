<?php

//require '../../../libs/rb/rb-mysql.php';
//R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

require_once '../../../configDB.php';

/*********************************************************************************************************/
/* Удаляем выбранные видео из выставочной галлереи */
/*********************************************************************************************************/

$post   = $_POST;
$checks = $post['checks'];

if (!empty($checks)) {

    $video = R::findCollection('video', 'id in (' . implode(',', $checks) . ')');
    while ($pice_of_video = $video->next()) {
        R::trash($pice_of_video);
    }

}

header("Location: /Ixtlan-php/index.php");