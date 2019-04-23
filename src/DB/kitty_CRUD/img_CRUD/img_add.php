<?php

require '../../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post  = $_POST;
$files = $_FILES;

$log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';
$info = "kitty_id: " . $post['kitty_id'] . "; period_id: " . $post['period_id'];
file_put_contents($log, $info, FILE_APPEND);

/*********************************************************************************************************/
/* Добавляем фото котенка */
/*********************************************************************************************************/

 /* $kitty_id  = $post['kitty_id'];
$period_id = $post['period_id'];
$brood_id  = $post['brood_id'];

$ds           = DIRECTORY_SEPARATOR; 
$store_folder = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php/images/cats/kitty';

if (!empty($files)) {

    if (isset($kitty_id) and isset($period_id) and isset($brood_id)) {

        if (trim($kitty_id) != '' and trim($period_id) != '' and trim($brood_id) != '') {

            $brood  = R::findOne('broods', 'where id = ?', array($brood_id));
            $kitty  = R::findOne('kitty', 'where id = ?', array($kitty_id));
            $period = R::findOne('periods', 'where id = ?', array($period_id));
            
            $store_folder  = $store_folder . $ds . $brood['symbol'] . $ds . $kitty['name'] . $ds . $period['name'];

            if (!file_exists($store_folder)) {
                mkdir($store_folder, 0777, true);
            }

            $file_name      = $files['file']['name'];
            $temp_file_name = $files['file']['tmp_name'];  
            $target_file    = $store_folder . $ds.  $file_name;

            if (is_uploaded_file($temp_file_name)) {
                move_uploaded_file($temp_file_name, $target_file);
            }

            // Связь многие ко многим: периоды-изображения котят
            $img_kitty = R::dispense('imgkitty');

            $img_kitty->name = $file_name;
            $img_kitty->path = 'images/cats/kitty/' . $brood['symbol'] . $ds . $kitty['name'] . $ds . $period['name'] . $ds . $file_name;

            $img_kitty->sharedPeriodsList[] = $period;

            R::store($img_kitty);

            // Связь один ко многим: помет-изображения котят 
            //$brood->ownItemList[] = $img_kitty;
            //R::store($brood);

        }

    }

} */

header("Location: /Ixtlan-php/kitty.php");