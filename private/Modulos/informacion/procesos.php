<?php 
include('../../Config/Config.php');
$informacion = new informacion($conexion);

$proceso = '';
if( isset($_GET['proceso']) && strlen($_GET['proceso'])>0 ){
	$proceso = $_GET['proceso'];
}
$informacion->$proceso( $_GET['informacion'] );
print_r(json_encode($informacion->respuesta));

class informacion{
    private $datos = array(), $db;
    public $respuesta = ['msg'=>'correcto'];

    public function __construct($db){
        $this->db=$db;
    }
    public function recibirDatos($informacion){
        $this->datos = json_decode($informacion, true);
        $this->validar_datos();
    }
    private function validar_datos(){
        if( empty($this->datos['titulo']) ){
            $this->respuesta['msg'] = 'por favor ingrese un titulo';
        }
        if( empty($this->datos['contenido']) ){
            $this->respuesta['msg'] = 'por favor ingrese un contenido';
        }
        $this->almacenar_registro();
    }
    private function almacenar_registro(){
        if( $this->respuesta['msg']==='correcto' ){
            if( $this->datos['accion']==='nuevo' ){
                $this->db->consultas('
                    INSERT INTO informacion (titulo,contenido) VALUES(
                        "'. $this->datos['titulo'] .'",
                        "'. $this->datos['contenido'] .'"
                    )
                ');
                $this->respuesta['msg'] = 'Registro guardado correctamente';
            } 
        }
    }
    public function buscarInformacion($valor=''){
        $this->db->consultas('select * from informacion where titulo like "%'.$valor.'%" or contenido like "%'.$valor.'%"');
        return $this->respuesta = $this->db->obtener_datos();
    }
}
?>