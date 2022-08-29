import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  notas: [
    {
      titulo: "Tarea para el lunes",
      id: 1,
      tags: [],
      favorito: true,
      archivada: false
    },
    {
      titulo: "Tarea para el miercoles",
      id: 7,
      tags: [],
      favorito: false,
      archivada: true
    }
  ]
};

export const notaSlice = createSlice({
  name:"notas",
  initialState,
  reducers: {
    crearnota: (state,action) => {
      state.notas = state.notas.push(action.payload);
    },
    actualizarnota: (state,action) => {
      let indexElem = state.notas.findIndex(n => n.id === action.payload.id);
      state.notas[indexElem] = action.payload;
    },
    togglefavorito: (state,action) => {
      let indexElem = state.notas.findIndex(n => n.id === action.payload.id);
      state.notas[indexElem] = {...state.notas[indexElem], favorito: !state.notas[indexElem].favorito};
    },
    togglearchivada: (state,action) => {
      let indexElem = state.notas.findIndex(n => n.id === action.payload.id);
      state.notas[indexElem] = {...state.notas[indexElem], archivada: !state.notas[indexElem].archivada};
    },
    borrarnota: (state,action) => {
      let indexElem = state.notas.findIndex(n => n.id === action.payload.id);
      state.notas.splice(indexElem,1);
    }
  }
});

export const { crearnota, actualizarnota, togglefavorito, togglearchivada, borrarnota } = notaSlice.actions;

export default notaSlice.reducer;