import { useState } from "react";
import "./ProductForm";

function ProductForm(props) {
  const [newTitle, setTitle] = useState(""); // line 6 & 7 shows us, how to handle multiple states (by adding single lines / singlehandedly)
  const [newDate, setDate] = useState(""); // here we're handling title and date states.

  function titleChangeHandler(event) {
    setTitle(event.target.value);
    //console.log(event.target.value);
  }
  function dateChangeHandler(event) {
    setDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault(); // preventDefault is used to restrict default behavior of form
    // after clicking submit(46), we don't want to take any action, that's why we applied prevenDefault() on our onSubmit event.
    // we want to do the action which is written in submitHandler(). so for that we must prevent its default action.

    // we want to print our data in form of object.
    const productData = {
      title: newTitle,
      date: newDate,
    };

    // console.log(productData);
    props.onSaveProduct(productData);

    setTitle(""); // for emptying Title and Date after use.
    setDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-product_controls">
        <div className="new-product_control">
          <label>Title</label>
          <input
            type="text"
            value={newTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-product_control">
          <label>Date</label>
          <input
            type="date"
            value={newDate}
            onChange={dateChangeHandler}
            min="2023-01-01"
            max="2023-12-12"
          ></input>
        </div>
        <div className="new-product_button">
          <button type="submit">Add Product</button>
        </div>
      </div>
    </form>
  );
}

export default ProductForm;
