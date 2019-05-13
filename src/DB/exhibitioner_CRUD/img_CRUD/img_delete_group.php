<?php

//require '../../../../libs/rb/rb-mysql.php';
//R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

require_once '../../../../configDB.php';

/*********************************************************************************************************/
/* Удаляем выбранные изображения из выставочной галлереи */
/*********************************************************************************************************/

$post   = $_POST;
$checks = $post['checks'];

$ds           = DIRECTORY_SEPARATOR; 
$store_folder = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php';

if (!empty($checks)) {

    $imgexhibitions = R::findCollection('imgexhibitions', 'id in (' . implode(',', $checks) . ')');
    while ($img_exhibition = $imgexhibitions->next()) {
        R::trash($img_exhibition);
        unlink($store_folder . $ds . $img_exhibition['path']);
    }

}

header("Location: /Ixtlan-php/index.php");