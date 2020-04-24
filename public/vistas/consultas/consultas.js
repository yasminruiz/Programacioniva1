Vue.component('consulta-card', {
    props: ['nombre', 'contenido', 'llave'],
    template: `
    <div class="card bg-light mb-3">
    <div class="card-header">{{ nombre }}</div>
    <div class="card-body">
    <p class="card-text">{{ contenido }}</p>
    </div>
    </div>
    `
})

var appconsulta = new Vue({
    el: '#frm-consultas',
    data: {
        consulta: {
            idConsulta: 0,
            accion: 'nuevo',
            nombre: '',
            consulta: '',
            msg: ''
        },
        items: [],
        valor: ""
    },
    methods: {
        guardarConsulta: function () {
            fetch(`private/Modulos/consultas/procesos.php?proceso=recibirDatos&consulta=${JSON.stringify(this.consulta)}`).then(resp => resp.json()).then(resp => {
                this.consulta.msg = resp.msg;
                this.verConsultas();
            });
        },
        verConsultas: function () {
            fetch(`private/Modulos/consultas/procesos.php?proceso=verConsultas&consulta=${this.valor}`).then(resp => resp.json()).then(resp => {
                this.items = resp;
            });
        },
        limpiezaConsulta: function () {
            this.consulta.msg = "";
            this.consulta.idConsulta = 0;
            this.consulta.nombre = '';
            this.consulta.consulta = '';
            this.consulta.accion = 'nuevo';
        }
    },
    created: function () {
        this.verConsultas();
    }
});