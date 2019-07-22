<?php

include_once('src/controllers/Img_Controller.php');

class Videomaker {

    private $img_controller;

    public function get() {
        return $this->img_controller;
    }

    public function set($img_controller) {
        $this->img_controller = $img_controller;
    }

    function __construct() {
        $this->img_controller = new Img_Controller();
    }

    private function get_list_of_Video() {
        
        $video         = R::findCollection('video');
        $list_of_Video = array();
    
        while ($pice_of_video = $video->next()) {
            $list_of_Video[] = array(
                'id'   => $pice_of_video['id'],
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
                '<button class="btn btn-sm btn-block btn-info my-1" type="button" data-toggle="collapse" data-target="#add_video" aria-expanded="false" aria-controls="add_video">
                    Добавить видео
                </button>
                <form id="add_video" class="collapse" action="/Ixtlan-php/src/DB/video_CRUD/video_add.php" method="post">
                    <div class="modal-body">                                   
                        <label for="Caption">Ссылка на видео</label>
                        <input class="form-control" type="text" name="ref_video" placeholder="Скопируй ссылку на видео">                                   
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-sm btn-block btn-info my-1" type="submit">Сохранить</button>
                    </div>
                </form>';
        }
        
    }

    private function show_check_boxes($id) {

        if (!$this->have_Rules()) {
            return '';
        } else {
            return (!$this->have_Rules()) ? '' : '<input style="top: 0.5em; left: 0.5em;" 
                type="checkbox" class="position-absolute" this_video="true" name="checks[]" value="' . $id . '">';
        }

    } 

    public function show_Video_Gallery() {

        $list_of_video = $this->get_list_of_Video();

        $count            = count($list_of_video);
        $mask_video       = 'https://www.youtube.com/embed/';
        $mask_default_img = 'http://img.youtube.com/vi/';

        echo $this->show_form_for_add_video();
        echo (!$this->have_Rules()) ? 
            '<div class="d-flex flex-row flex-wrap bd-highlight justify-content-center">' :
                '<form id="delete_form_video" class="container container-fluid d-flex flex-row flex-wrap bd-highlight justify-content-center"
                 action="/Ixtlan-php/src/DB/video_CRUD/video_delete_group.php" method="post">';

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_video = $list_of_video[$index];
            $hash              = $instance_of_video['hash'];
            $id                = $instance_of_video['id'];

            if ($index == 0) {
                echo 
                '<div class="container-fluid embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="' . $mask_video . $hash . '" allowfullscreen name="slider"></iframe>
                </div>';
            }

            echo
            '<div class="position-relative">
                <a href="' . $mask_video . $hash . '" target="slider">
                    <img class="bd-highlight m-1" title="котята норвежской норвежский котенок норвежские лесные котята"
                        src="' . $mask_default_img . $hash . '/default.jpg" alt="норвежский котенок в подарок">
                </a>
                ' . $this->show_check_boxes($id) . '
            </div>'; 

        }

        if ($this->have_Rules()) {
            echo '</form><button type="button" class="btn btn-sm btn-danger btn-block mt-1" data-toggle="modal" data-target="#modalDeleteVideo">Удалить</button>' . 
                $this->get_modal_delete_pice_of_news();
        } else {
            echo '</div>';
        }

    } 

    // + Удаление выставки

    private function get_modal_delete_pice_of_news() {

        return
        '<div class="modal fade" id="modalDeleteVideo" tabindex="-1" role="dialog" aria-labelledby="modalDeleteVideoTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Удаление видео</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Удаление видео приведет к удалению видео. Ваш капитан.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Я передумала</button>
                        <button id="delete_video" class="btn btn-danger">Я все поняла. Удалить</button>
                    </div>
                </div>
            </div>
        </div>';

    }

}