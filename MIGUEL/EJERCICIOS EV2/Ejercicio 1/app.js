document.addEventListener('DOMContentLoaded', aplicacion());

function aplicacion(){
    const dineroInicial = prompt("Introduce una cantidad de dinero");

    if(dineroInicial==undefined){
        alert("HAS PULSADO CANCELAR");
        location.reload();
    }
    else if(dineroInicial==""){
        alert("NO HAS INTRODUCIDO NINGUN VALOR");
        location.reload();
    }
    else if(!isNaN(dineroInicial)){
        resolverEjercicio(dineroInicial);
    }
    else if(isNaN(dineroInicial)){
        alert("¡ERROR! INTRODUCE UN NUMERO");
        location.reload();
    }

}

function resolverEjercicio(dineroInicial){
    document.write("Dinero total: " + dineroInicial + "<br>");
    //Variables de los billetes
    let billete500 = 0;
    let billete200 = 0;
    let billete100 = 0;
    let billete50 = 0;
    let billete20 = 0;
    let billete10 = 0;
    let billete5 = 0;

    //Variables de las monedas (En centimos)
    let moneda2 = 0;
    let moneda1 = 0;
    let moneda05 = 0;
    let moneda02 = 0;
    let moneda01 = 0;

    billete500 = Math.trunc(dineroInicial/500);
    dineroInicial = dineroInicial - (billete500*500);

    billete200 = Math.trunc(dineroInicial/200);
    dineroInicial = dineroInicial - (billete200*200);

    billete100 = Math.trunc(dineroInicial/100);
    dineroInicial = dineroInicial - (billete100*100);

    billete50 = Math.trunc(dineroInicial/50);
    dineroInicial = dineroInicial - (billete50*50);

    billete20 = Math.trunc(dineroInicial/20);
    dineroInicial = dineroInicial - (billete20*20);

    billete10 = Math.trunc(dineroInicial/10);
    dineroInicial = dineroInicial - (billete10*10);

    billete5 = Math.trunc(dineroInicial/5);
    dineroInicial = dineroInicial - (billete5*5);

    moneda2 = Math.trunc(dineroInicial/2);
    dineroInicial = dineroInicial - (moneda2*2);

    moneda1 = Math.trunc(dineroInicial/1);
    dineroInicial = dineroInicial - (moneda1*1);

    moneda05 = Math.trunc(dineroInicial/0.5);
    dineroInicial = dineroInicial - (moneda05*0.5);

    moneda02 = Math.trunc(dineroInicial/0.2);
    dineroInicial = dineroInicial - (moneda02*0.2);

    dineroInicial = Math.round(dineroInicial*100)/100;

    moneda01 = Math.trunc(dineroInicial/0.1);
    dineroInicial = dineroInicial - (moneda01*0.1);

    document.write("Billetes: " + billete500 + "x500€ + " + billete200 + "x200€ + " + billete100 + "x100€ + " + billete50 + "x50€ + " + billete20 + "x20€ + " + billete10 + "x10€ + " + billete5 + "x5€");
    document.write("<br>Monedas: " + moneda2 + "x2€ + " + moneda1 + "x1€ + " + moneda05 + "x0.5€ + " + moneda02 + "x0.2€ + " + moneda01 + "x0.1€");
}