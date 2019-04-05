<?php

require '../../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

/*********************************************************************************************************/
/* Удаляем выбранные изображения из выставочной галлереи */
/*********************************************************************************************************/

$post   = $_POST;
$checks = $post['checks'];

if (!empty($checks)) {

    $imgexhibitions = R::findCollection('imgexhibitions', 'id in (' . implode(',', $checks) . ')');
    while ($img_exhibition = $imgexhibitions->next()) {
        R::trash($img_exhibition);
    }

}

header("Location: /Ixtlan-php/index.php");