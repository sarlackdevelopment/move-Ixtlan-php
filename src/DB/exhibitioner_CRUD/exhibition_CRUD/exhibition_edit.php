<?php

require_once '../../../../configDB.php';
require_once '../../../../main_config.php';

$post = $_POST;

/*********************************************************************************************************/
/* Редактируем выставку */
/*********************************************************************************************************/

$exhibition_id     = $post['exhibition_id'];
$short_descryption = $post['short_descryption'];
$long_descryption  = $post['long_descryption'];

if (isset($exhibition_id)) {

    $exhibition = R::findOne('exhibitions', 'where id = ?', array($exhibition_id));

    if ($exhibition) {

        if (isset($short_descryption) and ($exhibition->short_descryption != $short_descryption)) {
            $exhibition->short_descryption = $short_descryption;   
        }

        if (isset($long_descryption) and ($exhibition->long_descryption != $long_descryption)) {
            $exhibition->long_descryption = $long_descryption;   
        }

        R::store($exhibition);

    }

}

MainConfig::root_redirect(
    array(
        'prom_path' => '', 
        'dev_path' => '/Ixtlan-php/index.php'
    )
);