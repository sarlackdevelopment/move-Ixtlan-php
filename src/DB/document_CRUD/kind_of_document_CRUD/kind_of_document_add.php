<?php

require_once '../../../../configDB.php';
require_once '../../../../main_config.php';

$post = $_POST;

/*********************************************************************************************************/
/* Добавляем вид документа */
/*********************************************************************************************************/

$short_descryption = $post['short_descryption'];

if (isset($short_descryption)) {

    if (trim($short_descryption) != '') {
        $kindofdocuments = R::dispense('kindofdocuments');
        $kindofdocuments->short_descryption = $short_descryption;
        R::store($kindofdocuments);
    }

}

MainConfig::root_redirect(
    array(
        'prom_path' => '', 
        'dev_path' => '/Ixtlan-php/index.php'
    )
);