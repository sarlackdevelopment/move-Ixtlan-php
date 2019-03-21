<?php

include('src/controllers/Img_Controller.php');

class CatsShower {

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

    private function get_list_of_Img_Content() {

        $list_of_img_content = array(
            array(
                'id'            => '1',
                'name'          => '1.jpg',
                'cats_name'     => 'Ancalime',
                'path_template' => 'images/cats/female/{{cats_name_template}}/{{name}}'
            ),
            array(
                'id'            => '2',
                'name'          => '2.jpg',
                'cats_name'     => 'Ancalime',
                'path_template' => 'images/cats/female/{{cats_name_template}}/{{name}}'
            ),
            array(
                'id'            => '3',
                'name'          => '3.jpg',
                'cats_name'     => 'Ancalime',
                'path_template' => 'images/cats/female/{{cats_name_template}}/{{name}}'
            )
        );

        return $list_of_img_content;

    }

    private function get_list_of_Female_Cats() {

        $list_of_female_cats = array(
            array(
                'id'                => '1',
                'name'              => 'Ancalime',
                'gender'            => 'female',
                'short_descryption' => 'Ch. Forest-Elf Ankalime (окрас n 22 03)',
                'long_descryption'  => 'Привет! Я Ankalime (для своих Тайга), а тебе хорошо бы
                    поберечься если я голодная.
                    Возможно я уже у тебя за спиной. В моих глазах зелень хвои и
                    изумрудного льда. Мою шерсть облизывают северные ветра. Метель
                    до звезд, а мне хоть бы что. Свет полярного сияния ведет меня
                    туда где я всегда буду ждать тебя.'
            ),
            array(
                'id'                => '2',
                'name'              => 'Arvel',
                'gender'            => 'female',
                'short_descryption' => 'Ch. Forest-Elf Arvel (окрас n 22 09)',
                'long_descryption'  => 'Меня зовут <mark>Arvel</mark> (для своих <mark>Фрея</mark>),
                    что в переводе с эльфийского языка
                    Толкина значит
                    «благородная дева». Я совершенно спокойная кошка, люблю спать и
                    ласкаться,
                    но силой меня не удержишь – я прихожу только тогда, когда сама
                    считаю
                    нужным, как и положено благородной даме. Вывести меня из себя
                    невозможно,
                    ведь если мне что-то не нравится, я лучше уйду вместо того,
                    чтобы
                    возмущаться. <mark>Длинный хвост</mark>, изумительные
                    изумрудные глаза, высокие
                    мускулистые ноги, красивый <mark>мраморный окрас</mark> – всё
                    при мне!'
            )
        );

        return $list_of_female_cats;

    }

    private function show_Owl_Content($id) {

        $parametrs = array(
            'list_of_img_content' => $this->get_list_of_Img_Content(),
            'img_id'              => $id,
            'id_template'         => '{{cats_name_template}}',
            'img_name_template'   => '{{name}}'
        );

        return $this->img_controller->show_Owl_Content($parametrs);

    }

    private function show_Fancybox_Content($id) {

        $parametrs = array(
            'list_of_img_content' => $this->get_list_of_Img_Content(),
            'img_id'              => $id,
            'id_template'         => '{{cats_name_template}}',
            'alias_template'      => 'cats_name_template',
            'img_name_template'   => '{{name}}'
        );

        return $this->img_controller->show_Fancybox_Content($parametrs);

    }

    public function show_Cats_Females($accordion_name) {

        $list_of_female_cats = $this->get_list_of_Female_Cats();
        $count               = count($list_of_female_cats);

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_female_cats = $list_of_female_cats[$index];

            $id                = $instance_of_female_cats['id'];
            $name              = $instance_of_female_cats['name'];
            $gender            = $instance_of_female_cats['gender'];
            $short_descryption = $instance_of_female_cats['short_descryption'];
            $long_descryption  = $instance_of_female_cats['long_descryption'];

            $postfix = $gender . $id;
            $is_show = ($index == 0) ? 'show' : '';

            echo
            '<article class="card">
                <header class="card-header" id="headingCats' . $postfix . '">
                    <h5 class="mb-0 text-center">
                        <button class="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                            data-target="#collapseCats' . $postfix . '" aria-expanded="true" aria-controls="collapseCats' . $postfix . '">
                            ' . $short_descryption . '
                        </button>
                    </h5>
                </header>

                <div id="collapseCats' . $postfix . '" class="collapse ' . $is_show . '" aria-labelledby="headingCats' . $postfix . '" data-parent="' . $accordion_name . '">
                    <div class="card-body">
                        <div class="container">
                            <div class="container">

                                <hr>
                                <div class="owl-carousel">
                                    ' . $this->show_Owl_Content($name) . '
                                </div>
                                <hr>

                            </div>
                            <div class="container">

                                <div class="row">
                                    ' . $this->show_Fancybox_Content($name) . '
                                </div>
                                <hr>

                            </div>

                            <div class="container">
                                <div class="jumbotron">
                                    ' . $long_descryption . '
                                    <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" 
                                        data-target="#Cat' . $postfix  . '">
                                        ...
                                    </button>
                                </div>

                                <div class="modal fade" id="Cat' . $postfix  . '" tabindex="-1" role="dialog"
                                    aria-labelledby="CatTitle' . $postfix  . '" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="CatTitle' . $postfix  . '">Подробнее обо
                                                    мне</h5>
                                                <button type="button" class="close" data-dismiss="modal"
                                                    aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                ' . $long_descryption . '
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>';

        }

    }

}