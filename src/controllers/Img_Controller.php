<?php

class Img_Controller {

    public function show_Owl_Content($list_of_img_content, $img_id, $id_template, $img_name_template) {

        $count  = count($list_of_img_content);
        $result = '';

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_content = $list_of_img_content[$index];

            $name          = $instance_of_content['name'];
            $path_template = $instance_of_content['path_template'];

            $path = str_replace($img_name_template, $name, str_replace($id_template, $img_id, $path_template));

            $result = $result .  
            '<div class="item">
                <img title="норвежские лесные котята" src="' . $path . '" alt="продажа норвежской">
            </div>';

        }
        return $result;
    }

    public function show_Fancybox_Content($list_of_img_content, $img_id, $id_template, $alias_template, $img_name_template) {

        $count  = count($list_of_img_content);
        $result = '';

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_content = $list_of_img_content[$index];

            $name          = $instance_of_content['name'];
            $path_template = $instance_of_content['path_template'];

            $path = str_replace($img_name_template, $name, str_replace($id_template, $img_id, $path_template));

            $result = $result .  
            '<div class="col-lg-3 col-md-4 col-6 thumb">
                <a data-fancybox="' . $alias_template . $img_id . '" href="' . $path . '">
                    <img class="img-fluid" title="Норвежские лесные красавицы"
                        src="' . $path . '" alt="норвежские лесные красавицы">
                </a>
            </div>';

        }

        return $result; 

    }

}