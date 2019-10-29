<?php

require_once '../../../../configDB.php';
require_once '../../../../main_config.php';

/*********************************************************************************************************/
/* Удаляем выбранные общие фото */
/*********************************************************************************************************/

$post   = $_POST;
$checks = $post['checks'];

if (!empty($checks)) {

    $imgkitty = R::findCollection('imgkitty', 'id in (' . implode(',', $checks) . ')');
    
    while ($current_img = $imgkitty->next()) {
        R::trash($current_img);
        unlink($_SERVER['DOCUMENT_ROOT'] . DIRECTORY_SEPARATOR . 'Ixtlan-php' . DIRECTORY_SEPARATOR . $current_img['path']);
    }

}

MainConfig::root_redirect(
    array(
        'prom_path' => 'kitty.php', 
        'dev_path' => '/Ixtlan-php/kitty.php'
    )
);