window.onload = iniciar;

function iniciar(){
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function validaNombre(){
    let elemento = document.getElementById("nombre");
    if(!elemento.checkValidity()){
        if(elemento.validity.valueMissing){
            error(elemento, "Debe introducir un nombre");
        }
        if(elemento.validity.patternMismatch){
            error(elemento, "El nombre debe contener entre 2 y 25 caracteres");
        }
        return false;
    }
    return true;
}

function validaApellido(){
    let elemento = document.getElementById("apellido");
    if(!elemento.checkValidity()){
        if(elemento.validity.valueMissing){
            error(elemento, "Debe introducir un apellido");
        }
        if(elemento.validity.patternMismatch){
            error(elemento, "El apellido debe contener entre 2 y 30 caracteres");
        }
        return false;
    }
    return true;
}

function validaDNI(){
    let elemento = document.getElementById("DNI");
    if(!elemento.checkValidity()){
        if(elemento.validity.valueMissing){
            error(elemento, "Debes introducir tu DNI");
        }
        if(elemento.validity.patternMismatch){
            error(elemento, "El DNI debe contener 8 digitos y 1 letra");
        }
        return false;
    }
    return true;
}

function validaTelefono(){
    let elemento = document.getElementById("telefono");
    if(!elemento.checkValidity()){
        if(elemento.validity.valueMissing){
            error(elemento, "Debes introducir tu teléfono");
        }
        if(elemento.validity.patternMismatch){
            error(elemento, "El teléfono debe contener 9 digitos");
        }
        return false;
    }
    return true;
}

function validaEdad(){
    let elemento = document.getElementById("edad");
    if(!elemento.checkValidity()){
        if(elemento.validity.rangeOverflow){
            error(elemento, "Su edad debe ser menor a 100 años");
        }
        if(elemento.validity.rangeUnderflow){
            error(elemento, "Su edad debe ser mayor a 18 años");
        }
        return false;
    }
    return true;
}

function validar(e){
    borrarError();
    if(validaNombre() && validaApellido() && validaDNI() && validaTelefono() && validaEdad() && confirm("Pulse aceptar para enviar el formulario")){
        return true;
    }
    else{
        e.preventDefault();
        return false;
    }
}

function error(elemento, mensaje){
    document.getElementById("mensajeError").innerHTML = mensaje;
    elemento.className = "error";
    elemento.focus();
}

function borrarError(){
    let formulario = document.forms["formulario"];
    for(let i=0; i<formulario.length; i++){
        formulario.elements[i].className = "";
    }
}