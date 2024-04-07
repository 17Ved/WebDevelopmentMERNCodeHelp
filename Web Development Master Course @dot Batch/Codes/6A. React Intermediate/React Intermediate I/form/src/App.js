import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushnotification: "",
  });

  function changeHandler(event) {
    // destructuring of element types
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally printing values from FormData");
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center mt-4">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name </label>
        <br />
        <input
          type="text"
          placeholder="vedant"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <label htmlFor="lastName">Last Name </label>
        <br />
        <input
          type="text"
          placeholder="thombare"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <label htmlFor="email"> E - mail Address </label>
        <br />
        <input
          type="email"
          placeholder="ved123@gmail.com"
          name="email"
          id="email"
          value={formData.email}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline"
        >
          <option>India</option>
          <option>US</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <br />
        <label htmlFor="streetAddress">Street Address </label>
        <br />
        <input
          type="text"
          placeholder="1234 Blecker St."
          name="streetAddress"
          id="streetAddress"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline"
        />
        <br />

        <label htmlFor="city">City </label>
        <br />
        <input
          type="text"
          placeholder="Mumbai"
          name="city"
          id="city"
          value={formData.city}
          onChange={changeHandler}
          className="outline"
        />
        <br />

        <label htmlFor="state">State/Province </label>
        <br />
        <input
          type="text"
          placeholder="Maharashtra"
          name="state"
          id="state"
          value={formData.state}
          onChange={changeHandler}
          className="outline"
        />
        <br />

        <label htmlFor="postalCode"> Postal Code </label>
        <br />
        <input
          type="text"
          placeholder="400023"
          name="postalCode"
          id="postalCode"
          value={formData.postalCode}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <br />
        <fieldset>
          <legend>By E - mail</legend>
          <div className="flex">
            <input
              type="checkbox"
              name="comments"
              id="comments"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>

              <p>Get notified when someone posts a comment on posting. </p>
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              name="candidates"
              id="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>

              <p>Get notified when candidate applies for a job. </p>
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              name="offers"
              id="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>

              <p>Get notified when a candidate accepts or rejects an offer. </p>
            </div>
          </div>
        </fieldset>
        <br />
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <input
            type="radio"
            id="pushEverything"
            name="pushnotification"
            value="Everything"
            onChange={changeHandler}
          />
          <label htmlFor="pushEverything">Everything</label>
          <br />
          <input
            type="radio"
            id="pushEmail"
            name="pushnotification"
            value="sameasemail"
            onChange={changeHandler}
          />
          <label htmlFor="pushEverything">Same as E mail</label>
          <br />
          <input
            type="radio"
            id="pushNothing"
            name="pushnotification"
            value="nopushnotification"
            onChange={changeHandler}
          />
          <label htmlFor="pushNothing">No Push Notifications</label>
        </fieldset>
        <br />
        <button
          type="submit"
          className="bg-blue-500 font-bold rounded-md py-2 px-4 text-white"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
