<?php

require_once '../../../configDB.php';
require_once '../../../main_config.php';

/*********************************************************************************************************/
/* Удаляем выбранные изображения из типа документов */
/*********************************************************************************************************/

$post   = $_POST;
$checks = $post['checks'];

if (!empty($checks)) {

    $imgkindofdocument = R::findCollection('imgkindofdocument', 'id in (' . implode(',', $checks) . ')');
    while ($img_kind_of_document = $imgkindofdocument->next()) {
        R::trash($img_kind_of_document);
        unlink(MainConfig::root_store() . DIRECTORY_SEPARATOR . $img_kind_of_document['path']);
    }

}

MainConfig::root_redirect(
    array(
        'prom_path' => '', 
        'dev_path' => '/Ixtlan-php/index.php'
    )
);