<?php

require_once 'configDB.php';
require_once 'main_config.php';

$get = $_GET;
if (isset($get['token'])) {

    $current_user = R::findOne('users', 'where token = ?', array($get['token']));
    $current_user->approve = true;
    R::store($current_user);

    MainConfig::root_redirect(
        array(
            'prom_path' => '/kitty.php', 
            'dev_path' => '/Ixtlan-php/index.php'
        )
    );

}