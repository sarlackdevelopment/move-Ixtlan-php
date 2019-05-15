<?php

require_once '../../../../configDB.php';

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