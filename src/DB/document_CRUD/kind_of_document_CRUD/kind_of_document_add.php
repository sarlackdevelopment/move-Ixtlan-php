<?php

require_once '../../../../configDB.php';

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

header('Refresh: 3; url=http://move-ixtlan.ru/');
//header("Location: /Ixtlan-php/index.php");