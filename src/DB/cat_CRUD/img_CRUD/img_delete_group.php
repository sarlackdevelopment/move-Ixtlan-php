<?php

require_once '../../../../configDB.php';
require_once '../../../../main_config.php';

/*********************************************************************************************************/
/* Удаляем выбранные изображения */
/*********************************************************************************************************/

$post     = $_POST;
$checks   = $post['checks'];
$redirect = $post['redirect'];

if (!empty($checks)) {

    $imgcatsadult = R::findCollection('imgcatsadult', 'id in (' . implode(',', $checks) . ')');
    while ($img_catsadult = $imgcatsadult->next()) {
        R::trash($img_catsadult);
        unlink($_SERVER['DOCUMENT_ROOT'] . DIRECTORY_SEPARATOR . $img_catsadult['path']);
    }

}

MainConfig::root_redirect(
    array(
        'prom_path' => $redirect, 
        'dev_path' => '/Ixtlan-php/' . $redirect
    )
);