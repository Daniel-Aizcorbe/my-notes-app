import {configureStore} from "@reduxjs/toolkit";

import tags from "./slices/tags/tagSlice.js";

export default configureStore(
  {
    reducer: {
      tags
    }
  }
);