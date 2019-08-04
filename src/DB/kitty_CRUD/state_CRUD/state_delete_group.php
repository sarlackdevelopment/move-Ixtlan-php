<?php

require_once '../../../../configDB.php';

/*********************************************************************************************************/
/* Удаляем выбранные состояния */
/*********************************************************************************************************/

$json_obj = json_decode(file_get_contents('php://input'));
$checks   = $json_obj->checks;

if (!empty($checks)) {

    $states = R::findCollection('states', 'id in (' . implode(',', $checks) . ')');
    while ($state = $states->next()) {
        R::trash($state);
    }

}
