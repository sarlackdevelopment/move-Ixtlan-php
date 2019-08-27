<?php

require_once 'configDB.php';

$get = $_GET;
if (isset($get['token'])) {

    $current_user = R::findOne('users', 'where token = ?', array($get['token']));
    $current_user->approve = true;
    R::store($current_user);

    header("Location: /Ixtlan-php/index.php");

}