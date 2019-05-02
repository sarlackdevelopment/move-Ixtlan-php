<?php

require '../../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

/*********************************************************************************************************/
/* Удаляем выбранные общие фото */
/*********************************************************************************************************/

$post   = $_POST;
$checks = $post['checks'];

if (!empty($checks)) {

    $imgcommon = R::findCollection('imgcommon', 'id in (' . implode(',', $checks) . ')');
    while ($current_img = $imgcommon->next()) {
        R::trash($current_img);
    }

}

header("Location: /Ixtlan-php/kitty.php");