<?php

//include('src/controllers/Img_Controller.php');

class KittyWoker {

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

    private function get_list_of_Broods() {
            
        $list_of_broods = array(
            array(
                'id'   => '1',
                'name' => 'Помет "J"',
                'ref'  => 'headingBrood_J'
            ),
            array(
                'id'   => '2',
                'name' => 'Помет "K"',
                'ref'  => 'headingBrood_K'
            ),
            array(
                'id'   => '3',
                'name' => 'Общие фото',
                'ref'  => 'common'
            )
        );

        return $list_of_broods;

    }

    private function get_list_of_Common_Photo() {
            
        $list_of_common_photo_content = array(
            array(
                'id'            => '1',
                'name'          => '1.jpg',
                'kind_of_photo' => 'common',
                'path_template' => 'images/cats/kitty/{{cats_name_template}}/{{name}}'
            ),
            array(
                'id'            => '2',
                'name'          => '2.jpg',
                'kind_of_photo' => 'common',
                'path_template' => 'images/cats/kitty/{{cats_name_template}}/{{name}}'
            ),
            array(
                'id'            => '3',
                'name'          => '3.jpg',
                'kind_of_photo' => 'common',
                'path_template' => 'images/cats/kitty/{{cats_name_template}}/{{name}}'
            )
        ); 

        return $list_of_common_photo_content;

    }

    public function show_list_of_Broods() {

        $list_of_broods = $this->get_list_of_Broods();
        $count          = count($list_of_broods);

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_broods = $list_of_broods[$index];
            $is_first_iteration = ($index == 0) ? 'active' : '';
            $name               = $instance_of_broods['name'];
            $ref                = $instance_of_broods['ref'];
 
            echo
            '<a style="font-size: 1em;" class="mx-auto nav-link ' . $is_first_iteration . '" id="v-pills-' . $ref . '-tab"
                data-toggle="pill" href="#v-pills-' . $ref . '" role="tab" aria-controls="v-pills-' . $ref . '"
                    aria-selected="true">' . $name . '</a>';;

        }

    }

    private function show_Owl_Content($id, $list_of_img_content) {

        $parametrs = array(
            'list_of_img_content' => $list_of_img_content,
            'img_id'              => $id,
            'id_template'         => '{{cats_name_template}}',
            'img_name_template'   => '{{name}}'
        );

        return $this->img_controller->show_Owl_Content($parametrs);

    }

    private function show_Fancybox_Content($id, $list_of_img_content) {

        $parametrs = array(
            'list_of_img_content' => $list_of_img_content,
            'img_id'              => $id,
            'id_template'         => '{{cats_name_template}}',
            'alias_template'      => 'cats_name_template',
            'img_name_template'   => '{{name}}'
        );

        return $this->img_controller->show_Fancybox_Content($parametrs);

    }

    public function show_Common_Photo() {

        //$list_of_common_photo_content = $this->get_list_of_Common_Photo();
        //$count                        = count($list_of_common_photo_content);

        //for ($index = 0; $index < $count; $index ++) {

        //    $instance_of_common_photo_content = $list_of_common_photo_content[$index];

        //    $id            = $instance_of_common_photo_content['id'];
        //    $name          = $instance_of_common_photo_content['name'];
        //   $kind_of_photo = $instance_of_common_photo_content['kind_of_photo'];

        //    echo 
        //    '<div class="owl-carousel" style="background-color: rgba(248, 249, 250, 0);">
        //        ' . $this->show_Owl_Content($kind_of_photo, $this->get_list_of_Common_Photo()) . '
        //    </div>';

        //}

        echo $this->show_Owl_Content("common", $this->get_list_of_Common_Photo());

    }

    public function show_Common_Photo_Fancybox() {

        echo $this->show_Fancybox_Content("common", $this->get_list_of_Common_Photo());

    }

}