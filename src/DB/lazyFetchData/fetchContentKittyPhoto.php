<?php

require_once '../../../configDB.php';

$json_obj = json_decode(file_get_contents('php://input'));

$kitty_id  = $json_obj->kitty_id; 
$period_id = explode('_', $json_obj->period_id)[1];

//$result = [];
$result = '';

$path = R::findOne('imgkitty', 'where periods_id = ?', array($period_id))['path'];

switch ($period_id ) {
    case '27':
        $result = array(
            'period_id' => $period_id,
            'content' => 'photo from period with id 27',
            'path' => $path
        );
        break;
    case '28':
        $result = array(
            'period_id' => $period_id,
            'content' => 'photo from period with id 28',
            'path' => $path
        );
        break;
    case '29':
        $result = array(
            'period_id' => $period_id,
            'content' => 'photo from period with id 29',
            'path' => $path
        );
        break;
    case '30':
        $result = array(
            'period_id' => $period_id,
            'content' => 'photo from period with id 30',
            'path' => $path
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