<?php

class Videomaker {

    private function get_list_of_Video() {

        $list_of_video = array(
            array(
                'id'                  => '1',
                'youtube_id'          => '7ATrqGquF5E',
                'video_path_template' => 'https://www.youtube.com/embed/{{youtube_id}}',
                'img_path_template'   => 'http://img.youtube.com/vi/{{youtube_id}}/default.jpg'
            ),
            array(
                'id'                  => '1',
                'youtube_id'          => 'PqHSGhg8_ug',
                'video_path_template' => 'https://www.youtube.com/embed/{{youtube_id}}',
                'img_path_template'   => 'http://img.youtube.com/vi/{{youtube_id}}/default.jpg'
            ),
            array(
                'id'                  => '1',
                'youtube_id'          => 'Y_jS7Klj_nw',
                'video_path_template' => 'https://www.youtube.com/embed/{{youtube_id}}',
                'img_path_template'   => 'http://img.youtube.com/vi/{{youtube_id}}/default.jpg'
            ),
            array(
                'id'                  => '1',
                'youtube_id'          => '8mrgUKY8vBc',
                'video_path_template' => 'https://www.youtube.com/embed/{{youtube_id}}',
                'img_path_template'   => 'http://img.youtube.com/vi/{{youtube_id}}/default.jpg'
            )
            ,
            array(
                'id'                  => '1',
                'youtube_id'          => 'kDR4yS0He6I',
                'video_path_template' => 'https://www.youtube.com/embed/{{youtube_id}}',
                'img_path_template'   => 'http://img.youtube.com/vi/{{youtube_id}}/default.jpg'
            )
            ,
            array(
                'id'                  => '1',
                'youtube_id'          => '-sSZB7CXEl4',
                'video_path_template' => 'https://www.youtube.com/embed/{{youtube_id}}',
                'img_path_template'   => 'http://img.youtube.com/vi/{{youtube_id}}/default.jpg'
            )
            ,
            array(
                'id'                  => '1',
                'youtube_id'          => 'A7IG8J0oXL4',
                'video_path_template' => 'https://www.youtube.com/embed/{{youtube_id}}',
                'img_path_template'   => 'http://img.youtube.com/vi/{{youtube_id}}/default.jpg'
            )
        );

        return $list_of_video;

    }

    public function show_Video_Vallery() {

        $list_of_video = $this->get_list_of_Video();
        $count         = count($list_of_video);

        echo '<div class="d-flex flex-row flex-wrap bd-highlight justify-content-center mb-3">';

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_video = $list_of_video[$index];

            $id                  = $instance_of_video['id'];
            $youtube_id          = $instance_of_video['youtube_id'];
            $video_path_template = $instance_of_video['video_path_template'];
            $img_path_template   = $instance_of_video['img_path_template'];

            $video_path = str_replace('{{youtube_id}}', $youtube_id, $video_path_template);
            $img_path   = str_replace('{{youtube_id}}', $youtube_id, $img_path_template);

            if ($index == 0) {
                echo 
                '<div class="container-fluid embed-responsive embed-responsive-16by9 m-1">
                    <iframe class="embed-responsive-item" src="' . $video_path . '" allowfullscreen name="slider"></iframe>
                </div>';
            }

            echo
            '<a href="' . $video_path . '" target="slider">
                <img class="bd-highlight m-1" title="котята норвежской норвежский котенок норвежские лесные котята"
                    src="' . $img_path . '" alt="норвежский котенок в подарок">
            </a>';

        }

        echo '</div>';

    } 

}