import {configureStore} from "@reduxjs/toolkit";

import tagReducer from "./slices/tags/tagSlice";
import notaReducer from "./slices/notas/notaSlice";

export default configureStore(
  {
    reducer: {
      tags: tagReducer,
      notas: notaReducer
    }
  }
);

