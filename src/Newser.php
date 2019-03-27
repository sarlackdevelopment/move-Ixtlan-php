
<?php

require 'libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

class Newser {

    public function get_All_Simple_Newses() {

        $newses       = R::findCollection('news', 'order by id desc');
        $list_Of_News = array();
    
        while ($pice_of_news = $newses->next()) {
            $list_Of_News[] = array(
                'id'             => $pice_of_news['id'],
                'archive'        => $pice_of_news['archive'],
                'header_message' => $pice_of_news['caption_news'],
                'main_message'   => $pice_of_news['body_news'],
            );
        }
    
        return $list_Of_News;
        
    }

    /* private function get_Newses() {

        $list_Of_News = array(
            array(
                'id' => '1',
                'archive' => false,
                'header_message' => 'Ждем новостей, Каталина',
                'main_message' => '<p>Ну что же, дорогая. Вот и твой кораблик стал медленно удаляться, тая в волнах.
                    Вырвавшись из родного гнезда, не забывай его. Прими уготованный тебе путь со
                    всей благодарностью, на которую способно твоё существо.</p>
                    <p>Не сворачивай с него. Будь текучей как вода - стань центром своей маленькой
                    вселенной с двумя солнцами, Каталина.</p>'
            ),
            array(
                'id' => '2',
                'archive' => false,
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
                'archive' => false,
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
            ),
            array(
                'id' => '4',
                'archive' => false,
                'header_message' => 'До свидания, Хуан.',
                'main_message' => '<p>Хуан обрел новый дом, а мы обрели, наконец, спокойствие за его дальнейшую
                    судьбу. Ну, и возможность выспаться.</p>
                    <p>Этот посыпанный первым снегом господин уже обживается в новом доме, оставшись
                    для нас легкой утренней метелью или типа того, которая, возможно, когда нибудь
                    снова попадет нам в глаза.</p>
                    <p>Теперь у тебя свое <mark>путешествие в Икстлан</mark> пройди его с улыбкой.</p>'
            ),
            array(
                'id' => '5',
                'archive' => false,
                'header_message' => 'Константин обрел новый дом.',
                'main_message' => '<p>Первый есть. Константин, мы оба знаем, что все будет хорошо. Ты обрел дом и
                    новых друзей.</p> <p>Примерно так. А если без соплей, то в добрый путь, братан! Будем приежать в
                    гости и ты нас не забывай.</p> <p>Приколись. Если бы тебя звали не Константин, а Николай,
                    то можно было бы вставить цитату: <mark>Ты меня, живя в комфорте, вспоминай. И смотри,
                    не выкинь фортель Николай</mark>(с.) Ну я думаю посыл ты понял. Ладно не скучай. Будь
                    истинным <mark>Норвежским лесным котом</mark> с большой буквы ("Н", "Л" или "К") сам
                    выбирай.</mark> Ближе к лету
                    заедем в гости.</mark></p>'
            ),
            array(
                'id' => '6',
                'archive' => true,
                'header_message' => 'Воронеж, 5-7 октября 2018. Выставка "Звезда Черноземья" (Тыквенные мысли
                    часть 1)',
                'main_message' => '<p>Незнакомый город пульсирует красками неожиданной осени. Её холодное дыхание
                    заползает под кожу. Нам опять в дорогу. Опять. Сколько их было, сколько ещё
                    будет. Нескончаемая вереница людей с всех сторон. Шумы, запахи, всполохи огня.
                    Всё это так знакомо, но, с другой стороны, привыкнуть невозможно. С момента
                    моего последнего выхода в свет прошла уже пара месяцев, и вот снова я на
                    чужой, чёрной как смоль земле. Это Воронеж, столица Черноземья. Здесь мы
                    задержимся на целый месяц. Добро пожаловать мне. Увидимся после.</p>
                    <p>Закончили. Теперь могу с уверенностью сказать, что о таких как я здесь почти
                    не слышали. Взял первое в своей жизни первое место. Первое "первое". Мда.
                    Надо, видимо, больше читать. Помимо этого, теперь я <mark>Международный
                    чемпион</mark>. Еще чуть-чуть и задеру свой прямой <mark>норвежский лесной нос.</mark></p>'
            ),
            array(
                'id' => '7',
                'archive' => true,
                'header_message' => 'Воронеж, 27-28 октября 2018. Выставка "Осенние смотрины" от КЛК Люкс.
                    (Тыквенные мысли часть 2)',
                'main_message' => '<p>Дубль второй. Серое небо рушится вбок. Осень в разгаре без компромиссов и
                    пощады. Всё те же старые необходимости, приготовления. Снова сидеть два дня в
                    тесной палатке. Само собой, знаменитый характер <mark>норвежской лесной</mark>
                    породы и врожденная деликатность не дает мне возможности громогласно
                    возмутиться. Проживая вторую часть этого странного представления, начинаешь все чаще об
                    этом вспоминать. Ну а после. Что после? Наконец, домой. Увижу семью.</p>
                    <p>В этот раз открыт титул <mark>Большого международного чемпиона.</mark> Меня
                    теперь ждут иные земли. Ну что ж, посмотрим, чем они смогут меня удивить.</p>'
            ),
            array(
                'id' => '8',
                'archive' => true,
                'header_message' => 'Ноябрь в окно - пополнение полным ходом в дверь',
                'main_message' => '<p>Роддом. Вот роддом и всё тут. Писки, вопли, бессонные ночи. <mark>Норвежские
                    лесные котята</mark> причиняют столько же радости и беспокойства при
                    рождении, сколько и обычные, но есть и отличия.</p> <p>Прайд, оказывается - это не только о львах. 
                    Неотвратимая и основная черта характера кошки-матери у этой породы - это фундаментальный материнский
                    инстинкт, причём по отношению ко всем котятам, не только своим.</p> <p> Обе кошки стали матерями
                    с разницей в один день, поэтому всё делают вместе - кормят, умывают, отдыхают.
                    Так сказать, в общее лукошко все рожали кошки. Ладно. Хватит шуток.
                    Всем, кто хочет <mark>купить котенка в Москве</mark> (в общем-то и за её
                    пределами никто вам не мешает), добро пожаловать в этом разделе</p>'
            ),
            array(
                'id' => '9',
                'archive' => true,
                'header_message' => 'Москва. 16-17 июня 2018 – Первая выставка!',
                'main_message' => '<p>Ну что, барышни, с первой выставкой вас, однако! Много нервов потрачено,
                    много времени и сил, но оно того стоило.</p> <p><mark>Питомники норвежских лесных кошек в 
                    Москве</mark> крайне немногочислены, но они есть и активно снабжают достойными конкурентами.
                    Однако и мы не лыком, как говорится, шиты. Получены первые оценки и номинации, получен бесценный
                    опыт, который будет использован в дальнейшем. Что тут еще скажешь? Дерзайте, барышни! В добрый путь.</p>'
            ),
            array(
                'id' => '10',
                'archive' => true,
                'header_message' => 'Москва. 9 января 2018 г. – Прибытие Пампкина.',
                'main_message' => '<p>Мохнатая чешская тыква или разбавим скромную женскую компанию нескромным
                    мужским присутствием. В общем, пятиминутка контролируемой глупости срочно в студию / номер ну и т.д.</p>
                    <p>Кот крепок душой, стоек психикой, доверчив и любит путешествовать самолетами и другими видами 
                    транспорта. Выдающийся экземпляр <mark>норвежской лесной</mark> породы. Ласковый, с вдумчивым и 
                    глубоким голосом, апельсиновыми глазами и хвостом размером с ещё одного кота. Воспитанник 
                    замечательной чешской семьи приехал покорять Россию и, надо сказать, пока все идёт по плану.</p>'
            ),
            array(
                'id' => '11',
                'archive' => true,
                'header_message' => '1 октября 2017 г. – Прибытие кошек. Наш неофициальный день рождения.',
                'main_message' => '<p>Итак, свершилось. Две <mark>норвежские лесные</mark> красавицы обрели новый
                    дом. Начало одного - есть всегда окончание другого.</p><p>Шум осеннего дождя и шуршание опадающих 
                    листьев ознаменовал переход от котят к кошкам. Но не стоит спешить с выводами. Трансорфация
                    протекает плавно - без резких движений и перекосов. Тем не менее <mark>путешествие в
                    Икстлан</mark> можно считать начатым. Это путешествие знаменито недостижимостью того
                    положения вещей, которое было в момент его начала - в момент зарождения
                    нового длинного пути. Но, как известно, прелесть ни в факте достижения конечной цели,
                    а самом процессе.</p>'
            ),
            array(
                'id' => '12',
                'archive' => true,
                'header_message' => '20 декабря 2017 – Регистрация питомника. Наш официальный день рождения.',
                'main_message' => '<p>Немного прозы. Перефразировав одну из известных русских поговорок, можно
                    сказать, что без бумажки ты букашка, а с бумажкой <mark>норвежская лесная
                    кошка.</mark></p>. <p>С миром повседневности нужно уметь взаимодействовать.
                    Регистрацию в системе WCF (World Cat Federation, Германия) и полученные сертификаты
                    можно считать первой ступенькой на это выщербленной лестнице. Вот так и происходит.
                    Время неумолимо. Вчера ты маленький <mark>норвежский котенок</mark>, а сегодня
                    дипломировнный экземляр породы.</p>'
            )
            
        );

        return $list_Of_News;

    } */

    private function have_Rules() {
        return true;
    }

    public function show_Editor_Form() {

        if (!$this->have_Rules()) {
            echo '';
        } else {
            echo 
            '<form action="/Ixtlan-php/src/DB/work_with_db.php" method="post">
                <div class="modal-body">                                   
                    <label for="Caption">Заголовок новости</label>
                    <textarea name="caption_news" class="form-control" rows="3"></textarea>

                    <label for="Body">Текст новости</label>
                    <textarea name="body_news" class="form-control" rows="3"></textarea>                                   
                </div>
                <div class="modal-footer">
                    <button class="btn btn-outline-primary btn-block my-1" type="submit">Добавить новость</button>
                </div>
            </form>';
        }

    }

    public function show_News_Form($id, $archive) {

        if (!$this->have_Rules()) {
            return '';
        } else {

            $current_button = ($archive) ? 
                '<button class="btn btn-primary btn-sm btn-block btn-outline-info my-1" type="submit">В галвное</button>' :
                '<button class="btn btn-primary btn-sm btn-block btn-outline-info my-1" type="submit">В архив</button>';

            return 
            '<form action="/Ixtlan-php/src/DB/work_with_db.php" method="post">
                <input type="hidden" name="form_goal" value="delete">
                <input type="hidden" name="form_id" value="' . $id . '">
                <div class="row">
                    <div class="col">
                        ' . $current_button . '
                    </div>
                    <div class="col">
                        <button class="btn btn-primary btn-sm btn-block btn-outline-info my-1" type="submit">Редактировать</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <button class="btn btn-primary btn-sm btn-block btn-outline-info my-1" type="submit">Удалить</button>
                    </div>
                </div>
            </form>';
        }

    }

    private function get_Main_Newses() {

        $list_Of_Main_News = array(
            array(
                'id'            => '1',
                'action_title'  => 'Забронировать',
                'main_message'  => 'У нас родились котята.',
                'create_action' => true,
                'target_page'   => 'kitty.php'
            )
        );

        return $list_Of_Main_News;

    }

    public function show_Newses($archive_news, $accordion_name, $postfix = '') {

        $list_of_newses = $this->get_All_Simple_Newses();
        $count          = count($list_of_newses);

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_news = $list_of_newses[$index];
            if ($archive_news == $instance_of_news['archive']) {
                continue;
            }

            $id = $instance_of_news['id'];

            echo
            '<article class="card">
                <header class="card-header" id="heading' . $postfix . $id . '">
                    <h5 class="mb-0 text-center">
                        <button class="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                            data-target="#collapse' . $postfix . $id . '" aria-expanded="false" aria-controls="collapse' . $postfix . $id . '">'
                                . $instance_of_news['header_message'] .
                        '</button>
                    </h5>
                </header>
                <div id="collapse' . $postfix . $id . '" class="collapse" aria-labelledby="heading' . $postfix . $id . '" data-parent="' . $accordion_name . '">
                    <div class="card-body">'
                        . $instance_of_news['main_message'] . $this->show_News_Form($id, false) . 
                    '</div>
                </div>
            </article>';

        }

    }

    public function show_Full_Newses() {

        $list_of_newses = $this->get_All_Simple_Newses();
        $count          = count($list_of_newses);

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_news = $list_of_newses[$index];

            echo
            '<article class="container border-top border-left border-right border-light">
                <header>
                    <hr>
                    <h5 class="text-center"><strong>'. $instance_of_news['header_message'] . '</strong></h5>
                    <hr>
                </header>
                ' . $instance_of_news['main_message'] . '
            </article>';

        }

    }

    public function show_Main_Newses($show_oh_bottom = false) {

        $list_of_main_newses      = $this->get_Main_Newses();
        $count                    = count($list_of_main_newses);
        $button_for_action        = '';
        $template_for_show_bottom = '';

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_main_news = $list_of_main_newses[$index];

            if ($instance_of_main_news['create_action']) {
                $button_for_action = 
                '<p class="lead">
                    <a class="btn btn-primary btn-sm btn-block" href="' . $instance_of_main_news['target_page'] . '" role="button">' 
                        . $instance_of_main_news['action_title'] . '</a>
                </p>';
            }

        }

        if ($show_oh_bottom) {
            $template_for_show_bottom = 'id="mainNews"';
        }

        echo
        '<section ' . $template_for_show_bottom . ' style="background-color: rgba(254, 221, 98, 1);" class="alert mt-1 mb-1" role="alert">
            <p class="text-justify text-center">' . $instance_of_main_news['main_message'] . '</p>
            ' . $button_for_action . '  
        </section>';

    }

    public function test() {
        echo "It works!!!";
    } 

}