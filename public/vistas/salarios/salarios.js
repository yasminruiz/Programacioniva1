var appsalario = new Vue({
  el:'#frm-salarios',
  data:{
      salario:{
          cantidad    : '',
          msg         : ''
      }
  },
  methods:{
      CalcularSalario:function(){
        this.salario.msg = "hola" ;
      }
    }
});