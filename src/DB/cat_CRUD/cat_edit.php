<?php

require_once '../../../configDB.php';

$post = $_POST;

/*********************************************************************************************************/
/* Редактируем описание кошки */
/*********************************************************************************************************/

$cat_id            = $post['cat_id'];
$short_descryption = $post['short_descryption'];
$long_descryption  = $post['long_descryption'];
$gender            = $post['gender'];
$redirect          = $post['redirect'];
$main_photo_id     = $post['main_photo'];

if (isset($cat_id)) {

    $catsadult = R::findOne('catsadult', 'where id = ?', array($cat_id));

    if ($catsadult) {

        if (isset($short_descryption) and ($catsadult->short_descryption != $short_descryption)) {
            $catsadult->short_descryption = $short_descryption;   
        }

        if (isset($long_descryption) and ($catsadult->long_descryption != $long_descryption)) {
            $catsadult->long_descryption = $long_descryption;   
        }

        if ((isset($gender)) and ($catsadult->gender != $gender)) {
            $catsadult->gender = $gender;   
        }

        if (isset($main_photo_id)) {

            if ($main_photo_id != $catsadult->main_photo_id) {
                $catsadult->main_photo = R::findOne('imgcatsadult', 'where id = ?', array($main_photo_id));    
            }

        }

        R::store($catsadult);

    }

}

header("Location: /Ixtlan-php/" . $redirect);