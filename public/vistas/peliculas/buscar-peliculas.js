var appbuscar_peliculas = new Vue({
    el: '#frm-buscar-peliculas',
    data: {
        mis_peliculas: [],
        valor: ''
    },
    methods: {
        buscarPeliculas() {
            fetch(`private/Modulos/peliculas/procesos.php?proceso=buscarpeliculas&pelicula=${this.valor}`).then(resp => resp.json()).then(resp => {
                this.mis_peliculas = resp;
            });
        },
        modificarPelicula(pelicula) {
            appPeliculas.pelicula = pelicula;
            appPeliculas.pelicula.accion = 'modificar';
        },
        eliminarPelicula(idPelicula) {
            fetch(`private/Modulos/peliculas/procesos.php?proceso=eliminarPelicula&pelicula=${idPelicula}`).then(resp => resp.json()).then(resp => {
                this.buscarPeliculas();
            });
        }
    },
    created() {
        this.buscarPeliculas();
    }
});