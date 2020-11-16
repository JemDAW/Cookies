export {colegio};
import {alumno} from './alumno.js';

class colegio{
    constructor(nombre, numero_aulas, numero_alumnos){
        this.nombre= nombre;
        this.numero_aulas= numero_aulas;
        this.alumnos= [];
        if(numero_alumnos > 0){
            this.addAlumnosIniciales(numero_alumnos);
        }
    }

    addAlumnosIniciales(numero_alumnos){
        for(let i=0;i<numero_alumnos;i++){
          let alumnoNuevo=  new alumno(this.dniAleatorio(), 'nombre' + i, this.notaAleatoria());
          this.alumnos.push(alumnoNuevo);
        }
    }

    dniAleatorio() {
       let num = Math.floor( ( Math.random() * 100000000 ) );
        return num;
      }

    notaAleatoria(){
      return  Math.floor(Math.random() * (10 - 0 + 1) + 0);
    }

    obtenerMedia(){
        let media=0;
        for(let i=0; i<this.alumnos.length;i++){
          media+=  this.alumnos[i].nota_media;
        }
        let mediaReal= media/this.alumnos.length;
        return mediaReal.toFixed(2);
    }

    addAlumnoNuevo(DNI, nombre, nota_media){
        if(nota_media<=10 && nota_media>=0){
        let alumNuevo= new alumno(DNI, nombre, nota_media);
        this.alumnos.push(alumNuevo);
        }else{
        console.log('Alumno: ' + nombre+ ' no añadido.')}
    }

    modificarMediaAlumno(nombre, nota_media_nueva){
        for(let i=0;i<this.alumnos.length;i++){
            if(this.alumnos[i].nombre == nombre){
                this.alumnos[i].modificarMedia(nota_media_nueva);
            }
        }
    }
}


