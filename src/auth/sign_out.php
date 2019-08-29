<?php 
    require_once '../../src/utils.php';

    if ( Utils::is_session_started() === FALSE ) session_start(); 

    $_SESSION = array();

    session_destroy();