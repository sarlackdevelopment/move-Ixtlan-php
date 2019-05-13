<?php

//require '../../../../libs/rb/rb-mysql.php';
//R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

require_once '../../../../configDB.php';

$post = $_POST;
$log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';

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

header("Location: /Ixtlan-php/index.php");