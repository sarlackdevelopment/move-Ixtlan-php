<?php

require_once 'src/utils.php';

if ( Utils::is_session_started() === FALSE ) session_start();

require_once 'configDB.php';

class CHECK_RULES {

    public static function ROOT() {

        if (!isset($_SESSION['login'])) {
            return false;
        } else if (isset($_SESSION['ROOT'])) {
            return $_SESSION['ROOT'] == "TRUE";
        } else {
            $have_rules = R::getAll(
            'SELECT 
                TRUE
            FROM 
                (
                    SELECT 
                        rules_users.rules_id AS rules_id
                    FROM users AS users
                        INNER JOIN rules_users AS rules_users
                            ON users.id = rules_users.users_id
                    WHERE users.login = ? AND users.approve) AS SUB
                        INNER JOIN rules AS rules
                            ON SUB.rules_id = rules.id
            WHERE rules.name = ? and rules.value', array($_SESSION['login'], 'root'));
        
            if (count($have_rules) == 0) {
                $_SESSION['ROOT'] = "FALSE";
                return false;
            } else {
                $_SESSION['ROOT'] = "TRUE";
                return true;
            }
        }
        
    }
    
}