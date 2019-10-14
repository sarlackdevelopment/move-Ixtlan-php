<?php

require_once '../../../configDB.php';

$post = $_POST;

/*********************************************************************************************************/
/* Редактируем котенка */
/*********************************************************************************************************/

$name              = $post['name'];
$short_descryption = $post['short_descryption'];
$long_descryption  = $post['long_descryption'];
$state_id          = $post['state'];
$state_descryption = $post['state_descryption'];
$kitty_id          = $post['kitty_id'];

if (isset($kitty_id)) {

    $kitty = R::findOne('kitty', 'where id = ?', array($kitty_id));
    
    if ($kitty) {
    
        if (isset($short_descryption) and ($kitty->short_descryption != $short_descryption)) {
            $kitty->short_descryption = $short_descryption;   
        }

        if (isset($long_descryption) and ($kitty->long_descryption != $long_descryption)) {
            $kitty->long_descryption = $long_descryption;   
        }
    
        if (isset($name) and ($kitty->name != $name)) {
            $kitty->name = $name;   
        }

        if (isset($state_descryption) and ($kitty->state_descryption != $state_descryption)) {
            $kitty->state_descryption = $state_descryption;   
        }
    
        R::store($kitty);

        $state = R::findOne('states', 'where id = ?', array($state_id));
        $state->ownKittyList[] = $kitty;
        R::store($state); 
    
    }
    
}

header("Location: /Ixtlan-php/kitty.php");