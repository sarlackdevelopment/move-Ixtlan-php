<?php

class Videomaker {

    private function get_list_of_Video() {
        
        $video         = R::findCollection('video');
        $list_of_Video = array();
    
        while ($pice_of_video = $video->next()) {
            $list_of_Video[] = array(
                'hash' => $pice_of_video['hash']
            );
        }
    
        return $list_of_Video;

    }

    private function have_Rules() {
        return true;
    }

    private function show_form_for_add_video() {

        if (!$this->have_Rules()) {
            return '';
        } else {
            return
                '<button class="btn btn-sm btn-block btn-outline-info my-1" type="button" data-toggle="collapse" data-target="#add_video" aria-expanded="false" aria-controls="add_video">
                    Добавить видео
                </button>
                <form id="add_video" class="collapse" action="/Ixtlan-php/src/DB/video_CRUD/video_add.php" method="post">
                    <div class="modal-body">                                   
                        <label for="Caption">Ссылка на видео</label>
                        <input class="form-control" type="text" name="ref_video" placeholder="Скопируй ссылку на видео">                                   
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-sm btn-block btn-outline-info my-1" type="submit">Сохранить</button>
                    </div>
                </form>';
        }
        
    }

    public function show_Video_Gallery() {

        $list_of_video = $this->get_list_of_Video();

        $count            = count($list_of_video);
        $mask_video       = 'https://www.youtube.com/embed/';
        $mask_default_img = 'http://img.youtube.com/vi/';

        echo $this->show_form_for_add_video();
        echo '<div class="d-flex flex-row flex-wrap bd-highlight justify-content-center mb-3">';

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_video = $list_of_video[$index];
            $hash              = $instance_of_video['hash'];

            if ($index == 0) {
                echo 
                '<div class="container-fluid embed-responsive embed-responsive-16by9 m-1">
                    <iframe class="embed-responsive-item" src="' . $mask_video . $hash . '" allowfullscreen name="slider"></iframe>
                </div>';
            }

            echo
            '<a href="' . $mask_video . $hash . '" target="slider">
                <img class="bd-highlight m-1" title="котята норвежской норвежский котенок норвежские лесные котята"
                    src="' . $mask_default_img . $hash . '/default.jpg" alt="норвежский котенок в подарок">
            </a>'; 

        }

        echo '</div>';

    } 

}