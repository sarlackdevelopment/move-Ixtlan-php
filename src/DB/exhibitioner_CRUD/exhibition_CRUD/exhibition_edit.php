<?php

//require '../../../../libs/rb/rb-mysql.php';
//R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

require_once '../../../../configDB.php';

$post = $_POST;

/*********************************************************************************************************/
/* Редактируем выставку */
/*********************************************************************************************************/

/*$form_id           = $post['form_id'];
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

}*/

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

header("Location: /Ixtlan-php/index.php");