<?php

class Commentor {

    private $SIZE_PAGINATION = 3;

    public function getPagination() {
        return $this->SIZE_PAGINATION;
    }

    public function setPagination($pagination) {
        $this->SIZE_PAGINATION = $pagination;
    }

    public function show_pagination_control($id, $target_id, $direction) {

        if ($id == '0') {
            return '';
        }

        //$target_id = $this->get_default_id();

        /* if (!isset($_GET['direction'])) {

            $log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';
            $info = "1";
            file_put_contents($log, $info, FILE_APPEND);

            $kittens = R::getAll('SELECT * FROM kitty WHERE id >= ? ORDER BY id LIMIT 3', array($target_id)); 

        } else {

            if (isset($_GET['direction'])) {

                if (isset($_GET['target_id'])) {

                    $log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';
                    $info = "2";
                    file_put_contents($log, $info, FILE_APPEND);

                    $target_id = $_GET['target_id'];

                    if ($_GET['direction'] == 'def') {                    
                        $kittens = R::getAll('SELECT * FROM kitty WHERE id >= ? ORDER BY id LIMIT 3', array($target_id));
                    } else {
                        $kittens = R::getAll('SELECT * FROM kitty WHERE id <= ? ORDER BY id DESC LIMIT 3', array($target_id));
                    }
                } else {

                    $kittens = R::getAll('SELECT * FROM kitty WHERE id >= ? ORDER BY id LIMIT 3', array($target_id));   

                }

            } else {

                $kittens = R::getAll('SELECT * FROM kitty WHERE id >= ? ORDER BY id LIMIT 3', array($target_id)); 

            }

        }*/

        //$log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';

        if ((!isset($_GET['target_id'])) and (!isset($_GET['direction']))) {
            //$info = "1";
            $kittens = R::getAll('SELECT * FROM kitty WHERE id >= ? ORDER BY id LIMIT 3', array($target_id));    
        } else {
            if ($direction == 'def') { 
                //$info = "2";                   
                $kittens = R::getAll('SELECT * FROM kitty WHERE id >= ? ORDER BY id LIMIT 3', array($target_id));
            } else {
                //$info = "3";
                $kittens = R::getAll('SELECT * FROM kitty WHERE id <= ? ORDER BY id LIMIT 3', array($target_id));
            }
        }
        //file_put_contents($log, $info, FILE_APPEND);

        $result = '';

        $current_first_id = $kittens[0]['id'];
        $current_last_id  = $kittens[count($kittens) - 1]['id'];

        //$current_target_id = $kittens[count($kittens) - 1]['id'];


        foreach ( $kittens as $kitty ) {

            $kitty_name = $kitty['name'];
            $current_id = $kitty['id'];
        
            /* if ($pagination == 1) {
                $current_first_id = $kitty_id;
            }
            if ($pagination > $this->SIZE_PAGINATION) {
                $current_last_id = $kitty_id;
                break;
            }

            $pagination = $pagination + 1; */

            if ($current_id != $id) {
                $result = $result . 
                    '<li class="page-item"><a class="page-link" href="comments.php?current_id=' . $current_id . '">' . $kitty_name . ' </a></li>';
            } else {
                $result = $result . 
                    '<li class="page-item active" aria-current="page">
                        <a class="page-link" href="comments.php?current_id=' . $current_id . '">' . $kitty_name . ' <span class="sr-only">(current)</span></a>
                    </li>';
            }
            
        }

        //$log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';
        //    $info = $result;
        //    file_put_contents($log, $info, FILE_APPEND);

        return 
        '<nav class="m-3" aria-label="...">
            <ul class="pagination justify-content-center">
                <!--<li class="page-item disabled">-->
                <li class="page-item">
                    <a class="page-link" href="comments.php?target_id=' . $current_first_id . '&direction=decs" tabindex="-1" aria-disabled="true"><<<</a>
                </li>              
                ' . $result . '            
                <li class="page-item">
                    <a class="page-link" href="comments.php?target_id=' . $current_last_id . '&direction=def">>>></a>
                </li>
            </ul>
        </nav>';

        /*$result = '';
        //$kitty  = R::findCollection('kitty');
        if ($first_id == 0) {

            $log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';
            $info = '$first_id == 0';
            file_put_contents($log, $info, FILE_APPEND);

            $kittens = R::getAll('SELECT * FROM kitty WHERE id >= ? ORDER BY id', array($last_id));
        } else if ($last_id == 0) {

            $log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';
            $info = '$last_id == 0';
            file_put_contents($log, $info, FILE_APPEND);

            $kittens = R::getAll('SELECT * FROM kitty WHERE id <= ? ORDER BY id DESC', array($first_id));
        }

        $pagination = 1;

        $current_first_id = 0;
        $current_last_id  = 0;

        //while ($kitten = $kitty->next()) {
        foreach ( $kittens as $kitty ) {

            $kitty_name = $kitty['name'];
            $kitty_id   = $kitty['id'];
        
            if ($pagination == 1) {
                $current_first_id = $kitty_id;
            }
            if ($pagination > $this->SIZE_PAGINATION) {
                $current_last_id = $kitty_id;
                break;
            }

            $pagination = $pagination + 1;

            if ($kitty_id != $id) {
                $result = $result . 
                    '<li class="page-item"><a class="page-link" href="comments.php?current_id=' . $kitty_id . '">' . $kitty_name . ' </a></li>';
            } else {
                $result = $result . 
                    '<li class="page-item active" aria-current="page">
                        <a class="page-link" href="comments.php?current_id=' . $kitty_id . '">' . $kitty_name . ' <span class="sr-only">(current)</span></a>
                    </li>';
            }
            
        }

        return 
        '<nav class="m-3" aria-label="...">
            <ul class="pagination justify-content-center">
                <!--<li class="page-item disabled">-->
                <li class="page-item">
                    <a class="page-link" href="comments.php?first_id=' . $current_first_id . '&last_id=' . $current_last_id . '" tabindex="-1" aria-disabled="true"><<<</a>
                </li>              
                ' . $result . '            
                <li class="page-item">
                    <a class="page-link" href="comments.php?first_id=' . $current_first_id . '&last_id=' . $current_last_id . '">>>></a>
                </li>
            </ul>
        </nav>'; */

    }

    public function get_default_id() {

        $kitty = R::getAll('SELECT id FROM kitty ORDER BY id LIMIT 1');
        if (empty($kitty)) {
            return '0';
        } else {
            return $kitty[0]['id'];
        }


    }

    public function show_area_of_comments() {

        //echo 

    }

}