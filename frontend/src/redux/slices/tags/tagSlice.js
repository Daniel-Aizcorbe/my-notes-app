import { createSlice } from "@reduxjs/toolkit";

export const tagSlice = createSlice({
  name: "tags",
  initialState: {
    tags: []
  },
  reducers: {
    tags: (state, action) => {
      return {
        ...state,
        tags: [...state.tags, action.payload]
      }
    }
  }
});

export default tagSlice.reducer;