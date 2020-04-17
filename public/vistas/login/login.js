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
        if(fetch(`private/Modulos/login/procesos.php?proceso=iniciarSesion&login=${correo,contraseña}`).then(resp=>resp.json()).then(resp=>{}) == 1){
          
        } else{
          alert("error");
        }
      }
    }
});