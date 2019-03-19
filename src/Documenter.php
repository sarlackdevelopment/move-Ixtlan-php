<?php

class Documenter {

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

    private function get_List_Kind_Of_Documents() {

        $list_kind_of_documents = array(
            array(
                'id'    => '1',
                'title' => 'Родословные.'
            ),
            array(
                'id'    => '2',
                'title' => 'Дипломы и сертификаты..'
            )
        );

        return $list_kind_of_documents;

    }

    private function get_list_of_Img_Content_Breeds() {

        $list_of_img_content = array(
            array(
                'id'                   => '1',
                'name'                 => '1.jpg',
                'path_template'        => 'images/Certificates/{{name}}',
                'kind_of_documents_id' => '1'
            ),
            array(
                'id'                   => '2',
                'name'                 => '2.jpg',
                'path_template'        => 'images/Certificates/{{name}}',
                'kind_of_documents_id' => '1'
            ),
            array(
                'id'                   => '3',
                'name'                 => '3.jpg',
                'path_template'        => 'images/Certificates/{{name}}',
                'kind_of_documents_id' => '1'
            )
        );

        return $list_of_img_content;

    }

    private function get_list_of_Img_Content_Diploma() {

        $list_of_img_content = array(
            array(
                'id'                   => '1',
                'name'                 => '4.jpg',
                'path_template'        => 'images/Certificates/{{name}}',
                'kind_of_documents_id' => '2'
            ),
            array(
                'id'                   => '2',
                'name'                 => '5.jpg',
                'path_template'        => 'images/Certificates/{{name}}',
                'kind_of_documents_id' => '2'
            ),
            array(
                'id'                   => '3',
                'name'                 => '6.jpg',
                'path_template'        => 'images/Certificates/{{name}}',
                'kind_of_documents_id' => '2'
            ),
            array(
                'id'                   => '4',
                'name'                 => '7.jpg',
                'path_template'        => 'images/Certificates/{{name}}',
                'kind_of_documents_id' => '2'
            )
        );

        return $list_of_img_content;

    }

    private function show_Owl_Content_Breeds($kind_of_document_id) {

        $parametrs = array(
            'list_of_img_content' => $this->get_list_of_Img_Content_Breeds(),
            'img_id'              => $kind_of_document_id,
            'id_template'         => '',
            'img_name_template'   => '{{name}}'
        );

        return $this->img_controller->show_Owl_Content($parametrs);

    }

    private function show_Owl_Content_Diploma($kind_of_document_id) {

        $parametrs = array(
            'list_of_img_content' => $this->get_list_of_Img_Content_Diploma(),
            'img_id'              => $kind_of_document_id,
            'id_template'         => '',
            'img_name_template'   => '{{name}}'
        );

        return $this->img_controller->show_Owl_Content($parametrs);

    }

    private function show_Fancybox_Content_Breeds($id) {

        $parametrs = array(
            'list_of_img_content' => $this->get_list_of_Img_Content_Breeds(),
            'img_id'              => $id,
            'id_template'         => '',
            'alias_template'      => '',
            'img_name_template'   => '{{name}}'
        );

        return $this->img_controller->show_Fancybox_Content($parametrs);

    }

    private function show_Fancybox_Content_Diploma($id) {

        $parametrs = array(
            'list_of_img_content' => $this->get_list_of_Img_Content_Diploma(),
            'img_id'              => $id,
            'id_template'         => '',
            'alias_template'      => '',
            'img_name_template'   => '{{name}}'
        );

        return $this->img_controller->show_Fancybox_Content($parametrs);

    }

    public function show_Documents($accordion_name) {

        $list_kind_of_documents = $this->get_List_Kind_Of_Documents();
        $count                  = count($list_kind_of_documents);

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_kind_of_documents = $list_kind_of_documents[$index];
            $id    = $instance_of_kind_of_documents['id'];
            $title = $instance_of_kind_of_documents['title'];

            $owl_content      = ($id == '1') ? $this->show_Owl_Content_Breeds($id) : $this->show_Owl_Content_Diploma($id);
            $fancybox_content = ($id == '1') ? $this->show_Fancybox_Content_Breeds($id) : $this->show_Fancybox_Content_Diploma($id);

            echo 
            '<div class="card">
                <div class="card-header" id="headingCertificates' . $id . '">
                    <h5 class="text-center mb-0">
                        <button class="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                            data-target="#collapseCertificates' . $id . '" aria-expanded="true" aria-controls="headingCertificates' . $id . '">
                            ' . $title . '
                        </button>
                    </h5>
                </div>

                <div id="collapseCertificates' . $id . '" class="collapse" aria-labelledby="headingCertificates' . $id . '" data-parent="' . $accordion_name . '">
                    <div class="card-body">
                        <div class="container">
                            <div class="container">
                                <div class="owl-carousel">
                                    ' . $owl_content . '
                                </div>
                            </div>

                            <div class="container">
                                <div class="row">
                                    ' . $fancybox_content . '
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>';

        }

    } 

}