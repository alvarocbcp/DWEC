document.addEventListener("DOMContentLoaded", ()=>{
    console.log("DOM CARGADO!");
    aplicacion();
});

function aplicacion(){
    let persona = {
        nombre: "Álvaro",
        apellido: "Cabello",
        peso: 87,
        altura: 183
    }
    
    let personaFormateada = formatear(persona);
    
    function formatear(persona){
        let persona2 = {
            nombre: "",
            apellido: "",
            peso: "",
            altura: ""
        }

        persona2.nombre = persona.nombre;
        persona2.apellido = persona.apellido;
    
        if(persona.peso != undefined){
            persona2.peso = persona.peso + "kg";
        }
        else{
            delete persona2.peso;
        }
        if(persona.altura != undefined){
            persona2.altura = persona.altura + "cm";
        }
        else{
            delete persona2.altura;
        }
    
        return persona2;
    }
    
    console.log(personaFormateada);
    if(personaFormateada.peso != undefined && personaFormateada.altura != undefined){
        document.write("Nombre: " + personaFormateada.nombre + "<br>Apellido: " + personaFormateada.apellido + "<br>Peso: " + personaFormateada.peso + "<br>Altura: " + personaFormateada.altura);
    }
    else if(personaFormateada.peso != undefined && personaFormateada.altura == undefined){
        document.write("Nombre: " + personaFormateada.nombre + "<br>Apellido: " + personaFormateada.apellido + "<br>Peso: " + personaFormateada.peso);
    }
    else if(personaFormateada.peso == undefined && personaFormateada.altura != undefined){
        document.write("Nombre: " + personaFormateada.nombre + "<br>Apellido: " + personaFormateada.apellido + "<br>Altura: " + personaFormateada.altura);
    }
    else{
        document.write("Nombre: " + personaFormateada.nombre + "<br>Apellido: " + personaFormateada.apellido);
    }
}
