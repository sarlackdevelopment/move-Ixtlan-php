<?php

require_once '../../../configDB.php'; 

/*********************************************************************************************************/
/* Удаляем выбранные изображения из типа документов */
/*********************************************************************************************************/

$post   = $_POST;
$checks = $post['checks'];

if (!empty($checks)) {

    $imgkindofdocument = R::findCollection('imgkindofdocument', 'id in (' . implode(',', $checks) . ')');
    while ($img_kind_of_document = $imgkindofdocument->next()) {
        R::trash($img_kind_of_document);
        unlink($_SERVER['DOCUMENT_ROOT'] . DIRECTORY_SEPARATOR . $img_kind_of_document['path']);
    }

}

header('Refresh: 3; url=http://move-ixtlan.ru/');
//header("Location: /Ixtlan-php/index.php");