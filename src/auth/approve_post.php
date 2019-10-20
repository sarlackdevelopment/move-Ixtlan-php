<?php

require_once 'configDB.php';

$get = $_GET;
if (isset($get['token'])) {

    $current_user = R::findOne('users', 'where token = ?', array($get['token']));
    $current_user->approve = true;
    R::store($current_user);

    header('Refresh: 3; url=http://move-ixtlan.ru');
    //header("Location: /Ixtlan-php/index.php");

}