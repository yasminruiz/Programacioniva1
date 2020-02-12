/*document.addEventListener("DOMContentLoaded",init);
function init(event){
    alert("Hola la pagina a cargado")
}

document.addEventListener("DOMContentLoaded",function(event){
    alert("Pagina cargo forma 2")
});*/
document.addEventListener("DOMContentLoaded",event =>{
    const formAlumnos = document.querySelector("#frmAlumno");
    formAlumnos.addEventListener("submit",(e)=>{
        e.preventDefault();

        let codigo = document.querySelector("#txtCodigoAlumno").value,
        nombre = document.querySelector("#txtNombreAlumno").value,
        direccion = document.querySelector("#txtDireccionAlumno").value,
        telefono = document.querySelector("#txtTelefonoAlumno").value;
        if( 'localStorage' in window ){
            window.localStorage.setItem("codigo",codigo);
            window.localStorage.setItem("nombre",nombre);
            window.localStorage.setItem("direccion",direccion);
            window.localStorage.setItem("telefono",telefono);
        } else{
            alert("Almacenamineto en local no soportado, actualizate!");
        }
    });
    document.querySelector("#btnRecuperarAlumnos").addEventListener("click",(e)=>{
        if('localStorage' in window){
            document.querySelector("#txtCodigoAlumno").value = window.localStorage.getItem("codigo");
            document.querySelector("#txtNombreAlumno").value = window.localStorage.getItem("nombre");
            document.querySelector("#txtDireccionAlumno").value = window.localStorage.getItem("direccion");
            document.querySelector("#txtTelefonoAlumno").value = window.localStorage.getItem("telefono");
        }else{
            alert("Almacenamineto en local no soportado, actualizate!");
        }
    });
});