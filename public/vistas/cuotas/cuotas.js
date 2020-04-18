var appcuota = new Vue({
  el:'#frm-cuotas',
  data:{
      cuota:{
          cantidad  : '',
          msg       : ''
      }
  },
  methods:{
      calcularCuota:function(){
        this.cuota.msg = "hola" ;
      }
    }
});