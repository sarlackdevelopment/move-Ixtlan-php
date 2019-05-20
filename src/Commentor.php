<?php

class Commentor {

    

    public function show_pagination_control() {

        $kitty = R::findCollection('kitty');
        //$result = '';

        while ($kitten = $kitty->next()) {

            echo $kitten['name'];

            /*$id = $pice_of_news['id'];
            
            $result = $result . 
                "$('#deletenews" . $id . "').on('click', function() {
                    $.post( 'src/DB/news_CRUD/news_delete.php', { 'news_id' : " . $id . " }, function() {
                        $('#news" . $id . "').modal('hide')
                    });
                });"; */
        } 

    }

    

}