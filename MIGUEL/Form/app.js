//Validacion de formulario (simple)

//Primero hay que seleccionar formulario

//Conociendo ID
var formulario1 = document.getElementById("miFormulario");
var fomulario2 = document.forms["miFormulario"];

//Por el numero de formulario
var formulario3 = document.getElementsByTagName("form"[0]);
var formulario4 = document.forms[0];

/* Seleccionar elementos del formulario
.elements[] Devuelve un array con todos los inputs del formulario
getElementbyID("idElemento") Devuelve un elemento con un id determinado
getElementbyTagName("etiqueta") Devuelve un array con elemento del tipo etiqueta
getElementbyName("nombre") Devuelve un array con los elementos del mismo nombre
*/

window.onload = iniciar;

function iniciar(){
    document.getElementById("enviar").addEventListener('click', validar,false);
}

function validarNombre(){
    var elemento = document.getElementById("nombre");
    if(elemento.value == ""){
        alert("El campo nombre no puede quedar vacio");
        error(elemento);
        return false;
    }
    else{
        return true;
    }
}

function validarTelefono(){
    var elemento = document.getElementById("telefono").value;
    if(isNaN(elemento) || elemento==""){
        alert("El campo telefono debe ser un numero valido")
        return false;
    }
    else{
        return true;
    }
}

function validarFecha(){
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var anio = document.getElementById("anio").value;

    var fecha = new Date(anio,mes,dia);
    if(isNaN(fecha) || dia=="" || mes=="" || anio==""){
        alert("Los campos de la fecha son incorrectos")
        return false;
    }
    else{
        return true;
    }
}

function validarCheck(){
    var campoCheck = document.getElementById("mayor");
    if(!campoCheck.checked){
        alert("Debes ser mayor de edad");
        return false;
    }
    else{
        return true;
    }
}

function validar(e){
    if(validarNombre() && validarTelefono() && validarFecha() && validarCheck() 
        && confirm("Pulse aceptar si desea enviar el formulario")){
            return true;
    }
    else{
        e.preventDefault();
        return false;
    }
}

function error(elemento){
    elemento.className = "error";
    elemento.focus();
}

function limpiarError(elemento){
    elemento.className = "";
}