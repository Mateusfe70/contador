// Importando o createSlice do Redux Toolkit para criar um slice do estado do contador
import { createSlice } from "@reduxjs/toolkit";

// Criando um slice do Redux para o contador, que inclui o estado inicial e as ações para incrementá-lo e decrementá-lo
const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        incrementar: (state) => {
            state.value += 1;
        },
        decrementar: (state) => {
            state.value -= 1;
        }
    }
});

// Exportando as ações para serem utilizadas no componente App e o reducer para configurar a store do Redux
export const { incrementar, decrementar } = counterSlice.actions;
export default counterSlice.reducer;