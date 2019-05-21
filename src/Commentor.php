<?php

class Commentor {

    public function show_pagination_control() {

        $rowsperpage = 3;
        $page        = $_REQUEST['p'] - 1;

        $p = $page * $rowsperpage;

        $kitty = R::getAll('SELECT * FROM kitty LIMIT ? , ?', array($p, $rowsperpage));
        $count = R::count('kitty');

        echo 
        '<nav aria-label="...">
            <ul class="pagination justify-content-center">';

        if ($_REQUEST['p'] > 1) {
            $prev_page = $_REQUEST['p'] - 1;
            echo 
            '<li class="page-item">
                <a href="comments.php?p=' . $prev_page . '" class="btn btn-primary" role="button" aria-pressed="true"><<<</a>
            </li>';       
        } else {
            echo '<a href="#" class="btn btn-primary disabled" role="button" aria-disabled="true"><<<</a>';
        }

        $limit = ceil($count / $rowsperpage);

        for ($i = 1; $i <= $limit; $i++) {

            if ($i == $_REQUEST['p']) {
                echo 
                '<li class="page-item active" aria-current="page">
                    <span class="page-link">
                        ' . $i . '
                        <span class="sr-only">(current)</span>
                    </span>
                </li>';
            } else {
                echo '<li class="page-item"><a class="page-link" href="comments.php?p=' . $i . '">' . $i . '</a></li>'; 
            }
 
        }

        $check = $p + $rowsperpage;

        if ($count > $check) {
            $next_page = $_REQUEST['p'] + 1;
            echo 
            '<li class="page-item">
                <a href="comments.php?p=' . $next_page . '" class="btn btn-primary" role="button" aria-pressed="true">>>></a>
            </li>';
        } else {
            echo '<a href="#" class="btn btn-primary disabled" role="button" aria-disabled="true">>>></a>';
        }

        echo '</ul></nav><br><br>';

        foreach ($kitty as $kitten) {

            echo $kitten['name'] . '<br>';

        }  

    }

    

}