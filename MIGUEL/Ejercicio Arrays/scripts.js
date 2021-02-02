// Ejercicio 1.

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

alert(meses);

//Ejercicio 2.


//1.
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var num = prompt("Introduce tu numero del DNI");

var letraPrograma;

var letraUsu = prompt("Introduce la letra del DNI");

console.log(letraUsu);

//2. 
if(parseInt(num)>99999999 || parseInt(num)<0){
    alert("El numero no es válido");
}

//3. 
else{
    letraPrograma = letras[parseInt(num)/23];
}

//4.
if(letraUsu != letraPrograma){
    alert("La letra introducida no es correcta");
}
else{
    alert("Numero y letra correctos!");
}


//Ejercicio 3.

var numEntero = parseInt(prompt("Intriduce un numero entero"));
var factorial= parseInt(1);

for(let i=numEntero; i>0; i--){
    factorial = i * factorial;
}

alert("Factorial = " + factorial);