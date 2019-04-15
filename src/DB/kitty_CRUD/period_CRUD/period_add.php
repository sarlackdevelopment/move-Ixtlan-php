<?php

require '../../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post = $_POST;

/*********************************************************************************************************/
/* Добавляем период */
/*********************************************************************************************************/

$name_of_period      = $post['name_of_period'];
//$perid_id       = $post['perid_id'];
//$name_of_period = $post['name_of_period'];

/* $log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';
file_put_contents($log, $name_of_period, FILE_APPEND); */

//v-pills-Juan-twoWeeks

if (isset($name_of_period)) {
    if ($name_of_period != '') {
        $period = R::dispense('periods');
        $period->name = $name_of_period;
        R::store($period);
    }
}

header("Location: /Ixtlan-php/kitty.php");