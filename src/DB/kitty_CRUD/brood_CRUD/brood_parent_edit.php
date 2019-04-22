<?php

require '../../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post = $_POST;

/*********************************************************************************************************/
/* Редактируем родителей помета */
/*********************************************************************************************************/

$brood_id  = $post['brood_id'];
$parent_id = $post['parent'];
$gender    = $post['gender'];

if (isset($brood_id) and isset($parent_id) and isset($gender)) { 

        if (trim($brood_id) != '' and trim($parent_id) != '' and trim($gender) != '') {

            $brood  = R::findOne('broods', 'where id = ?', array($brood_id));
            $parent = R::findOne('catsadult', 'where id = ?', array($parent_id));

            if ($gender == 'male') {
                $brood['male_parent'] = $parent;
            } else {
                $brood['female_parent'] = $parent;
            }

            R::store($brood);   
            
            /*$broods = R::findOne('broods', 'where id = ?', array($brood_id));
            $broods->ownCatsadultList[] = $catsadult;
            R::store($broods);*/

        }
    
    }

header("Location: /Ixtlan-php/kitty.php");