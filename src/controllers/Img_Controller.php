<?php

require_once 'src/rules/check_rules.php';

class Img_Controller {

    public function show_Owl_Img($table_name, $id_field_name, $id_field_value) {

        $result = '';
        $table  = R::findCollection($table_name, $id_field_name . ' = ?', array($id_field_value));

        while ($img = $table->next()) {

            $path = $img->path;

            $result = $result .  
            '<div class="item">
                <img title="норвежские лесные котята" src="' . $path . '" alt="продажа норвежской">
            </div>';

        }

        return $result;

    }

    public function show_Owl_Common_Photo($table_name) {

        $result = '';
        $table  = R::findCollection($table_name);

        while ($img = $table->next()) {

            $path = $img->path;

            $result = $result .  
            '<div class="item">
                <img title="норвежские лесные котята" src="' . $path . '" alt="продажа норвежской">
            </div>';

        }

        return $result;

    }

    public function show_Fancybox_Img($table_name, $id_field_name, $id_field_value, $action, $redirect, $readonly = false) {

        $result = '';
        $table  = R::findCollection($table_name, $id_field_name . ' = ?', array($id_field_value));

        $semaphor = true;
        if (!CHECK_RULES::ROOT()) {
            $semaphor = false;
        } else {
            if ($readonly) {
                $semaphor = false;
            } 
        }

        while ($img = $table->next()) {

            $path       = $img->path;
            $id         = $img->id;
            $checkboxes = (!$semaphor) ? '' : '<input style="top: 1em; left: 1em;" type="checkbox" class="position-absolute" name="checks[]" value="' . $id . '" group_id = "' . $id_field_value . '">';

            $result = $result .  
            '<div class="col-lg-3 col-md-4 col-6 thumb">
                <a data-fancybox="' . $id_field_value . '" href="' . $path . '">
                    <img class="img-fluid" title="Норвежские лесные красавицы"
                        src="' . $path . '" alt="норвежские лесные красавицы">
                </a>
                ' . $checkboxes . '
            </div>';

        }

        if (!$semaphor) {
            return $result;
        } else {
            return $result . '<button type="button" class="btn btn-sm btn-danger btn-block" data-toggle="modal" 
                data-target="#modalDeleteImg" group_id="' . $id_field_value . '">Удалить изображения</button>';
        }

    }

    public function show_Fancybox_Common_Photo() {

        $result = '';
        $table  = R::findCollection('imgcommon');

        $have_Rules = CHECK_RULES::ROOT();

        while ($img = $table->next()) {

            $path       = $img->path;
            $id         = $img->id;
            $checkboxes = '<input style="top: 1em; left: 1em;" type="checkbox" class="position-absolute" name="checks[]" value="' . $id . '" group_id="common_id">';

            $result = $result .  
            '<div class="col-lg-3 col-md-4 col-6 thumb">
                <a data-fancybox="common" href="' . $path . '">
                    <img class="img-fluid" title="Норвежские лесные красавицы"
                        src="' . $path . '" alt="норвежские лесные красавицы">
                </a>
                ' . (($have_Rules) ? $checkboxes : '') . '
            </div>';

        }

        return 
        '<div class="form-row">' 
            . $result . 
        '</div>' . (($have_Rules) ? 
            '<button type="button" class="btn btn-sm btn-danger btn-block" data-toggle="modal" 
                data-target="#modalDeleteCommonImg" group_id="common_id">Удалить изображения</button>' : '');

    }

    public function show_img_Editor_Form($id, $button_descryption, $action) {

        if (!CHECK_RULES::ROOT()) {
            return '';
        } else {
            return 
            '<div class="container container-fluid border border-info rounded">
                <span class="bg-info d-flex justify-content-center text-dark mt-2">' . $button_descryption . '</span>
                <form id="my-dropzone-' . $id . '" class="dropzone container container-fluid mb-2" action="' . $action . '"></form>
            </div>';
        }

    }

    public function show_delete_form($id, $button_text, $message_text) {

        return
        '<button data-toggle="modal" data-target="#' . $id . '" class="btn btn-bg btn-block btn-danger my-1">' . $button_text . '</button>'
            . $this->get_modal_delete_form($id, $button_text, $message_text);

    }

    private function get_modal_delete_form($id, $button_text, $message_text) {

        return
        '<div class="modal fade" id="' . $id . '" tabindex="-1" img_id="' . $id . '" role="dialog" aria-labelledby="Title' . $id . '" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">' . $button_text . '</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ' . $message_text . '
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Я передумала</button>
                        <button id="delete' . $id . '" type="button" class="btn btn-danger">Удалить</button>
                    </div>
                </div>
            </div>
        </div>';

    }

}