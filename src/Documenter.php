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

        $kindOfDocuments        = R::findCollection('kindofdocuments');
        $list_kind_of_Documents = array();
        
        while ($kind_of_Documents = $kindOfDocuments->next()) {
            $list_kind_of_Documents[] = array(
                'id'                => $kind_of_Documents['id'],
                'short_descryption' => $kind_of_Documents['short_descryption']
            );
        }

        return $list_kind_of_Documents;

    }

    private function have_Rules() {
        return true;
    }

    private function show_document_Editor_Form($id) {

        if (!$this->have_Rules()) {
            return '';
        } else {
            return 
            '<div class="container container-fluid border border-info rounded">
                <span class="bg-info d-flex justify-content-center text-dark mt-2">Добавить скан документа можно здесь</span>
                <form id="my-dropzone-kind-of-documents' . $id . '" class="dropzone container container-fluid mb-2" action="/Ixtlan-php/src/DB/document_CRUD/document_add.php"></form>
            </div>';
        }

    }

    private function show_kind_of_document_Form() {

        if (!$this->have_Rules()) {
            return '';
        } else {
            return 
            '<button class="btn btn-sm btn-block btn-info my-1" type="button" data-toggle="collapse" data-target="#add_kind_of_document" aria-expanded="false" aria-controls="add_kind_of_document">
                Добавить вид документа
            </button>
                  
            <form id="add_kind_of_document" class="container container-fluid collapse" method="post" action="/Ixtlan-php/src/DB/document_CRUD/kind_of_document_CRUD/kind_of_document_add.php">

                <div class="modal-body"> 

                    <label for="short_descryption">Краткое описание вида документа</label>
                    <textarea name="short_descryption" class="form-control" rows="3" required></textarea>

                    <button class="btn btn-sm btn-block btn-outline-info my-1" type="submit">Сохранить</button>
                                   
                </div>

            </form>';
        }

    }

    private function show_Eexhibition_Forms($id, $short_descryption) {
        
        if (!$this->have_Rules()) {
            return '';
        } else {
            return     
            '<div class="container container-fluid border border-info rounded mt-2">
                <span class="bg-info d-flex justify-content-center text-dark mt-2">Отредактировать описания вида документа можно здесь</span>
                <form class="container container-fluid" action="/Ixtlan-php/src/DB/document_CRUD/kind_of_document_CRUD/kind_of_document_edit.php" method="post">
                    <input type="hidden" name="form_id" value="' . $id . '">
                    <div class="form-group">
                        <label for="short_descryption">Краткое описание типа документа:</label>
                        <textarea name="short_descryption" class="form-control" rows="3" required>' . $short_descryption . '</textarea>
                    </div>
                    <button class="btn btn-primary btn-sm btn-block btn-outline-info my-1" type="submit">Сохранить</button>
                </form>
                <form class="container container-fluid" action="/Ixtlan-php/src/DB/document_CRUD/kind_of_document_CRUD/kind_of_document_delete.php" method="post">
                    <input type="hidden" name="form_id" value="' . $id . '">
                    <button class="btn btn-sm btn-block btn-outline-info my-1" type="submit">Удалить</button>
                </form>
            </div>';

        }

    }

    public function show_Documents($accordion_name) {

        echo $this->show_kind_of_document_Form();

        $list_kind_of_documents = $this->get_List_Kind_Of_Documents();
        $count                  = count($list_kind_of_documents);

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_kind_of_documents = $list_kind_of_documents[$index];
            $id                = $instance_of_kind_of_documents['id'];
            $short_descryption = $instance_of_kind_of_documents['short_descryption'];

            $is_show = ($index == 0) ? 'show' : '';

            echo 
            '<div class="card">
                <div class="card-header" id="headingCertificates' . $id . '">
                    <h5 class="text-center mb-0">
                        <button class="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                            data-target="#collapseCertificates' . $id . '" aria-expanded="true" aria-controls="headingCertificates' . $id . '">
                            ' . $short_descryption . '
                        </button>
                    </h5>
                </div>

                <div id="collapseCertificates' . $id . '" class="collapse ' . $is_show . '" aria-labelledby="headingCertificates' . $id . '" data-parent="' . $accordion_name . '">
                    <div class="card-body">
                        <div class="container">
                            <div class="container">
                                <div class="owl-carousel">
                                    ' . $this->img_controller->show_Owl_Img('imgkindofdocument', 'kindofdocuments_id', $id) . '
                                </div>
                            </div>

                            <div class="container">
                                <div class="row">
                                ' . $this->img_controller->show_Fancybox_Img('imgkindofdocument', 'kindofdocuments_id', $id, 
                                        '/Ixtlan-php/src/DB/document_CRUD/document_delete_group.php')
                                    . $this->show_document_Editor_Form($id) 
                                    . $this->show_Eexhibition_Forms($id, $short_descryption) . '
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>';

        }

    } 

    public function show_Init_Dropzones() {

        $kindofdocuments = R::findCollection('kindofdocuments');

        while ($kind_of_documents = $kindofdocuments->next()) {

            $id = $kind_of_documents['id'];
            echo 
            'Dropzone.options["myDropzoneKindOfDocuments' . $id . '"] = {
                init: function() {
                    this.on("sending", function(file, xhr, formData) {
                        formData.append("kindofdocuments_id", "' . $id . '");
                    });
                }
            }
            ';

        }

    }

}