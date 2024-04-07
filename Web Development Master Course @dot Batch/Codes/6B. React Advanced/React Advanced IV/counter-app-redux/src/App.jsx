import React from "react";
import Counter from "./components/Counter"

const App = () => {
  return(
    <div>
      <Counter/>
    </div>
  )
};

export default App;


// whenever you try to give a state call from app component
// the flow goes like - app -> store -> slice
