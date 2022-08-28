import { createSlice } from "@reduxjs/toolkit";
import {amarillo, azul, bordo} from "../../../components/home/logica/colores-tag";
import {createTag, quitarTag, seleccionarTag} from "./reducers/reducersTags";

export const tagSlice = createSlice({
  name: "tags",
  initialState: {
    tags: [
      {
        nombre: "tag-no-seleccionado",
        color: azul,
        id: "0",
        seleccionado: false
      },
      {
        nombre: "tag-selecionado",
        color: bordo,
        id: "1",
        seleccionado: true
      },
      {
        nombre: "tag-sugerido",
        color: amarillo,
        id: "2",
        seleccionado: false
      }
    ],
  },
  reducers: {
    quittag: quitarTag,
    selecttag: seleccionarTag,
    createtag: createTag
  }
});

export const {quittag, selecttag} = tagSlice.actions;

export default tagSlice.reducer;