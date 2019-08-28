<?php 
    session_start(); 

    //unset($_SESSION['login']);
    //unset($_SESSION['email']);
    //unset($_SESSION['ROOT']);

    //session_unset(); 

    $_SESSION = array();

    session_destroy();