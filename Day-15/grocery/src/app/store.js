

// we have include store congiguration
// store name:

// reducers


import { configureStore } from "@reduxjs/toolkit";
import groceryReducer from "../features/grocerySlice"

export const store = configureStore({
  reducer: {
    grocery: groceryReducer
  }
});
