import { useState } from "react";
import "./App.css";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // console.log(firstName);
  // console.log(las tName);
  // function changeHandler(event) {
  // console.log("printing first name");
  // console.log(event.target.value); // event.target.value - gives us value provided in the input field firstname
  // console.log(event.target);            // event.target - gives us input tag, which we provided to get input. you're referring to that particular elemnt with this.
  //   setFirstName(event.target.value);
  // }

  // function lastchangeHandler(event) {
  // console.log("printing last name");
  // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  //----------------------------------------------------------------------------------------------------------

  // here we're creating formData object (state variable), in which all form related data will get stored(of different types)
  // then we initialized our formData object with - 'firstName' , and 'lastName'
  // now, there is no need to give different onChange, or any other handler to each and every element
  // that's why we're keeping its name same, i.e. -'changeHandler'
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
  });

  // console.log(formData);
  // console.log(formData.email);
  // using changeHandler, we'll keep updated all our values resides inside formData object
  function changeHandler(event) {
    const { name, type, checked, value } = event.target; // on this line we're checking - [event.target.name] : event.target.value including checkbox input type
    // destructuring 4 properties from the input elements or we can say event.target.

    setFormData((prevFormData) => {
      // prevFormData - here means the old stage/status of our formData object./ old data inside formData
      return {
        ...prevFormData, // so, here we're returning our prevData alongwith new updated data.
        // [event.target.name] : event.target.value     // but how do we determine, from which input element our changeHandler is getting called.
        //[name] : value
        [name]: type === "checkbox" ? checked : value, // checking if this is a checkbox, if yes then putting checked value, and copying value
      }; // for that, we use "name", to recognize from which input element we're getting called.
      // that's why we're using - [event.target.name] : event.target.value;      / event.target.name = event.target.value
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    // print
    console.log("finally printing entire form data ");
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="firstname"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <br />
        <input
          type="text"
          placeholder="lastname"
          // onChange={lastchangeHandler}
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <input
          type="email"
          placeholder="e mail"
          // onChange={lastchangeHandler}
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />
        <br />
        <textarea
          placeholder="comments here"
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />
        <br />
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          checked={formData.isVisible}
          // value={formData.isVisible}    // for checkboxes, we don't use value attribute, we use checked to check whether it is selected/checked or not.
          id="isVisible"
        />
        <label htmlFor="isVisible"> Am I Visible ? </label>
        <br />
        <fieldset>
          <legend> Modes: </legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Online-Mode"
            id="Online-Mode"
            checked={formData.mode === "Online-Mode"}
          />
          <label htmlFor="mode"> Online Mode </label>

          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Offline-Mode"
            id="Offline-Mode"
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor="mode"> Offline Mode </label>
          <br />
        </fieldset>
        <label htmlFor="favCar"> Your favorite car please !</label>
        <select
          onChange={changeHandler}
          name="favCar"
          id="favCar"
          value={formData.favCar}
        >
          <option value="scorpio">Scorpio</option>
          <option value="legender">Legender</option>
          <option value="fortuner">fortuner</option>
          <option value="city">City</option>
          <option value="bmw">BMW</option>
        </select>
        <button type="submit">send</button> <br />
        {/* <input type="submit" value="submit"/> */}
      </form>
    </div>
  );
}

export default App;

// while working with radio buttons, if you set same name for two different radio buttons, only one of them will get selected,
// but if you set different names for two different radio buttons, both will get selected.
