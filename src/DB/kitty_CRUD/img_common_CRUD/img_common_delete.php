<?php

require_once '../../../../configDB.php';
require_once '../../../../main_config.php';

/*********************************************************************************************************/
/* Удаляем выбранные общие фото */
/*********************************************************************************************************/

$post   = $_POST;
$checks = $post['checks'];

if (!empty($checks)) {

    $imgcommon = R::findCollection('imgcommon', 'id in (' . implode(',', $checks) . ')');

    while ($current_img = $imgcommon->next()) {
        R::trash($current_img);
        unlink(MainConfig::root_store() . DIRECTORY_SEPARATOR . $current_img['path']); 
    }

}

MainConfig::root_redirect(
    array(
        'prom_path' => 'kitty.php', 
        'dev_path' => '/Ixtlan-php/kitty.php'
    )
);