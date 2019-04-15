<?php

require '../../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post = $_POST;

/*********************************************************************************************************/
/* Удаляем выбранные периоды */
/*********************************************************************************************************/

//$log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';
//$info = 'wer';
//file_put_contents($log, $info, FILE_APPEND);

$checks = $post['checks'];

if (!empty($checks)) {

    $periods = R::findCollection('periods', 'id in (' . implode(',', $checks) . ')');
    while ($period = $periods->next()) {
        R::trash($period);
    }

}

header("Location: /Ixtlan-php/kitty.php");