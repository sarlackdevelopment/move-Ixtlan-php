<?php

require_once '../../../../configDB.php';

/*********************************************************************************************************/
/* Удаляем выбранные изображения */
/*********************************************************************************************************/

$post     = $_POST;
$checks   = $post['checks'];
$redirect = $post['redirect'];

$ds           = DIRECTORY_SEPARATOR; 
$store_folder = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php';

if (!empty($checks)) {

    $imgcatsadult = R::findCollection('imgcatsadult', 'id in (' . implode(',', $checks) . ')');
    while ($img_catsadult = $imgcatsadult->next()) {
        R::trash($img_catsadult);
        unlink($store_folder . $ds . $img_catsadult['path']);
    }

}

header("Location: /Ixtlan-php/" . $redirect);