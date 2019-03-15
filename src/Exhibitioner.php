<?php

class Exhibitioner {

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

        $list_of_img_content = $this->get_list_of_Img_Content();
        $count               = count($list_of_img_content);
        $result              = '';

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_content = $list_of_img_content[$index];

            $name          = $instance_of_content['name'];
            $path_template = $instance_of_content['path_template'];

            $path = str_replace('{{name}}', $name, str_replace('{{exhibition_id}}', $exhibition_id, $path_template));

            $result = $result .  
            '<div class="item">
                <img title="норвежские лесные котята" src="' . $path . '" alt="продажа норвежской">
            </div>';

        }
        return $result;
    }

    private function show_Fancybox_Content($exhibition_id) {

        $list_of_img_content = $this->get_list_of_Img_Content();
        $count               = count($list_of_img_content);
        $result              = '';

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_content = $list_of_img_content[$index];

            $name          = $instance_of_content['name'];
            $path_template = $instance_of_content['path_template'];

            $path = str_replace('{{name}}', $name, str_replace('{{exhibition_id}}', $exhibition_id, $path_template));

            $result = $result .  
            '<div class="col-lg-3 col-md-4 col-6 thumb">
                <a data-fancybox="exhibition' . $exhibition_id . '" href="' . $path . '">
                    <img class="img-fluid" title="Норвежские лесные красавицы"
                        src="' . $path . '" alt="норвежские лесные красавицы">
                </a>
            </div>';

        }

        return $result;

    }

    public function show_Exhibitions($accordion_name) {

        $list_of_exhibitions = $this->get_list_of_Exhibitions();
        $count               = count($list_of_exhibitions);

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_exhibitions = $list_of_exhibitions[$index];
            $id                      = $instance_of_exhibitions['id'];
            $title                   = $instance_of_exhibitions['title'];

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
                <div id="collapseExhibitions' . $id . '" class="collapse" aria-labelledby="headingExhibitions' . $id . '" data-parent="' . $accordion_name . '">
                    <div class="card-body container">                        
                        <div class="container">
                            <div class="owl-carousel">
                                ' . $this->show_Owl_Content($id) . '
                            </div>

                            <div class="container border border-primary">
                                <div class="row">
                                    ' . $this->show_Fancybox_Content($id) . '
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>';

        }

    } 

}