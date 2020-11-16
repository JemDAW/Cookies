import * as almacen from './cookies.js';

window.addEventListener('load', addVisitas, false);

var botonEliminar= document.getElementById("delete");
botonEliminar.addEventListener('click', eliminarAlmacen, false);

function addVisitas(){
   almacen.guardarEnAlmacen();
   var h1= document.getElementById("visitas");

   var visitas= almacen.leerVisitasDeAlmacen();
   h1.innerText =  "Esta web ha sido visitada " + visitas + " veces."
}

function eliminarAlmacen(){
   almacen.resetearAlmacen();
   location.reload();
}