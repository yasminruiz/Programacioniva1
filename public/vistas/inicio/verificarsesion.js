var appPrincipal = new Vue({
    el: '#frm-principal',
    created: function () {
        fetch(`private/Modulos/login/procesos.php?proceso=verificar_Usua`).then(resp => resp.json()).then(resp => {
            if( resp.msg === "registrese" ){
                location.href = "index.html";
            } 
        });
    }
})