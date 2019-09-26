<?php

require_once '../../../configDB.php';
require_once '../../local/utils.php';
require_once '../../utils.php';

if ( Utils::is_session_started() === FALSE ) session_start();

$post = $_POST;

/*********************************************************************************************************/
/* Добавляем взрослое животное */
/*********************************************************************************************************/

$short_descryption = $post['short_descryption'];
$long_descryption  = $post['long_descryption'];
$name              = $post['name'];
$gender            = $post['gender'];
$redirect          = $post['redirect'];

if (isset($short_descryption) and isset($long_descryption) 
    and isset($name) and isset($gender)) {

    if (trim($short_descryption) != '' and trim($long_descryption) != ''
        and trim($name) != '' and trim($gender) != '') {

        $catsadult = R::dispense('catsadult');

        $catsadult->short_descryption = $short_descryption;
        $catsadult->long_descryption  = $long_descryption;
        $catsadult->name              = $name;
        $catsadult->gender            = $gender;
        $catsadult->_local            = UtilsLocal::currentLanguage()['short_caption'];

        R::store($catsadult);

    }

}

header("Location: /Ixtlan-php/" . $redirect);