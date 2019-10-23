<?php

require_once '../../../configDB.php';

$json_obj = json_decode(file_get_contents('php://input'));

$kitty_id  = $json_obj->kitty_id;
$period_id = $json_obj->period_id; // засплиттить по подчеркиванию при поиске фото за период

//$result = [];
$result = '';

//for($i = 0; $i < 10000000000; $i++);

switch ($period_id ) {
    case 'period_27':
        $result = array(
            'period_id' => $period_id,
            'content' => 'photo from period with id 27'
        );
        break;
    case 'period_28':
        $result = array(
            'period_id' => $period_id,
            'content' => 'photo from period with id 28'
        );
        break;
    case 'period_29':
        $result = array(
            'period_id' => $period_id,
            'content' => 'photo from period with id 29'
        );
        break;
    case 'period_30':
        $result = array(
            'period_id' => $period_id,
            'content' => 'photo from period with id 30'
        );
        break;
}



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