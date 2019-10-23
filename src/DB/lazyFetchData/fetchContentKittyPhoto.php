<?php

require_once '../../../configDB.php';

$json_obj = json_decode(file_get_contents('php://input'));

$kitty_id  = $json_obj->kitty_id;
$period_id = $json_obj->period_id;

$result = [];



/*$result = 
    '<div class="nav nav-fill nav-pills" id="v-pills-tab-$kitty_id" role="tablist">
        Captions  
    </div>       
    <div id="v-pills-tabContent-$kitty_id" class="tab-content">
        main photocontent 
    </div>
    <div class="container alert alert-info" role="alert">
        description
    </div>'; */

// Основной фотоконтент ' . $this->show_Content_Periods($kitty, $brood_id) . '
// Описание <p>' . $long_descryption . '</p>

echo json_encode($result);