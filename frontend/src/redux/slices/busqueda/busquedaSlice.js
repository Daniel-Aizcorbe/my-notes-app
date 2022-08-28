import {createSlice} from "@reduxjs/toolkit";
import {setInput} from "./reducers/reducersBusqueda";

export const busquedaSlice = createSlice({
  name: "busqueda",
  initialState: {
    input: ""
  },
  reducers: {
    setinput: setInput
  }
});

export const { setinput } = busquedaSlice.actions;

export default busquedaSlice.reducer;