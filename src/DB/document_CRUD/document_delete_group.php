<?php

require '../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

/*********************************************************************************************************/
/* Удаляем выбранные изображения из типа документов */
/*********************************************************************************************************/

$post   = $_POST;
$checks = $post['checks'];

if (!empty($checks)) {

    $imgkindofdocument = R::findCollection('imgkindofdocument', 'id in (' . implode(',', $checks) . ')');
    while ($img_kind_of_document = $imgkindofdocument->next()) {
        R::trash($img_kind_of_document);
    }

}

header("Location: /Ixtlan-php/index.php");