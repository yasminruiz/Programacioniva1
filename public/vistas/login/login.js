var applogin = new Vue({
  el:'#frm-login',
  data:{
      login:{
          accion    : 'inicio',
          correo    : '',
          contraseña : '',
          msg       : ''
      }
  },
  methods:{
    iniciarSesion:function(){
        fetch(`private/Modulos/login/procesos.php?proceso=validarUsuario&login=${this.correo,this.contraseña}`).then(resp=>resp.json()).then(resp=>{
          if(!resp){

          }else{
            alert("Bienvenido/a ");
          }
        });
      }
    }
});