import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  tags: []
}

export const tagSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    addtag: (state, action) => {
      state.tags.unshift(action.payload);
    },
    toggletag: (state, action) => {
      let indexElem = state.tags.findIndex(tag => tag.id === action.payload.id);
      console.log(indexElem);
      console.log(state.tags[indexElem]);
      state.tags[indexElem] = {...state.tags[indexElem], seleccionado: !state.tags[indexElem].seleccionado}
    },
    deletetag: (state,action) => {
      let indexElem = state.tags.findIndex(tag => tag.id === action.payload.id);
      state.tags.splice(indexElem,1);
    }
  }
});

export const { toggletag, addtag, deletetag } = tagSlice.actions

export default tagSlice.reducer