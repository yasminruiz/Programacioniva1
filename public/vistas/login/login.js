var applogin = new Vue({
  el: '#frm-login',
  data: {
    login: {
      accion: 'validar',
      correo: '',
      contraseña: '',
      msg: ''
    }
  },
  methods: {
    iniciarSesion: function () {
      fetch(`private/Modulos/login/procesos.php?proceso=recibirUsuario&login=${JSON.stringify(this.login)}`).then(resp => resp.json()).then(resp => {
        if (resp.msg === "Bienvenido") {
          location.href = "principal.html";
        } else {
          this.login.msg = resp.msg;
        }
      });
    },
    Registrarse: function () {
      location.href = "registrar.html";
    }
  }
});