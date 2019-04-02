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

        $list_of_exhibitions = array();

        $exhibitions = R::findCollection('exhibitions');

        while ($pice_of_exhibitions = $exhibitions->next()) {
            $list_of_exhibitions[] = array(
                'id'                => $pice_of_exhibitions['id'],
                'short_descryption' => $pice_of_exhibitions['short_descryption'],
                'long_descryption'  => $pice_of_exhibitions['long_descryption']
            );
        }
    
        return $list_of_exhibitions;

    }

    /* private function get_list_of_Exhibitions() {

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

    } */

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

    private function show_Editor_Form($id) {

        if (!$this->have_Rules()) {
            return '';
        } else {
            return 
            '<form id="my-dropzone" action="/Ixtlan-php/src/DB/exhibitioner_CRUD/img_CRUD/img_add.php" class="dropzone container container-fluid">
                <input type="hidden" name="form_id" value="' . $id . '">
            </form>';
        }

    }

    private function show_Eexhibition_Forms($id) {
        
        if (!$this->have_Rules()) {
            return '';
        } else {
            return 
            '<form class="container container-fluid" action="/Ixtlan-php/src/DB/exhibitioner_CRUD/exhibition_CRUD/exhibition_update.php" method="post">
                <input type="hidden" name="form_id" value="' . $id . '">
                <button class="btn btn-sm btn-block btn-outline-info my-1" type="submit">Сохранить</button>
            </form>
            <form class="container container-fluid" action="/Ixtlan-php/src/DB/exhibitioner_CRUD/img_CRUD/img_delete_group.php" method="post">
                <input type="hidden" name="form_id" value="' . $id . '">
                <button class="btn btn-sm btn-block btn-outline-info my-1" type="submit">Удалить отмеченные изображения</button>
            </form>
            <form class="container container-fluid" action="/Ixtlan-php/src/DB/exhibitioner_CRUD/exhibition_CRUD/exhibition_delete.php" method="post">
                <input type="hidden" name="form_id" value="' . $id . '">
                <button class="btn btn-sm btn-block btn-outline-info my-1" type="submit">Удалить</button>
            </form>';
        }

    }

    private function show_Exhibition_Form() {

        if (!$this->have_Rules()) {
            return '';
        } else {
            return 
            '<button class="btn btn-sm btn-block btn-info my-1" type="button" data-toggle="collapse" data-target="#add_exhibition" aria-expanded="false" aria-controls="add_exhibition">
                Добавить выставку
            </button>
                  
            <form id="add_exhibition" class="container container-fluid collapse" method="post" action="/Ixtlan-php/src/DB/exhibitioner_CRUD/exhibition_CRUD/exhibition_add.php">

                <div class="modal-body"> 

                    <label for="short_descryption">Краткое описание выставки</label>
                    <textarea name="short_descryption" class="form-control" rows="3" required></textarea>

                    <label for="long_descryption">Полное описание выставки</label>
                    <textarea name="long_descryption" class="form-control" rows="11" required></textarea>

                    <button class="btn btn-sm btn-block btn-outline-info my-1" type="submit">Сохранить</button>
                                   
                </div>

            </form>';
        }

    }

    public function show_Exhibitions($accordion_name) {

        echo $this->show_Exhibition_Form();

        $list_of_exhibitions = $this->get_list_of_Exhibitions();
        $count               = count($list_of_exhibitions);

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_exhibitions = $list_of_exhibitions[$index];
            $id                      = $instance_of_exhibitions['id'];
            $short_descryption       = $instance_of_exhibitions['short_descryption'];
            $long_descryption        = $instance_of_exhibitions['long_descryption'];

            $is_show = ($index == 0) ? 'show' : '';

            echo
            '<div class="card">
                <div class="card-header" id="headingExhibitions' . $id . '">
                    <h5 class="text-center mb-0">
                        <button class="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                            data-target="#collapseExhibitions' . $id . '" aria-expanded="true" aria-controls="collapseExhibitions' . $id . '">
                            ' . $short_descryption . '
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
                                    ' . $this->show_Fancybox_Content($id) . $this->show_Editor_Form($id) . $this->show_Eexhibition_Forms($id) . '         
                                </div>
                            </div>

                            <div class="container jumbotron">
                                ' . $long_descryption . '
                            </div>

                        </div>
                    </div>
                </div>
            </div>';

        }

    } 

}