<?php

require_once '../../../../configDB.php';
require_once '../../../../main_config.php';

$post = $_POST;

/*********************************************************************************************************/
/* Добавляем выставку */
/*********************************************************************************************************/

$short_descryption = $post['short_descryption'];
$long_descryption  = $post['long_descryption'];

if (isset($short_descryption) and (isset($long_descryption))) {

    if (trim($short_descryption) != '' and trim($long_descryption) != '') {
        
        $exhibition_table = R::dispense('exhibitions');

        $exhibition_table->short_descryption = $short_descryption;
        $exhibition_table->long_descryption  = $long_descryption;

        R::store($exhibition_table);

    }

}

MainConfig::root_redirect(
    array(
        'prom_path' => '', 
        'dev_path' => '/Ixtlan-php/index.php'
    )
);