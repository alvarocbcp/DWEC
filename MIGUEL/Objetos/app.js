//Objetos

//3 maneras de definir objetos
/*
//1
var persona1 = {
    nombre: "Alvaro",
    apellido: "Cabello",
    edad: 20,
};

//2
var persona2 = new Object();
persona2.nombre = "Alvaro";
persona2.apellido = "Cabello";
persona2.edad = 20;
*/
//3
/*
function Persona (nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}*/
/*
var Luis = new Persona("Luis", "Lopez", 34);
var Ana = new Persona("Ana", "Garcia", 22);
*/
//document.write(Ana.apellido);

/*
Sintexis de acceso a las propiedades de un objeto
- objeto.propiedad
- objeto["propiedad"]
- objeto[expresion]
*/

//document.write(persona1.nombre);

//document.write(persona1["apellido"]);

//var expresion = "edad";
//document.write(persona1[expresion]);

//Si no conocemos las proiedades podemos utilizar un bucle for

/*
FormData(nombreVarieable in nombreObjeto){
    nombreObjeto[nombreVariable];
}
*/
/*
for(x in persona1){
    //document.write(persona1[x]);
}
*/
/*
//Añadir una propiedad a un objeto
//nombreObjeto.nuevaPropiedad = valorPropiedad;e
persona1.nacionalidad = "Español";
//document.write(persona1.nacionalidad);

//Borrar propiedades del objeto
//delete nombreObjeto.nombrePropiedad;

delete persona1.edad;

//Ya no existe la propiedad 'edad'
for(x in persona1){
    //document.write(persona1[x]);
}
*/
/*
Sintaxis de creacion de metodos de un objeto
nombreMetodo : function();

Sintaxis de acceso a los metodos
nombreObjeto.nombreMetodo();
*/
/*
var Persona3 = {
    nombre: "Pepe",
    apellido: "Garcia",
    nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
};
*/
//document.write(Persona3.nombre);
//document.write(Persona3.apellido);
//document.write(Persona3.nombreCompleto());


//Prototipos

function Persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
};

var Fran = Persona("Fran", "Lopez", 21);
var Carlos = Persona("Carlos", "Diaz", 43, "100");

//Fran.nacionalidad = "España";
//document.write(Carlos.nacionalidad);
/*
Fran.prototype.muestraEdad = function(){
    return "Tiene " + this.edad + " años";
}

document.write(Fran.muestraEdad());
document.write(Carlos.muestraEdad());
*/
//Si quiero añadir una propiedad al prototipo:
//1. Añadiendo directamente sobre la definicion
//2. Mediante la sintaxis nombreObjeto.prototype.propiedad;

//Persona.prototype.muerte = "100";
//alert(Carlos.muerte);

//Si quiero añadir un metodo a un prototipo
//1. Añadirlo directamente a la definicion
//2. Meidante la sintaxis nombreObjeto.prototype. metodo = ...;

Persona.prototype.defuncion = function(){
    return "Defuncion en el año: " + this.muerte;
}

var alan = new Persona("alan", "turing", 67);
//alert(alan.nombre);
//alert(alan.defuncion());

