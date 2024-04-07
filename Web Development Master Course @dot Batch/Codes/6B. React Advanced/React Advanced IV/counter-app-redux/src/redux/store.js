import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";

// creating centralized store using configureStore() function
// store.js where all centralized data of redux get stored.
// a store in redux is made out of slices.
export const store = configureStore({
  reducer: {
    counter: CounterSlice,
  },
});

// in order to create any application, it is mandatory to create slice and store.
// NOTE - in order to link this [(redux code) store and slices] with our react - we use "Provider" 