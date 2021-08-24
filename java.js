//BOTON DEL SI, PARA QUE LA MAMACITA ACEPTE SER MI NOVIA :D

let si = document.getElementById("si");
function AccionYes(){
    alert("Somos Novios! Te dedico unas palabras que veras a continuacion")
    window.location.href = "index2.html"
}

//BOTON DEL NO, PARA QUE LA MAMACITA SE TOME TIEMPO EN ATRAPARLO >:D

let no = document.getElementById("no");
function mueveElBoton(){
    width = window.innerWidth;
    height = window.innerHeight;

    newWidth = (Math.random() * width);
    newHeight = (Math.random() * height);

    document.getElementById('no').style.position = "fixed";
    document.getElementById('no').style.left = newWidth + "px";
    document.getElementById('no').style.top = newHeight + "px";
}
