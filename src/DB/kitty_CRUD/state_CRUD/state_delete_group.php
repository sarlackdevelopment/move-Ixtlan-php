<?php

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