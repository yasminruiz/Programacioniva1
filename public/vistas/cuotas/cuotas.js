var appcuota = new Vue({
  el:'#frm-cuotas',
  data:{
      cuota:{
        cantidad     : '',
        bancos       : '',
        prestamo     : '',
        msg          : ''
      },
      datos:{
        bancos:['Banco Agricola','BFA'],
        Agricola:{prestamos:['Crédito de Consumo','Crédito de Vivienda','Crédito de Estudio']},
        BFA:{prestamos:['Crédito de Consumo','Crédito de Vivienda']}
      }
  },
  methods:{
      calcularCuota:function(){
        this.cuota.msg = "hola" ;
      },
      llenarLista(){
      }
  }
});