<?php

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
                'id'              => '1',
                'name'            => '1.jpg',
                'kind_of_photo'   => 'common',
                '_name_of_kitten' => '',
                '_name_of_brood'  => '',
                '_name_of_period' => '',
                'path_template'   => 'images/cats/kitty/{{cats_name_template}}/{{name}}'
            ),
            array(
                'id'              => '2',
                'name'            => '2.jpg',
                'kind_of_photo'   => 'common',
                '_name_of_kitten' => '',
                '_name_of_brood'  => '',
                '_name_of_period' => '',
                'path_template'   => 'images/cats/kitty/{{cats_name_template}}/{{name}}'
            ),
            array(
                'id'              => '3',
                'name'            => '3.jpg',
                'kind_of_photo'   => 'common',
                '_name_of_kitten' => '',
                '_name_of_brood'  => '',
                '_name_of_period' => '',
                'path_template'   => 'images/cats/kitty/{{cats_name_template}}/{{name}}'
            ),
            array(
                'id'              => '4',
                'name'            => '1.jpg',
                'kind_of_photo'   => 'broods',
                '_name_of_kitten' => 'Juan',
                '_name_of_brood'  => 'J',
                '_name_of_period' => 'twoWeeks',
                'path_template'   => 'images/cats/kitty/{{cats_name_template}}/{{name}}'
            ),
            array(
                'id'              => '5',
                'name'            => '2.jpg',
                'kind_of_photo'   => 'broods',
                '_name_of_kitten' => 'Juan',
                '_name_of_brood'  => 'J',
                '_name_of_period' => 'twoWeeks',
                'path_template'   => 'images/cats/kitty/{{cats_name_template}}/{{name}}'
            ),
            array(
                'id'              => '6',
                'name'            => '3.jpg',
                'kind_of_photo'   => 'broods',
                '_name_of_kitten' => 'Juan',
                '_name_of_brood'  => 'J',
                '_name_of_period' => 'twoWeeks',
                'path_template'   => 'images/cats/kitty/{{cats_name_template}}/{{name}}'
            )
        ); 

        return $list_of_common_photo_content;

    }

    private function get_list_of_Periods() {

        $list_of_periods = array(
            array(
                'id'          => '1',
                'name'        => 'twoWeeks',
                'descryption' => 'Две недели'
            ),
            array(
                'id'          => '2',
                'name'        => 'OneMonth',
                'descryption' => 'Один месяц'
            ),
            array(
                'id'          => '3',
                'name'        => 'TwoMonth',
                'descryption' => 'Три месяца'
            )
        ); 

        return $list_of_periods;

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
                    aria-selected="true">' . $name . '</a>';

        }

    }

    public function show_list_of_Periods($name_of_Kitten) {

        $list_of_periods = $this->get_list_of_Periods();
        $count           = count($list_of_periods);

        echo '<div class="nav nav-fill nav-pills" id="v-pills-tab-"' . $name_of_Kitten . ' role="tablist">';

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_periods = $list_of_periods[$index];

            $name        = $instance_of_periods['name'];
            $descryption = $instance_of_periods['descryption'];

            $full_name_of_period = $name_of_Kitten . '-' . $name;
            $is_active           = ($index == 0) ? 'active' : '';

            echo 
            '<a class="nav-link ' . $is_active . '" id="v-pills-' . $full_name_of_period . '-tab"
                data-toggle="pill" href="#v-pills-' . $full_name_of_period . '"
                role="tab" aria-controls="v-pills-' . $full_name_of_period . '"
                aria-selected="true">' . $descryption . '</a>';
        }

        echo '</div>';

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

    public function show_Kitten_Photo_Owl($name_of_broods, $name_of_kitten, $name_of_period) {

        $cats_name_template = $name_of_broods . '/' . $name_of_kitten . '/' . $name_of_period;

        echo $this->show_Owl_Content($cats_name_template, $this->get_list_of_Common_Photo());

    }

    public function show_Common_Photo_Owl() {

        echo $this->show_Owl_Content("common", $this->get_list_of_Common_Photo());

    }

    public function show_Kitten_Photo_Fancybox($name_of_broods, $name_of_kitten, $name_of_period) {

        $cats_name_template = $name_of_broods . '/' . $name_of_kitten . '/' . $name_of_period;

        echo $this->show_Fancybox_Content($cats_name_template, $this->get_list_of_Common_Photo());

    }

    public function show_Common_Photo_Fancybox() {

        echo $this->show_Fancybox_Content("common", $this->get_list_of_Common_Photo());

    }

}