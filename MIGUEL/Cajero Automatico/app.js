/*Programa que simule un cajero automatico que le pregunta al usuario por pantalla si necesita un compribante.
En caso de necesitarlo, escirbiremos en el documento "Aqui tiene su comprobante",
si no lo necesita escribiremos "Que tenga un buen dia"
algo distinto a SI o NO escribiremos "Escriba SI o NO, por favor"*/

document.addEventListener('DOMContentLoaded', ()=>{
    aplicacion();
});

function aplicacion(){
    var comprobante = window.prompt("¿Necesita un comprobante?");

    switch(comprobante){
        case "SI":
            document.write("<p>Aqui tiene su comprobante</p>");
        break;
        case "NO":
            document.write("<p>Que tenga un buen dia</p>");
        break;
        default:
            document.write("<p>Escriba SI o NO por favor</p>");
        break;
    }
}

/*Simular una tienda de helados, vamos a preguntar al usuario quye topins quiere con el helado
calcular el precio del helado topping que elija

helado base = 1.90
oreo = 1
kitkat = 1.5
brownie 0.75
lacasitos 0.95

si no hay topping que necesita "No tenemos ese topping, disculpas"

Finalmente le vamos a mostrar el precio total del helado
*/