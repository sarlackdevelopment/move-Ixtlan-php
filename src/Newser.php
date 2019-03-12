
<?php

class Newser {
    
    private function get_Newses() {

        $list_Of_News = array(
            array(
                'id' => '1',
                'header_message' => 'Ждем новостей, Каталина',
                'main_message' => '<p>Ну что же, дорогая. Вот и твой кораблик стал медленно удаляться, тая в волнах.
                    Вырвавшись из родного гнезда, не забывай его. Прими уготованный тебе путь со
                    всей благодарностью, на которую способно твоё существо.</p>
                    <p>Не сворачивай с него. Будь текучей как вода - стань центром своей маленькой
                    вселенной с двумя солнцами, Каталина.</p>'
            ),
            array(
                'id' => '2',
                'header_message' => 'Попутного ветра, Хосефина.',
                'main_message' => '<p>Вот и ещё одна на выданье. Наша Хосефина перемещается на новую заключительную
                    стоянку на этой земле. Доброй охоты пожелаю тебе я. С радостью в глазах смотрит
                    тебе в след что-то, что было тебе домом. </p>
                    <p>Впереди новые свершения, свергнутые идеалы и спонтанные прыжки, резкие развороты
                    на 180 и превышения скорости вне всяких пределов. Не забывай свои корни.</p> вода - стань центром своей маленькой
                    вселенной с двумя солнцами, Каталина.</p>'
            ),
            array(
                'id' => '3',
                'header_message' => 'Счастливого пути, Карлос.',
                'main_message' => '<p>Карлос - ты эталон породы. Главное, не задирай свой норвежский лесной нос от
                    осознания этого факта. Будь счастлив сам и делись счастьем с другими.</p>
                    <p>В общем, Карлос покинул нас и обрёл окончательный дом. Думаю, это понятно из
                    напутственных речей выше. Кот, конечно, с характером - надо это понимать.
                    Своеволен, но не агрессивен - не зря носит такое имя. Будет отличным
                    компаньоном, исследователем и фигурантом любых дел и подозреваемым во всех
                    кражах относительно угощения или упавших штор. Шучу конечно).</p>
                    <p>Счастливого путешествия. Пусть воспоминания о твоём маленьком мире детства будут
                    тебе ориентиром, когда все прочие ориентиры канут в бесконечность.</p>'
            )
        );

        return $list_Of_News;

    }

    public function show_Newses() {

        $list_of_newses = $this->get_Newses();
        $count          = count($list_of_newses);

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_news = $list_of_newses[$index];
            $id               = $instance_of_news['id'];

            echo
            '<article class="card">
                <header class="card-header" id="heading' . $id . '">
                    <h5 class="mb-0 text-center">
                        <button class="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                            data-target="#collapse' . $id . '" aria-expanded="false" aria-controls="collapse' . $id . '">'
                                . $instance_of_news['header_message'] .
                        '</button>
                    </h5>
                </header>
                <div id="collapse' . $id . '" class="collapse" aria-labelledby="heading' . $id . '" data-parent="#accordion">
                    <div class="card-body">'
                        . $instance_of_news['main_message'] .
                    '</div>
                </div>
            </article>';

        }

    }

    public function test() {
        echo "It works!!!";
    } 

}