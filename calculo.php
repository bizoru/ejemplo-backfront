<?php

  sleep(1);
    $ar = array();

    $numero = $_POST["numero_uno"];
    if(is_numeric($numero)){
      $ar['calculo'] = $numero + 1;

    }else{
        $ar['calculo'] = "No hay numero!";
    }

    echo json_encode($ar);
?>
