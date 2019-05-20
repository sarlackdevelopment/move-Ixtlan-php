<?php

class Commentor {

    

    public function show_pagination_control() {

        $rowsperpage = 3;
        $page        = $_REQUEST['p'] - 1;

        $p = $page * $rowsperpage;

        $kitty = R::getAll('SELECT * FROM kitty LIMIT ? , ?', array($p, $rowsperpage));
        $count = R::count('kitty');

        foreach ($kitty as $kitten) {

            echo $kitten['name'] . '<br>';

            /*$id = $pice_of_news['id'];
            
            $result = $result . 
                "$('#deletenews" . $id . "').on('click', function() {
                    $.post( 'src/DB/news_CRUD/news_delete.php', { 'news_id' : " . $id . " }, function() {
                        $('#news" . $id . "').modal('hide')
                    });
                });"; */
        } 

        if ($_REQUEST['p'] > 1) {
            $prev_page = $_REQUEST['p'] - 1;
            echo '<a href="comments.php?p=' . $prev_page . '">prev</a> ';
        }

        $check = $p + $rowsperpage;

        if ($count > $check) {
            $next_page = $_REQUEST['p'] + 1;
            echo '<a href="comments.php?p=' . $next_page . '">next</a>';
        }

        $limit = ceil($count / $rowsperpage);

        echo '<br><br>';

        for ($i = 1; $i <= $limit; $i++) {

            if ($i == $_REQUEST['p']) {
                echo '<strong>' . $i . '</strong>';
            } else {
                echo '<a href="comments.php?p=' . $i . '">' . $i . '</a>'; 
            }
 
        }

    }

    

}