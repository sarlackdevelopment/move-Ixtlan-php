<?php

require '../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post = $_POST;

/*********************************************************************************************************/
/* Редактируем котенка */
/*********************************************************************************************************/

$name               = $post['name'];
$short_descryption  = $post['short_descryption'];
$state_id           = $post['state'];
$state_descryption  = $post['state_descryption'];
$kitty_id           = $post['kitty_id'];

if (isset($name) and isset($short_descryption) 
    and isset($state_id) and isset($state_descryption)) { 

        if (trim($name) != '' and trim($short_descryption) != '' 
            and trim($state_id) != '' and trim($state_descryption) != '') {

            $kitty = R::findOne('kitty', 'where id = ?', array($kitty_id));

            $kitty->name              = $name;
            $kitty->short_descryption = $short_descryption;
            $kitty->state_descryption = $state_descryption;  

            R::store($kitty);

            $state = R::findOne('states', 'where id = ?', array($state_id));
            $state->ownKittyList[] = $kitty;
            R::store($state);        

        }
    
    }

header("Location: /Ixtlan-php/kitty.php");