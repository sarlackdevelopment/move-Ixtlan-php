<?php

require '../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post = $_POST;
//$log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';

/*********************************************************************************************************/
/* Добавляем взрослого кота */
/*********************************************************************************************************/

$short_descryption = $post['short_descryption'];
$long_descryption  = $post['long_descryption'];
$name              = $post['name'];
$gender            = $post['gender'];

if (isset($short_descryption) and isset($long_descryption) 
    and isset($name) and isset($gender)) {

    if (trim($short_descryption) != '' and trim($long_descryption) != ''
        and trim($name) != '' and trim($gender) != '') {

        $catsadult = R::dispense('catsadult');

        $catsadult->short_descryption = $short_descryption;
        $catsadult->long_descryption  = $long_descryption;
        $catsadult->name              = $name;
        $catsadult->gender            = $gender;

        R::store($catsadult);

        //$info = "Добавляем обычную новость \r\n";
        //file_put_contents($log, $info, FILE_APPEND);
    }

}

header("Location: /Ixtlan-php/cats_females.php");