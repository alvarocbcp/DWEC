document.getElementById("demo").onkeydown=function(){
    myFunction("demo", "blue")
};

function myFunction(id, color) {
    id.style.backgroundColor = color;
}