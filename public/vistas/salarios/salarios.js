var appsalario = new Vue({
  el:'#frm-salarios',
  data:{
      salario:{
          cantidad  : '',
          isss      : '',
          afp       : '',
          d2        : '',
          isr       : '',
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

      if(dato<=3500){
        AFP = (dato * 0.0725).toFixed(2);
      } else if(dato>3500){
        AFP = 253.75;
      }

      D2 = dato - ISSS - AFP;
      if(D2>=0.01 && D2<=472){
        ISR = 0;
      } else if(D2>=472.01 && D2<=895.24){
        ISR = 17.67 + (D2 - 472) * 0.1;
      } else if(D2>=895.25 && D2<=2038.10){
        ISR = 60 + (D2 - 895.24) * 0.2;
      } else if(D2>=2038.11){
        ISR = 288.57 + (D2 - 2038.10) * 0.3;
      }

      D3 = D2 - ISR.toFixed(2);

      this.salario.isss = "ISSS: $" + ISSS;
      this.salario.afp = "AFP: $" + AFP;
      this.salario.d2 = "Renta Gravada: $"+ D2;
      this.salario.isr = "ISR: $" + ISR.toFixed(2);
      this.salario.msg = "Salario neto: $" + D3;
    }
  }
});