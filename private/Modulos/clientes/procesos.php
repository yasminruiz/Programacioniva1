<?php
include('../../Config/Config.php');
$cliente = new cliente($conexion);

$proceso = '';
if (isset($_GET['proceso']) && strlen($_GET['proceso']) > 0) {
    $proceso = $_GET['proceso'];
}
$cliente->$proceso($_GET['cliente']);
print_r(json_encode($cliente->respuesta));

class cliente
{
    private $datos = array(), $db;
    public $respuesta = ['msg' => 'correcto'];

    public function __construct($db)
    {
        $this->db = $db;
    }
    public function recibirDatos($cliente)
    {
        $this->datos = json_decode($cliente, true);
        $this->validar_datos();
    }
    private function validar_datos()
    {
        if (empty($this->datos['nombre'])) {
            $this->respuesta['msg'] = 'por favor ingrese el nombre';
        }
        if (empty($this->datos['direccion'])) {
            $this->respuesta['msg'] = 'por favor ingrese la direccion';
        }
        if (empty($this->datos['telefono'])) {
            $this->respuesta['msg'] = 'por favor ingrese el telefono';
        }
        if (empty($this->datos['dui'])) {
            $this->respuesta['msg'] = 'por favor ingrese el DUI';
        }
        $this->almacenar_cliente();
    }
    private function almacenar_cliente()
    {
        if ($this->respuesta['msg'] === 'correcto') {
            if ($this->datos['accion'] === 'nuevo') {
                $this->db->consultas('
                    INSERT INTO clientes (nombre,direccion,telefono,dui) VALUES(
                        "' . $this->datos['nombre'] . '",
                        "' . $this->datos['direccion'] . '",
                        "' . $this->datos['telefono'] . '",
                        "' . $this->datos['dui'] . '"
                    )
                ');
                $this->respuesta['msg'] = 'Registro insertado correctamente';
            } else if ($this->datos['accion'] === 'modificar') {
                $this->db->consultas('
                   UPDATE clientes SET
                        nombre      = "' . $this->datos['nombre'] . '",
                        direccion   = "' . $this->datos['direccion'] . '",
                        telefono    = "' . $this->datos['telefono'] . '",
                        dui         = "' . $this->datos['dui'] . '"
                    WHERE idCliente = "' . $this->datos['idCliente'] . '"
                ');
                $this->respuesta['msg'] = 'Registro actualizado correctamente';
            }
        }
    }
    public function buscarCliente($valor = '')
    {
        $this->db->consultas('
            select * from clientes
            where dui like "%' . $valor . '%" or nombre like "%' . $valor . '%"

        ');
        return $this->respuesta = $this->db->obtener_data();
    }
    public function eliminarCliente($idCliente = 0)
    {
        $this->db->consultas('
            DELETE clientes
            FROM clientes
            WHERE idCliente="' . $idCliente . '"
        ');
        return $this->respuesta['msg'] = 'Registro eliminado correctamente';;
    }
}
