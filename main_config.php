<?php

class MainConfig {

    private static $__IT_IS_PROM__ = false;

    public static function root_redirect($paths) {
        if (self::$__IT_IS_PROM__) { 
            header('Refresh: 3; url=http://move-ixtlan.ru' . $paths['prom_path']);         
        } else {
            header("Location: " . $paths['dev_path']);
        }
    }

    public static function dev_name() {
        if (self::$__IT_IS_PROM__) {
            return ''; 
        } else {
            return 'Ixtlan-php';
        }
    }

    public static function root_store() {
        if (self::$__IT_IS_PROM__) {
            return $_SERVER['DOCUMENT_ROOT'];         
        } else {
            return $_SERVER['DOCUMENT_ROOT'] . DIRECTORY_SEPARATOR . self::dev_name();
        }
    }
    
}