export const agregarNota = (state,action) => {
  return state.notas.push(action.payload);
}

export const toggleNota = (state,action) => {
  return state.notas.find(n => n.id === action.payload.id).archivada = !state.notas.find(n => n.id === action.payload.id).archivada;
};

export const toggleFav = (state,action) => {
  return state.notas.find(n => n.id === action.payload.id).favorito = !state.notas.find(n => n.id === action.payload.id).favorito;
};
