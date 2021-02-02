 //Validacion de formularios (simple)

 //Primero hay que seleccionar el formulario

 //Conociendo ID
var formulario1 = document.getElementById("miFormulario");
var formuario2 = document.forms("miFormulario");

//Por el numero de formulario
var formulario3 = document.getElementsByTagName("form"[0]);
var formulario4 = document.forms[0];

/*
Seleccionar elementos del formulario
.elements[] Devuelve un array con todos los inputs del formulario
getElementById("Elemento") Devuelve un elemento con un ID determinado
getElementByTagName("etiqueta") Devuelve un array con elementos del tipo etiqueta
getElementByName("nombre") Devuelve un array con los elementos del mismo nombre
*/

window.onload = iniciar;

function iniciar(){
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function validarNombre(){
    var elemento = document.getElementById("nombre");
    if(elemento.value == ""){
        alert("El campo no puede estar vacio");
        return false;
    }
    return true;
}

function validarTelefono(){
    var elememto = document.getElementById("telefono");
    if(isNaN(elemento.value)){
        alert("El campo telefono debe ser numerico");
        return false;
    }
    return true;
}

function validarFecha(){
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var anio = document.getElementById("anio").value;
    var fecha = new Date(anio, mes, dia);
    if(isNaN(fecha)){
        alert("Los campos de la fecha son incorrectos");
        return false;
    }
    return true;
}

function validarCheck(){
    var campoCheck = document.getElementById("mayor");
    if(!campoCheck.checked){
        alert("Debes ser mayor de edad");
        return false;
    }
    return true;
}

function validar(e){
    if(validarNombre() && validarTelefono() && validarFecha() && validarCheck() && confirm("Pulse aceptar si desea enviar el formulario")){
        return true;
    }
    else{
        e.preventDefault();
        return false;
    }
}