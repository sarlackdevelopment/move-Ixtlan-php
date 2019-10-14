<?php

class Articler {

    // TODO Перенести наконец статьи в базу данных

    private function get_thematicArticles() {

        $list_of_thematicArticles = array(
            'first_article_rus' => array(
                'id'   => '1',
                'body' => 
                    '<p>
                        Первое, что нужно знать о <mark>породе норвежская лесная кошка</mark> – это аборигенная порода.
                        Аборигенными
                        называют такие породы, которые сложились на определённой территории (в нашем случае, конечно
                        же, в Норвегии) при значительном влиянии естественного отбора и минимальном влиянии человека.
                        Таким образом, коты аборигенных пород могут похвастаться отменным здоровьем и полным набором
                        качеств своих предков: силой, выносливостью, охотничьими инстинктами и активностью. Официально
                        порода <mark>норвежских лесных кошек</mark> была зарегистрирована в 1977 г. Сейчас это
                        популярнейшая порода
                        в Скандинавии и одна из самых распространённых в других странах Европы. В России эта порода
                        пока не слишком популярна, но постепенно завоёвывает известность у <mark>любителей кошек</mark>.
                        О характере
                        <mark>норвежских лесных кошек</mark> можно говорить долго. Конечно, каждое животное
                        индивидуально, имеет
                        свои привычки и предпочтения, но есть некоторые общие черты для всей породы.
                        <mark>Норвеги</mark>
                        очень
                        мягкие и терпимые. Их крайне сложно спровоцировать на агрессию: если им что-то не нравится и
                        они недовольны, они просто уйдут подальше от конфликта. Норвежские лесные кошки достаточно
                        сильно привязываются к людям, поэтому их лучше не оставлять надолго одних. При этом это вовсе
                        не значит, что им требуется много внимания, кошкам достаточно просто знать, что их любимый
                        человек рядом, лежать возле него и мурлыкать ему свою песню. <mark>Норвегам</mark> очень
                        нравится
                        исследовать все высокие места в доме, поэтому лучше заранее позаботиться о наличии специальных
                        лазалок и лесенок, это одно из самых любимых их развлечений. Психологически кошки очень
                        устойчивы, для них не проблема приход гостей, путешествие или переезд.
                    </p>
                    <p>
                        <mark>Норвежские лесные кошки</mark> не требуют частого и длительного ухода, достаточно
                        расчёсывать их
                        шерсть два раза в неделю (в период линьки почаще). Колтуны благодаря структуре шерсти
                        образовываются редко, но на всякий случай нужно проверять, не свалялась ли где-то шерсть.
                        Обычно <mark>норвежские кошки</mark> любят расчёсывание и получают немало удовольствия от этой
                        процедуры.
                        <mark>Норвеги</mark> прекрасно приспособлены для жизни в квартире, но, если у вас есть личный
                        огороженный
                        участок, вольер на улице или вы просто регулярно выгуливаете их с помощью шлейки, кошки будут
                        только счастливы. Главное при этом – не забывать о гигиене, чистить их, не допускать наличия
                        клещей и блох и регулярно делать дегельминтизацию. Вес взрослой кошки в среднем около 5 кг,
                        коты на 2-3 кг тяжелее. Богатая густая шерсть добавляет ощущение объёма и величины. Окрас
                        норвежская лесная может иметь любой, кроме шоколадного, циннамона и соответствующих ослабленных
                        в любых комбинациях (табби, триколор и т.д.). <mark>Норвежская лесная кошка</mark> станет вам
                        верным другом
                        и спутником на протяжении многих лет. Достаточно дарить ей свою любовь и ласку, искренне
                        заботиться, и она ответит вам тем же, а может быть, даже большим.
                    </p>'
            ),
            'first_article_eng' => array(
                'id'   => '2',
                'body' => 
                    '<p>
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                    </p>
                    <p>
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                    </p>'
            )
        );

        return $list_of_thematicArticles;

    }
    
    private function get_MainArticles() {

        $list_of_main_articles = array(
            'part_one_rus' => array(
                'id'   => '1',
                'body' => 
                    '<p>
                        Приветствуем вас! Наш <mark>питомник норвежских лесных кошек</mark> занимается
                        разведением соответствующей породы. Располагайтесь. Если вы здесь, то, скорее всего, это значит,
                        что вы интересуетесь этой прекрасной аборигенной породой. Ну а если набрели случайно, то не
                        стесняйтесь. Мы рады всем и каждому.
                    </p>'
            ),
            'part_two_rus' => array(
                'id'   => '2',
                'body' => 
                    '<p>
                        Неважно, только пытаетесь ли вы определиться с породой, или уже собираетесь <mark>купить
                        норвежскую лесную кошку</mark>, в любом случае выбор этой породы - самый правильный выбор! Эти кошки – замечательные
                        компаньоны, верные друзья и, конечно, дивной красоты животные. Врождённое воспитание, такт и ненавязчивость. Это одни
                        из самых умных животных. Подробнее о породе читайте в соответствующем разделе.</p>
                        <p>Здесь вы найдёте информацию о породе, о нашем питомнике, о наших кошках и котах и о многом
                        другом. Много профессиональных фотографий, видео, интересные статьи - все это ждёт вас.
                        Здесь вы можете увидеть фото котят, зарезервировать и <mark>купить котенка</mark>.</p>
                        <p>Также вы можете найти наши контакты и, не стесняясь, звонить, если у вас есть какие-либо
                        вопросы и предложения. Начните своё <mark>путешествие в Икстлан</mark> с нами. Добро
                        пожаловать!
                    </p>'
            ),
            'part_one_eng' => array(
                'id'   => '3',
                'body' => 
                    '<p>
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                    </p>'
            ),
            'part_two_eng' => array(
                'id'   => '4',
                'body' => 
                    '<p>
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                        Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet Lorem ipsum in amet
                    </p>'
            )
        );

        return $list_of_main_articles;

    }

    private function get_Descryption() {

        $list_of_main_articles = array(
            'part_one_rus' => array(
                'id'   => '1',
                'body' => '<p>Доброго времени, гость! Располагайся. Мы из породы <mark>норвежских лесных кошек</mark>.
                    Мы крепки здоровьем и психикой. Нас никто не выводил и не скрещивал. Мы естественный результат эволюции в
                    условиях суровой северной природы. Ты увидишь в наших глазах разум и легкий отблеск печали по
                    соснам, пронзающим небо, и бесконченому снегу.</p>'
            ),
            'part_two_rus' => array(
                'id'   => '2',
                'body' => '<p>Впрочем, мы ощутимо повеселеем, если нам предложить сытную трапезу. Если предлагать её
                    регулярно, в конце концов мы вырастем до внушительных размеров.</p> <p>Наши мужчины массивнее и тяжелее
                    большинства других пород (за исключением наших собратьев по ту сторону Атлантики и с бескрайних просторов
                    Сибири). Наши женщины нам под стать, однако чуть меньше. Вес взрослой кошки в среднем около 5 кг, коты на 2-3 кг 
                    тяжелее.</p> <p>Одеваемся мы тепло, а как иначе? Попробуй поторчи на морозе 24 часа в сутки! Даже самый
                    маленький <mark>норвежский котенок</mark> густо окутан несколькими слоями самой теплой и плотной шерсти. Итого:
                    основная шерсть с густым подшёрстком, длинный покров из остевых волос вдоль хребта и на хвосте, которые
                    отталкивают воду (да да. иногда приходится и купаться).</p> <p>Лапы и челюсти быстры. Всех, у кого было по-другому,
                    отсеяла безжалостная стерва-эволюция. Уши крупные с кисточками. В наличии длинный пушистый хвост, доходящий до лопаток.</p>
                    <p>Характер нордический, выдержанный. Вывести из себя невозможно - не представляю себе такого, но с
                    другой стороны моментальное расположение и любовь не гарантированы. Излишняя фамильярность никому
                    не приятна (кроме некоторых пород собак) так почему же мы должны быть исключением?</p>
                    <p>Дайте нам время привыкнуть. Привыкание ускоряют: лакомства, периодические вычесывания, наши женщины
                    от этого в восторге. Мы любим сидеть рядом и разговаривать, но от в объятий лучше воздержаться,
                    хотя бывают и исключения</p> <p>С нами можно гулять в том числе и зимой. Мы любим снег и легкий зимний ветер. Нам нужно
                    движение почти так же как кислород.</p> <p>Мы верные друзья. От нас нет проблем и мы не требуем слишком многого. Ревность и
                    излишние проявления эмоций совершенно не про нас, но, с другой стороны, можем и поиграть под настроение.</p>
                    <p>Сейчас наша стоянка в Москве.</p>
                    <aside>
                        <p>Более подробно про <mark>содержание норвежской лесной кошки</mark> можно прочитать в
                            соотвествующем <a href="articles.html">разделе</a>.</p>
                    </aside>'
            ),
            'part_one_eng' => array(
                'id'   => '3',
                'body' => '
                    <p>
                        lorem ipsum in amet lorem ipsum in amet lorem ipsum in amet
                        lorem ipsum in amet lorem ipsum in amet lorem ipsum in amet
                        lorem ipsum in amet lorem ipsum in amet lorem ipsum in amet
                        lorem ipsum in amet lorem ipsum in amet lorem ipsum in amet
                        lorem ipsum in amet lorem ipsum in amet lorem ipsum in amet
                        lorem ipsum in amet lorem ipsum in amet lorem ipsum in amet
                        lorem ipsum in amet lorem ipsum in amet lorem ipsum in amet
                        lorem ipsum in amet lorem ipsum in amet lorem ipsum in amet
                        lorem ipsum in amet lorem ipsum in amet lorem ipsum in amet
                    </p>'
            ),
            'part_two_eng' => array(
                'id'   => '4',
                'body' => '
                    <p>
                        lorem ipsum in amet lorem ipsum in amet lorem ipsum in amet
                        lorem ipsum in amet lorem ipsum in amet lorem ipsum in amet
                        lorem ipsum in amet lorem ipsum in amet lorem ipsum in amet
                        lorem ipsum in amet lorem ipsum in amet lorem ipsum in amet
                    </p>'
            )
        );

        return $list_of_main_articles;

    }

    public function show_Main_Article() {

        $local = UtilsLocal::currentLanguage()['short_caption'];

        $list_of_main_articles = $this->get_MainArticles();

        echo

            $list_of_main_articles['part_one_' . $local]['body'] .

            '<img id="subLogoSecond" title="фото котят норвежской кошки норвежская лесная кошка купить в москве питомники"
                src="images/pumpkin.jpg" class="w-75 d-none d-sm-block rounded img-fluid border border-primary" alt="норвежская лесная купить">
            <img id="subLogoSecondHidden" title="питомник норвежских лесных кошек норвежский котенок"
                src="images/pumpkin.jpg" class="w-100 d-block d-sm-none rounded img-fluid border border-primary" alt="питомники норвежских кошек">'
                
            . $list_of_main_articles['part_two_' . $local]['body'];

    }

    public function show_Descryption() {

        $local = UtilsLocal::currentLanguage()['short_caption'];

        $list_of_descryption = $this->get_Descryption();

        echo

            $list_of_descryption['part_one_' . $local]['body'] .

            '<img id="subLogo" title="фото котят норвежской кошки" src="images/logo.jpg" class="w-75 d-none d-sm-block rounded img-fluid border border-primary"
                alt="норвежская лесная питомник">
            <img id="subLogoHidden" title="норвежская лесная питомник норвежские лесные котята норвежская лесная кошка питомник москва"
                src="images/logo.jpg" class="w-100 d-block d-sm-none rounded img-fluid border border-primary"
                alt="питомник норвежской">'
                
            . $list_of_descryption['part_two_' . $local]['body'];

    }

    public function show_thematicArticles() {

        $local = UtilsLocal::currentLanguage()['short_caption'];

        $list_of_thematicArticles = $this->get_thematicArticles();

        echo 
            '<article class="container">
                ' . $list_of_thematicArticles['first_article_' . $local]['body'] . '
            </article>';

    }

}