Vue.component('info-card', {
    props: ['titulo', 'contenido', 'llave'],
    template: `
    <div class="card mb-3">
    <div class="card-body">
    <h5 class="card-title">{{ titulo }}</h5>
    <p class="card-text">{{ contenido }}</p>
    </div>
    </div>
    `
})
var appInicio = new Vue({
    el: '#listado',
    data: {
        items: [],
        valor: ''
    },
    methods: {
        verInformacion: function () {
            fetch(`private/Modulos/informacion/procesos.php?proceso=buscarInformacion&informacion=${this.valor}`).then(resp => resp.json()).then(resp => {
                this.items = resp;
            });
        }
    },
    created: function () {
        this.verInformacion();
    }
})
Vue.component('consulta-card', {
    props: ['nombre', 'contenido', 'llave'],
    template: `
    <div class="card">
    <div class="card-body">
      <p class="card-text">{{ contenido }}</p>
      <p class="card-text"><small class="text-muted">{{ nombre }}</small></p>
    </div>
    </div>
    `
})

var appconsulta = new Vue({
    el: '#consultas',
    data: {
        consulta: {
            idConsulta: 0,
            accion: 'nuevo',
            consultas: '',
            msg: ''
        },
        valores: [],
        valor2: ""
    },
    methods: {
        guardarConsulta: function () {
            fetch(`private/Modulos/consultas/procesos.php?proceso=recibirDatos&consulta=${JSON.stringify(this.consulta)}`).then(resp => resp.json()).then(resp => {
                this.verConsultas();
                this.limpiezaConsulta();
            });
        },
        verConsultas: function () {
            fetch(`private/Modulos/consultas/procesos.php?proceso=verConsultas&consulta=${this.valor2}`).then(resp => resp.json()).then(resp => {
                this.valores = resp;
            });
        },
        limpiezaConsulta: function () {
            this.consulta.idConsulta = 0;
            this.consulta.consulta = '';
            this.consulta.accion = 'nuevo';
        }
    },
    created: function () {
        this.verConsultas();
    }
});