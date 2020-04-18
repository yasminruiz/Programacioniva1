var appVerConsultas = new Vue({
    el:'#frm-ver-consultas',
    data:{
        mispeticiones:[],
        valor:''
    },
    methods:{
        verConsultas:function(){
            fetch(`private/Modulos/consultas/procesos.php?proceso=verConsultas&consulta=${this.valor}`).then(resp=>resp.json()).then(resp=>{
                this.mispeticiones = resp;
            });
        },
    },
    created:function(){
        this.verConsultas();
    }
});