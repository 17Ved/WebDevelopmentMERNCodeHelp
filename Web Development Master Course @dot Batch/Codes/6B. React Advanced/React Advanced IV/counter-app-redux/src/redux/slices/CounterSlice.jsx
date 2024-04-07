import { createSlice } from "@reduxjs/toolkit";

// creating slice using createslice() function

const initialState = {
  value: 0,
};

export const CounterSlice = createSlice({
  // we've to pass object as input inside our createslice function
  // 1.name, 2.initital state and 3.reducer(functionality)

  name: "counter",
  initialState,

  // creating object for reducers in order to add functionality inside it.
  reducers: {
    // this object defines functionality
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// in order to take out the functionality of slices from it,
// we've to take values from its actions.
// so, we'll use CounterSlice.actions., so we can use it in

// here, we're taking out the implementation of increment and decrement function into actions (part) and exporting it.

// destructuring method
export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;

// Action creators are generated for each case reducer function
