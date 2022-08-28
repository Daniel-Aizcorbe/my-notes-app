import {configureStore} from "@reduxjs/toolkit";

import tagsReducer from "./slices/tags/tagSlice.js";
import notasReducer from "./slices/notas/notasSlice";

export default configureStore(
  {
    reducer: {
      tags: tagsReducer,
      notas: notasReducer
    }
  }
);