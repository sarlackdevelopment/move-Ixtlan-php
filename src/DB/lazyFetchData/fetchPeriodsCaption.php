<?php

require_once '../../../configDB.php';
require_once '../../../_const_local.php';
require_once '../../utils.php';

if ( Utils::is_session_started() === FALSE ) session_start();

$json_obj = json_decode(file_get_contents('php://input'));

$brood_id = $json_obj->brood_id;
$result   = [];

if (isset($brood_id)) {

    $period_names = R::getAll(
    'SELECT
        periods.id AS id,
	    periods.name AS name        
    FROM broods_periods AS broods_periods
	    INNER JOIN periods AS periods
    	    ON (broods_periods.periods_id = periods.id)
                AND (broods_periods.broods_id = ?)', array($brood_id));
    
    foreach ($period_names as $current_period) {

        $period_name = '';
        switch ($current_period['name']) {
            case "Две недели":
                $period_name = LocalConstants::mainLocal()['two_weeks'];
                break;
            case "Месяц":
                $period_name = LocalConstants::mainLocal()['one_month'];
                break;
            case "Два месяца":
                $period_name = LocalConstants::mainLocal()['two_months'];
                break;
            case "Три месяца":
                $period_name = LocalConstants::mainLocal()['three_months'];
                break;
            case "Четыре месяца":
                $period_name = LocalConstants::mainLocal()['four_months'];
                break;
            case "Пять месяцев":
                $period_name = LocalConstants::mainLocal()['five_months'];
                break;
        }

        $result[] = array(
            'id' => $current_period['id'],
            'name' => $period_name
        );
    }
    
}

echo json_encode($result);