import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/CounterSlice";

const Counter = () => {
  // we use useSelector() hook, in order to fetch specific value/data from a slice
  // useSelector() provides you functionality to data access

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button
      onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <br />
      <div>{count}</div>
      <br />
      <br />
      <button
      onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;


// useDispatch hook is used to call the functionality inside our reducer (present in counterslice -> slice)
// in order to use it in button onClick handler