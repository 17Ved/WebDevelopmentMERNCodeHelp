import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [name, setName] = useState("Ved");

  // variation one - we'll be using this useEffect for every render
  useEffect(() => {
    console.log("UI rendering done");
  });

  // variation two - only for first render
  useEffect(() => {
    // here, second parameter which is '[]', (empty array), states to dependencies list, we passed it as empty.
    console.log("UI rendering only once...");
  }, []);

  // variation three - first render + whenever dependecy (dependencies list) changes.
  useEffect(() => {
    console.log("Change observed");
  }, [name]);

  // variation four - to handle unmounting of component / unmounting means - removing from DOM
  useEffect(() => {
    // add event listener
    console.log("Listener added"); // then this line will get execute.

    return () => {
      // this line of code will execute first, in variation four.
      console.log("Listener removed");
    };
  }, [text]);

  //--------------------------------------
  function changeHandler(event) {
    console.log(text);
    setText(event.target.value);
  }

  return (
    <div className="App">
      <input type="text" onChange={changeHandler} />
    </div>
  );
}

export default App;
