<?php

require_once 'utils.php';
require_once '../configDB.php';

if ( Utils::is_session_started() === FALSE ) session_start();

$json_obj = json_decode(file_get_contents('php://input'));

$name  = $json_obj->name;
$value = $json_obj->value;

if ((isset($name)) and (isset($value))) {

    if (($name !== '') and ($value !== '')) {

        $current_user = R::findOne('users', 'where login = ?', array($_SESSION['login']));

        // Если пользователь авторизован пишем значение настройки в БД

        if ($current_user !== null) {

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

        // Значение текущего языка в любом случае записываем в кэш $_SESSION
        
        if ($name === 'lang') {

            $current_language = R::findOne('languages', 'where id = ?', array($value));

            $_SESSION['current_language'] = array(
                'caption'       => $current_language['caption'],
                'short_caption' => $current_language['short_caption'],
                'icon_path'     => $current_language['icon_path']
            );

            $_SESSION['local_constants'] = NULL;

            //~~~ редирект на этот же URL с параметром ?lang=$short_caption

        }

    }

}