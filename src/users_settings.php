<?php

require_once 'utils.php';
require_once '../configDB.php';

if ( Utils::is_session_started() === FALSE ) session_start();

$current_user = R::findOne('users', 'where login = ?', array($_SESSION['login']));

if ($current_user !== null) {

    $json_obj = json_decode(file_get_contents('php://input'));

    $name = $json_obj->name;
    $value = $json_obj->value;

    if ((isset($name)) and (isset($value))) {
        if (($name !== '') and ($value !== '')) {

            $current_setting = R::findOne('userssettings', 'where name = ?', array($name));

            if ($current_setting !== null) {

                $current_setting->value = $value;

                R::store($current_setting);
                
            } else {
                $setting = R::dispense('userssettings');

                $setting->name = $name;
                $setting->value = $value;

                $current_user->ownUsersSettingsList[] = $setting;

                R::store($current_user);

            }

        }
    }

}