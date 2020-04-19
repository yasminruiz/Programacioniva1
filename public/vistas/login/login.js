var applogin = new Vue({
  el:'#frm-login',
  data:{
      login:{
        accion    : 'inicio',
        correo    : '',
        contraseña : '',
        msg       : ''
      },
      usuarios:[]
  },
  methods:{
    iniciarSesion:function(){
        fetch(`private/Modulos/login/procesos.php?proceso=validarUsuario&login=${this.login.correo}`).then(resp=>resp.json()).then(resp=>{
          this.usuarios = resp;
        });
        this.login.msg = this.usuarios;
      }
    }
});