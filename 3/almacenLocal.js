export {
    leerObjetosDeAlmacen,
    eliminarDeAlmacen,
    guardarEnAlmacen,
    resetearAlmacen,
    getElemento,
  };
  
  function leerObjetosDeAlmacen() {
    let items = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      items.push({ key: key, value: localStorage.getItem(key) });
    }
    return items;
  }

  function getElemento(clave){
    return localStorage.getItem(clave);
  }

  function eliminarDeAlmacen(clave) {
    localStorage.removeItem(clave);
  }
  
  function guardarEnAlmacen(clave, valor) {
    localStorage.setItem(clave, valor);
  }
  
  function resetearAlmacen() {
    localStorage.clear();
  }