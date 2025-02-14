import { configureStore } from "@reduxjs/toolkit";
import reloadReducer from "./reloadSlice";

export const store = configureStore({
  reducer: {
    loading: reloadReducer,
  },
  devTools: false,
});
