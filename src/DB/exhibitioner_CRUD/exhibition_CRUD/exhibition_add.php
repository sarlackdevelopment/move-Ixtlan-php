<?php

require '../../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post = $_POST;
$log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';

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

        //$info = "Добавляем обычную новость \r\n";
        //file_put_contents($log, $info, FILE_APPEND);
    }

}

header("Location: /Ixtlan-php/index.php");