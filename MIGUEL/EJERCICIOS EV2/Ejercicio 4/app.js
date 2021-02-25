window.onload = iniciar;

function iniciar(){
    document.getElementById("insertarParrafo").addEventListener('click', insertarParrafo);
    document.getElementById("cambiarParrafo").addEventListener('click', cambiarParrafo);
    document.getElementById("insertarImagen").addEventListener('click', function(){
        setTimeout(function(){
            insertarImagen();
        }, 3000);
    });
    document.getElementById("borrarElementos").addEventListener('click', borrarElementos);
}

function insertarParrafo(){
    let parrafo = document.createElement("p");
    let texto = document.createTextNode(document.getElementById("texto").value);
    parrafo.appendChild(texto);
    let contenedor = document.getElementById("div1");
    contenedor.appendChild(parrafo);
}

function cambiarParrafo(){
    let parrafo = document.getElementById("div1").lastChild;
    parrafo.setAttribute("class", "miClase");
}

function insertarImagen(){
    let ruta = "https://static.wikia.nocookie.net/esstarwars/images/4/43/TheChild-Fathead.png/revision/latest?cb=20200121062400";
    let imagen = document.createElement("img");
    imagen.setAttribute("alt", "Imagen de grogu");
    imagen.src = ruta;
    let contenedor = document.getElementById("div1");
    contenedor.appendChild(imagen);
}

function borrarElementos(){
    let contenedor = document.getElementById("div1");

    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}