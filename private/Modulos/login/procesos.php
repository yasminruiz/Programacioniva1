<?php 
include('../../Config/Config.php');
$login = new login($conexion);

$proceso = '';
if( isset($_GET['proceso']) && strlen($_GET['proceso'])>0 ){
	$proceso = $_GET['proceso'];
}
$login->$proceso( $_GET['login'] );
print_r(json_encode($login->respuesta));

class login{
    private $datos = array(), $db;
    public $respuesta = ['msg'=>'correcto'];

    public function __construct($db){
        $this->db=$db;
    }
    public function recibirDatos($consulta){
        $this->datos = json_decode($consulta, true);
        $this->validar_datos();
    }
    private function validar_datos(){
        if( empty($this->datos['correo']) ){
            $this->respuesta['msg'] = 'por favor ingrese el correo';
        }
        if( empty($this->datos['contraseña']) ){
            $this->respuesta['msg'] = 'por favor ingrese la contraseña';
        }
        $this->iniciarSesion();
    }
    public function iniciarSesion($correo='', $contraseña=''){
        $this->db->consultas('
            select * from login where correo like "%'.$correo.'%" and contraseña like "%'.$contraseña.'%"');
        return $this->respuesta;
    }
}
?>