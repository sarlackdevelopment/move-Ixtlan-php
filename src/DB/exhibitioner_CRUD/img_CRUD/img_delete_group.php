<?php

require_once '../../../../configDB.php';

/*********************************************************************************************************/
/* Удаляем выбранные изображения из выставочной галлереи */
/*********************************************************************************************************/

$json_obj = json_decode(file_get_contents('php://input'));

$checks = $json_obj->checks;

$ds           = DIRECTORY_SEPARATOR; 
$store_folder = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php';

if (!empty($checks)) {

    $imgexhibitions = R::findCollection('imgexhibitions', 'id in (' . implode(',', $checks) . ')');
    while ($img_exhibition = $imgexhibitions->next()) {
        R::trash($img_exhibition);
        unlink($store_folder . $ds . $img_exhibition['path']);
    }

}