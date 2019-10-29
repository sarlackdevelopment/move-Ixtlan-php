<?php

require_once '../../../configDB.php';
require_once '../../../check_rules.php';

$json_obj = json_decode(file_get_contents('php://input'));

$kitty_id  = $json_obj->kitty_id; 
$period_id = explode('_', $json_obj->period_id)[1];

$paths = [];

$kitty = R::findOne('kitty', 'where id = ?', array($kitty_id));
$imgs  = R::findCollection('imgkitty', 'kitty_id = ? and periods_id = ?', array($kitty_id, $period_id));

$have_rules = CHECK_RULES::ROOT();

while ($img = $imgs->next()) {

    if ($have_rules) {
        $checkbox = '<input style="top: 1em; left: 1em;" type="checkbox" class="position-absolute" name="checks[]" value="' . $img['id'] . '" group_id="' . $period_id . $kitty_id . '">';
    } else {
        $checkbox = '';
    }

    $paths[] = array(
        'path' => $img['path'],
        'checkbox' => $checkbox
    );

}

// Это относится только к руту

$button_delete = '';
if ($have_rules) {
    $button_delete = '<button type="button" class="btn btn-sm btn-danger btn-block" data-toggle="modal" data-target="#modalDeleteImg" group_id="' . $period_id . $kitty_id . '">Удалить отмеченные фото</button>';
}

$section_root = '';
if ($have_rules) {
    $section_root =   
    '<button class="btn btn-bg btn-info btn-block my-1" 
        type="button" data-toggle="collapse" data-target="#add_period' . $kitty_id . '_' . $period_id . '" aria-expanded="false" 
        aria-controls="add_period' . $kitty_id  . '_' . $period_id . '">
        Добавить фото
    </button>

    <div id="add_period' . $kitty_id . '_' . $period_id . '" class="container container-fluid collapse mb-2">
        <hr>
        <div class="container container-fluid border border-info rounded">
            <span class="bg-info d-flex justify-content-center text-dark mt-2">Добавить фото можно здесь</span>
            <form id="my-dropzone-i' . $kitty_id . '-i' . $period_id . '" 
                class="dropzone container container-fluid mb-2" 
                action="src/DB/kitty_CRUD/img_CRUD/img_add.php">
            </form>
        </div>
    </div>';

}

echo json_encode(
    array(
        'name' => $kitty['name'],
        'descryption' => $kitty['long_descryption'],
        'paths' => $paths,
        'button_delete' => $button_delete,
        'section_root' => $section_root
    )
);