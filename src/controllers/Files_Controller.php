<?php

class Files_Controller {

    public function recursiveRemoveDir($dir) {

        $includes = new FilesystemIterator($dir);

        foreach ($includes as $include) {

            if(is_dir($include) && !is_link($include)) {
                $this->recursiveRemoveDir($include);
            } else {
                unlink($include);
            }
        }

    rmdir($dir);

    }
}
