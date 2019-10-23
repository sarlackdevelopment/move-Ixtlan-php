<?php

require_once '../../../configDB.php';

$json_obj = json_decode(file_get_contents('php://input'));

$kitty_id  = $json_obj->kitty_id; 
$period_id = explode('_', $json_obj->period_id)[1];

$paths = [];

$kitty = R::findOne('kitty', 'where id = ?', array($kitty_id));
$imgs  = R::findCollection('imgkitty', 'kitty_id = ? and periods_id = ?', array($kitty_id, $period_id));

while ($img = $imgs->next()) {
    $paths[] = $img['path'];
}

echo json_encode(
    array(
        'name' => $kitty['name'],
        'descryption' => $kitty['long_descryption'],
        'paths' => $paths
    )
);