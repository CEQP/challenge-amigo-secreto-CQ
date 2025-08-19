//* El principal objetivo de este desafío es fortalecer tus habilidades
//  en lógica de programación. Aquí deberás desarrollar la lógica para resolver
//  el problema*//

let listaAmigoss = [];
//let numeroMaximo = length.listaAmigos;
let numeroGenerado = 0;
let nombreAmigo = "";



function asignarTextoelemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value;
    if (listaAmigoss.includes(nombreAmigo)){
           limpiarCaja(); 
           return alert("Este nombre ya fue ingresado");
        }else{
            listaAmigoss.push(nombreAmigo);
            limpiarCaja();
            return nombreAmigo;
     }  
  
}  
   console.log (listaAmigoss);    

function limpiarCaja() {
    document.querySelector("#amigo").value = "";
    
}


function generarNumerosecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
  
}
//asignarTextoelemento("listaAmigos", "nombreAmigo");