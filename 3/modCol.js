import {colegio} from './colegio.js';
import * as almacen from './almacenLocal.js';

window.addEventListener('load', iniciar, false);

var botonColegio= document.getElementById("addColegio");
botonColegio.addEventListener('click', addColegioNuevo, false);

var botonAlumno= document.getElementById("addAlumno");
botonAlumno.addEventListener('click', addAlumnoNuevo, false);

var eliminar= document.getElementById("borrarAlmacen");
eliminar.addEventListener('click', eliminarAlmacen, false);

function iniciar(){
   mostrarAlmacen();

   let arrayAlmacen =  almacen.leerObjetosDeAlmacen();

   var formAlum= document.getElementById("alumno");
   let select = document.createElement('select');
   select.attributes.required = "required";
   select.id= "selCole";
   let label = document.createElement('label');
   label.innerHTML = 'Añadir alumno al colegio: '
   for (let i = 0; i < arrayAlmacen.length; i++){
      var clave = arrayAlmacen[i].key;
      let option = document.createElement('option');
      option.innerHTML = clave;
      option.value = clave;
      select.appendChild(option);
   }
   label.appendChild(select);
   formAlum.appendChild(label);
}

function addColegioNuevo(){
let nombre = document.getElementById("nombreCol").value;
let aulas = document.getElementById("numAulas").value;
let alumnos = document.getElementById("numAlumnos").value;

let newColegio = new colegio(nombre,aulas,alumnos);

almacen.guardarEnAlmacen(nombre, JSON.stringify(newColegio));

location.reload();

}

function addAlumnoNuevo(){
let nombre = document.getElementById("nomAlumno").value;
let dni = document.getElementById("dniAlumno").value;
let nota = document.getElementById("notaMedia").value;

let colegioElegido = document.getElementById("selCole").value;

let colegioAlmacen =  almacen.getElemento(colegioElegido);

let colegioObjeto = Object.assign(new colegio(), JSON.parse(colegioAlmacen));

colegioObjeto.addAlumnoNuevo(dni, nombre, nota);

almacen.guardarEnAlmacen(colegioElegido, JSON.stringify(colegioObjeto));

location.reload();
}

function mostrarAlmacen(){
 var cajadatos = document.getElementById('datosAlmacen');
 var innerHTML = '<h2>Datos Guardados:</h2>';
 let arrayAlmacen =  almacen.leerObjetosDeAlmacen();

 for (let i = 0; i < arrayAlmacen.length; i++){
    var clave = arrayAlmacen[i].key;
    var valor = arrayAlmacen[i].value;
    var arrayValores = Object.assign(new colegio(), JSON.parse(valor));
    innerHTML += '' + clave + ': <br>';
    innerHTML += '- Numero de aulas: ' + arrayValores.numero_aulas + '<br>';
    innerHTML += '- Numero de alumnos: ' + arrayValores.alumnos.length + '<br>';
    innerHTML += '- Alumnos: <br>';
    for(let j =0; j < arrayValores.alumnos.length; j++){
      innerHTML += (j+1) + '. ' + arrayValores.mostrarAlumno(j) + '. <br>';
    }
    innerHTML += '<br>';
 }

 cajadatos.innerHTML = innerHTML;
}

function eliminarAlmacen(){
   almacen.resetearAlmacen();
   location.reload();
}