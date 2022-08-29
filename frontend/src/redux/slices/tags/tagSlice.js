import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tags: []
}

export const tagSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    creartag: (state, action) => {
      state.tags = state.tags.push(action.payload);
    },
    toggletag: (state, action) => {
      let indexElem = state.tags.findIndex(tag => tag.id === action.payload.id);
      state.tags[indexElem].seleccionado = !state.tags[indexElem].seleccionado;
    }
  }
});

export const { creartag, toggletag } = tagSlice.actions

export default tagSlice.reducer