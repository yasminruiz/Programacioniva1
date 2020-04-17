var appcuota = new Vue({
  el:'#frm-cuotas',
  data:{
      cuota:{
          cantidad : '',
          msg       : ''
      }
  },
  methods:{
    Calcular:function(){
        this.cuota.msg = cuota.cantidad ;
      }
    }
});