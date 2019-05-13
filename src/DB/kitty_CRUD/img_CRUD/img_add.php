<?php

//require '../../../../libs/rb/rb-mysql.php';
//R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

require_once '../../../../configDB.php';

$post  = $_POST;
$files = $_FILES;

/*********************************************************************************************************/
/* Добавляем фото котенка */
/*********************************************************************************************************/

$kitty_id  = $post['kitty_id'];
$period_id = $post['period_id'];

$ds           = DIRECTORY_SEPARATOR; 
$store_folder = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php';

if (!empty($files)) {

    if (isset($kitty_id) and isset($period_id)) {

        if (trim($kitty_id) != '' and trim($period_id) != '') {

            $kitty  = R::findOne('kitty', 'where id = ?', array($kitty_id));
            $period = R::findOne('periods', 'where id = ?', array($period_id));

            $array_path      = explode($ds, $kitty['main_photo']);
            $array_path_tail = array_slice($array_path, 0, sizeof($array_path) - 1);
            $path            = '';

            foreach ($array_path_tail as $value) {
                $path = $path . $ds . $value;
            }

            $store_folder = $store_folder . $ds . $path . $ds . $period['id'];

            if (!file_exists($store_folder)) {
                mkdir($store_folder, 0777, true);
            }

            $file_name      = $files['file']['name'];
            $temp_file_name = $files['file']['tmp_name'];  
            $target_file    = $store_folder . $ds.  $file_name;

            if (is_uploaded_file($temp_file_name)) {
                move_uploaded_file($temp_file_name, $target_file);
            }

            // Связь один ко многим: периоды-изображения котят
            $img_kitty = R::dispense('imgkitty');

            $img_kitty->name = $file_name;
            $img_kitty->path = mb_substr($path, 1, strlen($path)) . $ds . $period['id'] . $ds . $file_name;

            R::store($img_kitty);

            $period->ownImgkittyList[] = $img_kitty;
            R::store($period);

            $kitty->ownImgkittyList[] = $img_kitty;
            R::store($kitty);

        }

    }

}

header("Location: /Ixtlan-php/kitty.php");