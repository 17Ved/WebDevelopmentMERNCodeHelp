import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  // function for left shift handler
  function leftShiftHandler() {
    if (index - 1 < 0) {
      // if our index gets less than zero, then move it to last i.e. (n - 1) position.
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1); // in normal case, we'll shift our index to previous index.
    }
  }

  // function for right shift handler
  function rightShiftHandler() {
    if (index + 1 > reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseMeHandler() {
    /// math random will give us number to between 0 to n, i.e. between 0 to reveiws.length
    let randomIndex = Math.floor(Math.random() * reviews.length); // index are integer values, suppose we get a decimal(float) value like 1.2, but there is no index such as 1.2.
    setIndex(randomIndex);
  } // so we've to apply math.floor() in order to convert float into whole integer value.

  return (
    <div
      className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md"
    >
      <Card reviews={reviews[index]}></Card>
      <div className="flex text-3xl mt-8 gap-3 text-violet-400 font-bold mx-auto">
        <button
          onClick={leftShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={rightShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronRight />
        </button>
      </div>
      <div className="mt-6">
        <button
          onClick={surpriseMeHandler}
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer mt-5 px-10 py-2  rounded-md font-bold text-white text-lg"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
