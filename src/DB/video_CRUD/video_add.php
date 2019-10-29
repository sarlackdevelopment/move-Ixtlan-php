<?php

require_once '../../../configDB.php';
require_once '../../../main_config.php';

$post = $_POST;

/*********************************************************************************************************/
/* Добавляем видео */
/*********************************************************************************************************/

$ref_video = $post['ref_video'];

if (isset($ref_video)) {

    if (trim($ref_video)) {

        $youtube_id = array_pop(explode("/", $ref_video));
        file_put_contents($log, $youtube_id, FILE_APPEND);

        $video = R::dispense('video');
        $video->hash = $youtube_id;
        R::store($video);

    }

}

MainConfig::root_redirect(
    array(
        'prom_path' => '', 
        'dev_path' => '/Ixtlan-php/index.php'
    )
);