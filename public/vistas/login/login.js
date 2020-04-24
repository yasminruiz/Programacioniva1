var applogin = new Vue({
  el: '#frm-login',
  data: {
    login: {
      accion: 'validar',
      correo: '',
      contraseña: '',
      msg: ''
    },
    usuarios: []
  },
  methods: {
    iniciarSesion: function () {
      fetch(`private/Modulos/login/procesos.php?proceso=recibirUsuario&login=${JSON.stringify(this.login)}`).then(resp => resp.json()).then(resp => {
        this.login.msg = resp.msg;
      });
    }
  }
});