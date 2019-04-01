<?php

include('src/controllers/Img_Controller.php');

class Exhibitioner {

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

    private function get_list_of_Exhibitions() {

        $list_of_exhibitions = array(
            array(
                'id' => '1',
                'title' => 'Воронеж. 27-28 октября 2018. Выставка "Осенние смотрины" от КЛК Люкс.'
            ),
            array(
                'id' => '2',
                'title' => 'Воронеж. 5-7 октября 2018. Выставка "Звезда Черноземья".'
            ),
            array(
                'id' => '3',
                'title' => 'Москва. 7-8 июля 2018.'
            ),
            array(
                'id' => '4',
                'title' => 'Москва. 16-17 июня 2018.'
            )
        );

        return $list_of_exhibitions;

    }

    private function get_list_of_Img_Content() {

        $list_of_img_content = array(
            array(
                'id'            => '1',
                'name'          => '1.jpg',
                'path_template' => 'images/Exhibitions/Exhibitions{{exhibition_id}}/large/{{name}}'
            ),
            array(
                'id'            => '2',
                'name'          => '2.jpg',
                'path_template' => 'images/Exhibitions/Exhibitions{{exhibition_id}}/large/{{name}}'
            ),
            array(
                'id'            => '3',
                'name'          => '3.jpg',
                'path_template' => 'images/Exhibitions/Exhibitions{{exhibition_id}}/large/{{name}}'
            )
        );

        return $list_of_img_content;

    }

    private function show_Owl_Content($exhibition_id) {

        $parametrs = array(
            'list_of_img_content' => $this->get_list_of_Img_Content(),
            'img_id'              => $exhibition_id,
            'id_template'         => '{{exhibition_id}}',
            'img_name_template'   => '{{name}}'
        );

        return $this->img_controller->show_Owl_Content($parametrs);

    }

    private function show_Fancybox_Content($exhibition_id) {

        $parametrs = array(
            'list_of_img_content' => $this->get_list_of_Img_Content(),
            'img_id'              => $exhibition_id,
            'id_template'         => '{{exhibition_id}}',
            'alias_template'      => 'exhibition',
            'img_name_template'   => '{{name}}'
        );

        return $this->img_controller->show_Fancybox_Content($parametrs);

    }

    private function have_Rules() {
        return true;
    }

    /* private function show_Editor_Form() {

        if (!$this->have_Rules()) {
            return '';
        } else {
            return 
            '<form method="post" enctype="multipart/form-data" class="m-1 container container-fluid jumbotron" action="/Ixtlan-php/src/DB/exhibitioner_CRUD/img_CRUD/img_add.php">                                
                <div class="form-group-row">
                    <label for="choice_file">Выбери изображения для добавления</label>
                    <input id="choice_file" class="form-control-file" type="file" name="images[]" multiple" accept="image/*,image/jpeg">
                </div> 
                <button class="btn btn-primary btn-block my-1" type="submit">Сохранить изоражения</button> 
            </form>';
        }

    } */

    private function show_Editor_Form() {

        if (!$this->have_Rules()) {
            return '';
        } else {
            return 
            '<form action="/Ixtlan-php/src/DB/exhibitioner_CRUD/img_CRUD/img_add.php" class="dropzone container container-fluid">
                <button class="btn btn-primary btn-block my-1" type="submit">Сохранить изоражения</button>
            </form>';
        }

    }

    public function show_Exhibitions($accordion_name) {

        $list_of_exhibitions = $this->get_list_of_Exhibitions();
        $count               = count($list_of_exhibitions);

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_exhibitions = $list_of_exhibitions[$index];
            $id                      = $instance_of_exhibitions['id'];
            $title                   = $instance_of_exhibitions['title'];

            $is_show = ($index == 0) ? 'show' : '';

            echo
            '<div class="card">
                <div class="card-header" id="headingExhibitions' . $id . '">
                    <h5 class="text-center mb-0">
                        <button class="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                            data-target="#collapseExhibitions' . $id . '" aria-expanded="true" aria-controls="collapseExhibitions' . $id . '">
                            ' . $title . '
                        </button>
                    </h5>
                </div>
                <div id="collapseExhibitions' . $id . '" class="collapse ' . $is_show . '" aria-labelledby="headingExhibitions' . $id . '" data-parent="' . $accordion_name . '">
                    <div class="card-body container">                        
                        <div class="container">
                            <div class="owl-carousel">
                                ' . $this->show_Owl_Content($id) . '
                            </div>

                            <div class="container alert alert-info">
                                <div class="row">
                                    ' . $this->show_Fancybox_Content($id) . $this->show_Editor_Form() . '         
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>';

        }

    } 

}