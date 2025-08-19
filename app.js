//* El principal objetivo de este desafío es fortalecer tus habilidades
//  en lógica de programación. Aquí deberás desarrollar la lógica para resolver
//  el problema*//

let listaAmigoss = [];
let numeroGenerado = 0;
let nombreAmigo = "";
let nombreAmigo2 = "";



function agregarAmigo(){
    if (document.getElementById("amigo").value == ""){
        return alert("Debe ingresar un nombre valido");
    }else{

        let nombreAmigo2 = document.getElementById("amigo").value;
        nombreAmigo = nombreAmigo2.toUpperCase() //deja todo en MAYUSC para validar siempre el nombre
     if (listaAmigoss.includes(nombreAmigo)){
           limpiarCaja(); 
           return alert("Este nombre ya fue ingresado");
        }else{
            listaAmigoss.push(nombreAmigo);
            muestralista();
            limpiarCaja();
            return nombreAmigo;
     }  
    }
  
}  
 //  console.log (listaAmigoss);    //revisamos como va llenando la lista

function limpiarCaja() {
    document.querySelector("#amigo").value = "";
    
}


function sortearAmigo() {
    //document.getElementById("listaAmigos").innerHTML = ""; // limpia lista HTML
    
    let numeroGenerado = Math.floor(Math.random()*listaAmigoss.length);
    //console.log (numeroGenerado);//revisamos el index del amigo en el array
    const gana = document.getElementById('resultado');
    const elementoLista = document.createElement('li');
    elementoLista.textContent = listaAmigoss[numeroGenerado];
    gana.appendChild(elementoLista);
    document.getElementById("listaAmigos").innerHTML = "";
    document.querySelector("#agregaAmi").setAttribute("disabled","true");
    document.querySelector("#sorteoAmi").setAttribute("disabled","true");
  
}

function condicionesIniciales(){
    listaAmigoss = [];
}


function muestralista(){

    const lista = document.getElementById('listaAmigos');
    document.getElementById("listaAmigos").innerHTML = "";
    
    listaAmigoss.forEach(function(nombre) {
    const elementoLista = document.createElement('li');
    elementoLista.textContent = nombre;
    lista.appendChild(elementoLista);
    })
}    

