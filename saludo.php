<?php
date_default_timezone_set('America/El_Salvador');

if( $_GET && isset($_GET['name'])){
    $nombre = $_GET["nombre"];
    echo 'Hola'.$nombre.' desde el servidor, fecha: '.date('d-m-y H:i:s');
} else{
    header('location:index.html')
}

?>