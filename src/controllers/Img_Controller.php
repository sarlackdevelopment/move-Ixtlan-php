<?php

class Img_Controller {

    private function have_Rules() {
        return true;
    }

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

    public function show_Fancybox_Img($table_name, $id_field_name, $id_field_value, $action, $redirect, $readonly = false) {

        $result = '';
        $table  = R::findCollection($table_name, $id_field_name . ' = ?', array($id_field_value));

        $semaphor = true;
        if (!$this->have_Rules()) {
            $semaphor = false;
        } else {
            if ($readonly) {
                $semaphor = false;
            } 
        }

        while ($img = $table->next()) {

            $path       = $img->path;
            $id         = $img->id;
            $checkboxes = (!$semaphor) ? '' : '<input style="top: 1em; left: 1em;" type="checkbox" class="position-absolute" name="checks[]" value="' . $id . '">';

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
            return
            '<form action="' . $action . '" method="post">
                <div class="form-row">
                    ' . $result . '
                </div>
                <input type="hidden" name="redirect" value="' . $redirect . '">
                <button class="btn btn-sm btn-block btn-outline-info my-1" type="submit">Удалить отмеченные изображения</button>
            </form>';
        }

    }

    public function show_img_Editor_Form($id, $button_descryption, $action) {

        if (!$this->have_Rules()) {
            return '';
        } else {
            return 
            '<div class="container container-fluid border border-info rounded">
                <span class="bg-info d-flex justify-content-center text-dark mt-2">' . $button_descryption . '</span>
                <form id="my-dropzone-' . $id . '" class="dropzone container container-fluid mb-2" action="' . $action . '"></form>
            </div>';
        }

    }

}