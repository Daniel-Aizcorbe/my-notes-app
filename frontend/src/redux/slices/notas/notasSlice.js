import { createSlice } from "@reduxjs/toolkit";
import {agregarNota, toggleFav, toggleNota} from "./reducers/reducersNotas";

const initialState = {
    notas: [{
      titulo: "Nota #1",
      id:"1",
      tags: ["holis","nueva","cosas"],
      favorito: true
    },
      {
        titulo: "Nota #2",
        id:"2",
        tags: [],
        favorito: false,
        archivado: false
      },
      {
        titulo: "Nota #3",
        id:"3",
        tags: [],
        favorito: true,
        archivado: false
      },
      {
        titulo: "Nota #4",
        id:"4",
        tags: [],
        favorito: false,
        archivado: false
      },
      {
        titulo: "Nota #5",
        id:"5",
        tags: [],
        favorito: false,
        archivado: false
      }
      ]
  };

export const notasSlice = createSlice({
  name: "notas",
  initialState,
  reducers: {
    agregarnota: agregarNota,
    togglearchivar: toggleNota,
    togglefav: toggleFav,
  }
});

export const { agregarnota, togglearchivar, togglefav } = notasSlice.actions;

export default notasSlice.reducer;