// Importando a função configureStore do Redux Toolkit e o reducer do contador
import { configureStore } from "@reduxjs/toolkit";

// Importando o reducer do contador para configurar a store
import counterReducer from "./counterReducer";

// Configurando a store do Redux com o reducer do contador
const store = configureStore({
    reducer: {
        counter: counterReducer
    }
}); 
// Exportando a store para ser utilizada no aplicativo
export default store;