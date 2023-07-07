let menuVisible =false;
//funcion que oculta o muestra el munu
function mostrarOcultarMenu(){
    if (menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false
    }
    else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible=false;
}
