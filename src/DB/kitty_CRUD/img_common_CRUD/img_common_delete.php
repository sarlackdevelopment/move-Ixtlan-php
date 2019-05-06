<?php

require '../../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

/*********************************************************************************************************/
/* Удаляем выбранные общие фото */
/*********************************************************************************************************/

$post   = $_POST;
$checks = $post['checks'];

$ds           = DIRECTORY_SEPARATOR; 
$store_folder = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php';

if (!empty($checks)) {

    $imgcommon = R::findCollection('imgcommon', 'id in (' . implode(',', $checks) . ')');

    while ($current_img = $imgcommon->next()) {

        R::trash($current_img);

        unlink($store_folder . $ds . $current_img['path']);

    }

}

header("Location: /Ixtlan-php/kitty.php");