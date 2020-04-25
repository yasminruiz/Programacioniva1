var appRecuperar = new Vue({
    el: '#frm-recuperar',
    data: {
        restablecer: {
            accion: 'modificar',
            correo: '',
            contraseña: '',
            msg: ''
        }
    },
    methods: {
        RecuperarContra: function () {
            fetch(`private/Modulos/login/procesos.php?proceso=recibirCorreo&login=${JSON.stringify(this.restablecer)}`).then( resp=>resp.json() ).then(resp=>{
                this.restablecer.msg = resp.msg;
                this.restablecer.correo = "";
                this.restablecer.contraseña = "";
            });
        },
        Volver: function () {
            location.href = "index.html";
        }
    }
});