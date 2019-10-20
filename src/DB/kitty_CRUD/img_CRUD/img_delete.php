<?php

require_once '../../../../configDB.php';

/*********************************************************************************************************/
/* Удаляем выбранные общие фото */
/*********************************************************************************************************/

$post   = $_POST;
$checks = $post['checks'];

if (!empty($checks)) {

    $imgkitty = R::findCollection('imgkitty', 'id in (' . implode(',', $checks) . ')');
    
    while ($current_img = $imgkitty->next()) {

        R::trash($current_img);

        unlink($_SERVER['DOCUMENT_ROOT'] . DIRECTORY_SEPARATOR . $current_img['path']);

    }

}

header('Refresh: 3; url=http://move-ixtlan.ru/kitty.php' . $redirect);
//header("Location: /Ixtlan-php/kitty.php");