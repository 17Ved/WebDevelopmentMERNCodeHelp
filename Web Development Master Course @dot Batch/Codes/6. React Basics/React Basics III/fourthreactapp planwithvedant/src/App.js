import React, { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";

const App = () => {
  const [tours, setTours] = useState(data); // initializing our tours with data, which is present in data.js

  function removeTour(id) {
    // removing tours on the basis of 'id' attribute
    const newTours = tours.filter((tour) => tour.id !== id); // here, we're creating new object, 'newTours', and then we're filtering our old 'tour' object using filter method,
    // on the basis of 'id', so we'll put only those 'tour' whose id's are not matching with 'newTours'
    // for example - suppose we pass 'agra' to the id, in that case our 'agra' id will get matched and it'll not get stored in 'newTours',
    // remaining tours (except 'agra') will get stored inside our 'newTours'.
    setTours(newTours); // so, on this line we're updating our setTours with newTours, here setTours will contain, all other id's except which are removed.
  }

  // feature -> if all tours are clicked as not interested, then we'll render this UI
  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2> No Tours Left !</h2>
        <button className="btn_white" onClick={() => setTours(data)}>
          {" "}
          {/** if button is clicked, then we'll initialize our tours with data again, so that all 7 tours will be displayed again. */}
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}>
        {" "}
      </Tours>
      {/** adding tours as prop in Tours component , then passing removeTour as a prop to Tours.js, so that it can be used in Card via Tours.js */}
    </div>
  );
};

export default App;
