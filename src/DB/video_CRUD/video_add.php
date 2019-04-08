<?php

require '../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post = $_POST;
$log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';

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

header("Location: /Ixtlan-php/index.php");