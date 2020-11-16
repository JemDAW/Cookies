export {alumno};

class alumno{
    constructor(DNI, nombre, nota_media){
        this.DNI= DNI;
        this.nombre= nombre;
        this.nota_media= nota_media;
    }

    modificarMedia(nota_media_nueva){
        if(nota_media_nueva<=10 && nota_media_nueva>=0){
        this.nota_media= nota_media_nueva;
        console.log('Nota media modificada');
        }
    }
}