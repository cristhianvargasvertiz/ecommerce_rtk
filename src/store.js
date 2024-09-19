import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Components/CartSlice'; 

// "export default" te permite cambiarle de nombre al archivo que vas IMPORTAR siempre y cuando este referenciado por el path del archivo
// "export default" es para importar todo un archivo entero y te permite cambiar el nombre por uno mas descriptivo 

// en cambio con solo "export" debes de exportar haciendo referencia a la funcion, componente, valor etc, del archivo exportado
// entonces solo "export" es para exportar partes de un archivo

const store = configureStore({
  reducer: {
    cart: cartReducer, 
  },
});

export default store;