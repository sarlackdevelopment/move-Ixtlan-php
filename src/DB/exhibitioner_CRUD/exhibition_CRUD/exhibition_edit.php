<?php

require '../../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post = $_POST;

/*********************************************************************************************************/
/* Редактируем выставку */
/*********************************************************************************************************/

$form_id           = $post['form_id'];
$short_descryption = $post['short_descryption'];
$long_descryption  = $post['long_descryption'];

if (isset($form_id)) {

    if (isset($short_descryption) and isset($long_descryption)) { 

        if (trim($short_descryption) != '' and trim($long_descryption) != '') {

            $exhibitions_table = R::load('exhibitions', $form_id);

            $exhibitions_table->short_descryption = $short_descryption;
            $exhibitions_table->long_descryption  = $long_descryption;

            R::store($exhibitions_table);

        }
    
    }

}

header("Location: /Ixtlan-php/index.php");