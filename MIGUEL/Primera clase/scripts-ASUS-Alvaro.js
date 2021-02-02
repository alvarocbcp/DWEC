//Contraseñas

var passwordDB = "pepe1234";
var input = "pepe1234";

var validacion = input == passwordDB;
console.log(validacion);

//Condicional IF

if(validacion == true){
    console.log("El login es correcto");
}else{
    console.log("El login es incorrecto");
}

var puntos = 60;

if(puntos >= 90){
    console.log("Sobresaliente");
}else if(puntos >= 70){
    console.log("Notable");
}else if(puntos >= 60){
    console.log("Bien");
}else if(puntos >= 50){
    console.log("Suficiente");
}else{
    console.log("Insuficiente");
}

//SWITCH

var tipoTarjeta = "Creditoo";

switch(tipoTarjeta){
    case "Debito":
        console.log("Es una tarjeta de Debito");
    break;
    case "Credito":
        console.log("Es una tarjeta de Credito");
    break;
    default:
        console.log("No es una tarjeta valida");
    break;
}

var fecha = new Date();

var dia = fecha.getDay();

var traduccion = "";

switch(dia){
    case 0:
        traduccion = "Domingo";
    break;
    case 1:
        traduccion = "Lunes";
    break;
    case 2:
        traduccion = "Martes";
    break;
    case 3:
        traduccion = "Miercoles";
    break;
    case 4:
        traduccion = "Jueves";
    break;
    case 5:
        traduccion = "Viernes";
    break;
    case 5:
        traduccion = "Sabado";
    break;
}

document.write("<h1>Hoy es " + traduccion + "</h1>");

//Valores por teclado

var respuesta = window.prompt("¿Como te encuentras?");

window.alert(respuesta);