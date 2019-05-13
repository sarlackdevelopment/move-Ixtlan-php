<?php

//require '../../../../libs/rb/rb-mysql.php';
//R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

require_once '../../../../configDB.php';

$post = $_POST;

/*********************************************************************************************************/
/* Удаляем выбранные состояния */
/*********************************************************************************************************/

$checks = $post['checks'];

if (!empty($checks)) {

    $states = R::findCollection('states', 'id in (' . implode(',', $checks) . ')');
    while ($state = $states->next()) {
        R::trash($state);
    }

}

header("Location: /Ixtlan-php/kitty.php");