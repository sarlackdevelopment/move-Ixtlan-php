<?php

require '../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

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

    if (isset($short_descryption) and isset($long_descryption) and isset($gender) and isset($main_photo_id)) { 

        if (trim($short_descryption) != '' and trim($long_descryption) != '' and trim($gender) != '' and trim($main_photo_id) != '') {

            $catsadult  = R::findOne('catsadult', 'where id = ?', array($cat_id));

            $catsadult->short_descryption = $short_descryption;
            $catsadult->long_descryption  = $long_descryption;
            $catsadult->gender            = $gender;
            $catsadult->main_photo        = R::findOne('imgcatsadult', 'where id = ?', array($main_photo_id));

            R::store($catsadult);

        }
    
    }

}

header("Location: /Ixtlan-php/" . $redirect);