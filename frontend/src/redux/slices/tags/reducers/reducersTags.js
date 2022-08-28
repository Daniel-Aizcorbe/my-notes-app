
export const quitarTag = (state,action) => state.tags.find(t => t.id === action.payload.id).seleccionado = false;

export const seleccionarTag = (state,action) => state.tags.find(t => t.id === action.payload.id).seleccionado = true;

export const createTag  = (state,action) => state.push(action.payload);