<?php

class Commentor {

    private $SIZE_PAGINATION = 3;

    public function getPagination() {
        return $this->SIZE_PAGINATION;
    }

    public function setPagination($pagination) {
        $this->SIZE_PAGINATION = $pagination;
    }

    public function show_pagination_control($id, $target_id, $flag) {

        if ($id == '0') { 
            return '';
        }

        /*$log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt'; перенести пагинацию на разные страницы и формы - ибо с ней не так просто
        $info = $target_id;
        file_put_contents($log, $info, FILE_APPEND);*/

        $result = '';

        //$semaphor = ($id >= $target_id) ? $id : $target_id ;
        //$kittens = R::getAll('SELECT * FROM kitty WHERE id >= ? ORDER BY id LIMIT 3', array($semaphor));

        $left_item = R::getAll('SELECT * FROM kitty WHERE id < ? ORDER BY id LIMIT 1', array($id));
        $rigth_item = R::getAll('SELECT * FROM kitty WHERE id > ? ORDER BY id LIMIT 1', array($id));

        if ((count($left_item) == 0) and (count($rigth_item) == 0)) {
            $kittens = R::getAll('SELECT * FROM kitty ORDER BY id');   
        } elseif ((count($left_item) == 0)) {
            $kittens = R::getAll('SELECT * FROM kitty ORDER BY id LIMIT 3');
        } elseif (count($rigth_item) == 0) {
            $buffer = R::getAll('SELECT * FROM kitty WHERE id > ? ORDER BY id DESC LIMIT 3', array($id));
            $kittens = $buffer;
        } else {
            $kittens = R::getAll('SELECT * FROM kitty WHERE id BETWEEN ? AND ? ORDER BY id DESK', array($left_item, $rigth_item));
        }

        if (count($kittens) != 0) {
            $current_last_id = $kittens[count($kittens) - 1]['id'];
            $disabled        = '';
        } else {
            $current_last_id = 0;
            $disabled        = 'disabled';
        }

        foreach ( $kittens as $kitty ) {

            $kitty_name = $kitty['name'];
            $current_id = $kitty['id'];

            if ($current_id != $id) {
                $result = $result . 
                    '<li class="page-item"><a class="page-link" href="comments.php?current_id=' . $current_id . '&target_id=' . $current_last_id . '">' . $kitty_name . ' </a></li>';
            } else {
                $result = $result . 
                    '<li class="page-item active" aria-current="page">
                        <a class="page-link" href="comments.php?current_id=' . $current_id . '&target_id=' . $current_last_id . '">' . $kitty_name . ' <span class="sr-only">(current)</span></a>
                    </li>';
            }
            
        }

        return 
        '<nav class="m-3" aria-label="...">
            <ul class="pagination justify-content-center">
                <!--<li class="page-item disabled">-->
                <li class="page-item">
                    <a class="page-link" href="comments.php?target_id=' . $this->get_default_id() . '" tabindex="-1" aria-disabled="true"><<<</a>
                </li>              
                ' . $result . '            
                <li class="page-item ' . $disabled . '">
                    <a class="page-link" href="comments.php?target_id=' . $current_last_id . '">></a>
                </li>
            </ul>
        </nav>';

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