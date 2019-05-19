<?php

class Commentor {

    private $SIZE_PAGINATION = 3;

    public function show_pagination_control($id) {

        if ($id == '0') {
            return '';
        }

        $result = '';
        $kitty  = R::findCollection('kitty');

        $pagination = 1;

        while ($kitten = $kitty->next()) {

            if ($pagination > $this->SIZE_PAGINATION) {
                break;
            }

            $pagination = $pagination + 1;

            $kitten_name = $kitten['name'];
            $kitten_id   = $kitten['id'];

            if ($kitten_id != $id) {
                $result = $result . 
                    '<li class="page-item"><a class="page-link" href="comments.php?current_id=' . $kitten_id . '">' . $kitten_name . ' </a></li>';
            } else {
                $result = $result . 
                    '<li class="page-item active" aria-current="page">
                        <a class="page-link" href="comments.php?current_id=' . $kitten_id . '">' . $kitten_name . ' <span class="sr-only">(current)</span></a>
                    </li>';
            }
            
        }

        return 
        '<nav class="m-3" aria-label="...">
            <ul class="pagination justify-content-center">
                <!--<li class="page-item disabled">-->
                <li class="page-item">
                    <a class="page-link" href="comments.php?current_id=' . $id . '" tabindex="-1" aria-disabled="true"><<<</a>
                </li>              
                ' . $result . '            
                <li class="page-item">
                    <a class="page-link" href="comments.php?current_id=' . $id . '">>>></a>
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