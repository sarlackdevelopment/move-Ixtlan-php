<?php

require '../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post = $_POST;

/*********************************************************************************************************/
/* Редактируем описание кошки */
/*********************************************************************************************************/

$form_id           = $post['form_id'];
$short_descryption = $post['short_descryption'];
$long_descryption  = $post['long_descryption'];
$gender            = $post['gender'];
$redirect          = $post['redirect'];

if (isset($form_id)) {

    if (isset($short_descryption) and isset($long_descryption) and isset($gender)) { 

        if (trim($short_descryption) != '' and trim($long_descryption) != '' and trim($gender) != '') {

            $catsadult = R::load('catsadult', $form_id);

            $catsadult->short_descryption = $short_descryption;
            $catsadult->long_descryption  = $long_descryption;
            $catsadult->gender            = $gender;

            R::store($catsadult);

        }
    
    }

}

header("Location: /Ixtlan-php/" . $redirect);