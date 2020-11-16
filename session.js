export{
    leerVisitasDeAlmacen,
    guardarEnAlmacen,
    resetearAlmacen,
};

function leerVisitasDeAlmacen(){
    return sessionStorage.getItem(0);
}

function guardarEnAlmacen(){
    if(sessionStorage.length == 1){
        sessionStorage.setItem(0,1);
    }else{
       let visitas= parseInt(sessionStorage.getItem(0));
       visitas += 1;
       sessionStorage.setItem(0,visitas);
    }
}

function resetearAlmacen() {
    sessionStorage.clear();
  }