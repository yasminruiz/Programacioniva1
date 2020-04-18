var appconsulta = new Vue({
  el:'#frm-consultas',
  data:{
      consulta:{
          idConsulta  : 0,
          accion    : 'nuevo',
          nombre    : '',
          consulta : '',
          msg       : ''
      }
  },
  methods:{
      guardarConsulta:function(){
          fetch(`private/Modulos/consultas/procesos.php?proceso=recibirDatos&consulta=${JSON.stringify(this.consulta)}`).then( resp=>resp.json() ).then(resp=>{
              this.consulta.msg = resp.msg;
              this.consulta.idConsulta = 0;
              this.consulta.nombre = '';
              this.consulta.consulta = '';
              this.consulta.accion = 'nuevo';
              appVerConsultas.verConsultas();
          });
        }
    }
});