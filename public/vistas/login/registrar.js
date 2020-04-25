var appRegistrar = new Vue({
    el: '#frm-registrar',
    data: {
        registrar: {
            idLogin: 0,
            accion: 'nuevo',
            nombre: '',
            correo: '',
            contraseña: '',
            msg: ''
        }
    },
    methods: {
        guardarRegistro: function () {
            fetch(`private/Modulos/login/procesos.php?proceso=recibirDatos&login=${JSON.stringify(this.registrar)}`).then(resp => resp.json()).then(resp => {
                this.registrar.msg = resp.msg;
                this.registrar.idLogin = 0;
                this.registrar.nombre = '';
                this.registrar.correo = '';
                this.registrar.contraseña = '';
                this.registrar.accion = 'nuevo';
            });
        },
        Iniciarsesion: function () {
            location.href = "index.html";
        }
    }
});