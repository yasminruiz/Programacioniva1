var appsalario = new Vue({
  el:'#frm-salarios',
  data:{
      salario:{
          cantidad  : '',
          isss      : '',
          afp       : '',
          d2        : '',
          msg       : ''
      }
  },
  methods:{
    CalcularSalario:function(){
      var dato = this.salario.cantidad;
      var ISSS, AFP,D2, ISR, D3;
      if(dato<=1000){
        ISSS = (dato * 0.03).toFixed(2);
      } else if(dato>1000){
        ISSS = 30
      }

      if(dato<=10000){
        AFP = (dato * 0.07).toFixed(2);
      } else if(dato>10000){
        AFP = 30
      }

      D2 = dato - ISSS - AFP;

      this.salario.isss = "ISSS: $" + ISSS;
      this.salario.afp = "AFP: $" + AFP;
      this.salario.d2 ="Salario menos ISSS y AFP: $"+ D2 ;
    }
  }
});