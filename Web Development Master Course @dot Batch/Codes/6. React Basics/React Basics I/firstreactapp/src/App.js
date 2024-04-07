import "./App.css";
import ItemDate from "./components/ItemDate";
import Items from "./components/Items";
import Card from "./components/Card";

// function App() {
//   const samplename = "Sergio Busquests 18"; // 2nd way of passing props, refer to line 20, (preferred way)
//   return (
//     <div>
//       {/*1st way of passing props */}
//       <Items name="Lionel Messi 10"></Items>{" "}
//       {/* passing props (properties here,) refer to Items.js and ItemDate.js file*/}
//       <ItemDate day="87" month="August" year="1987"></ItemDate>

//       <Items name="Neymar Junior 11"></Items>
//       <ItemDate day="97" month="Jaunary" year="1527"></ItemDate>

//       <Items name="Luis Suarez 9"></Items>
//       <ItemDate day="15" month="September" year="1327"></ItemDate>

//       {/* 2nd way of passing props */}
//       <Items name={samplename}></Items>
//       <ItemDate day="17" month="February" year="5647"></ItemDate>
//       <div className="App">Hello there !</div>;
//     </div>
//   );
// }

function App() {
  const response = [
    // 3rd of way of passing props, by creating array, storing our values in 'response', then passing it to Items and ItemDate.
    {
      itemName: "vedant",
      itemDate: "05",
      itemDay: "Tuesday",
      itemYear: "2001",
    },
    {
      itemName: "jayesh",
      itemDate: "29",
      itemDay: "Monday",
      itemYear: "2001",
    },
    {
      itemName: "harshal",
      itemDate: "19",
      itemDay: "Sunday",
      itemYear: "2001",
    },
  ];

  return (
    <div>
      <Card>
        <Items name={response[0].itemName}>
          hello this is props dot children{" "}
          {/* by default this line or Component's children are not visible, 
        but, if we want to render this line (make visible), which is present inside our Items component,
        we've to specify this props children inside our Items component. refer to Items.js file -> line 10  */}
        </Items>
        <ItemDate
          day={response[0].itemDate}
          month={response[0].itemDay}
          year={response[0].itemYear}
        ></ItemDate>
        <Items name={response[1].itemName}></Items>
        <ItemDate
          day={response[1].itemDate}
          month={response[1].itemDay}
          year={response[1].itemYear}
        ></ItemDate>
        <Items name={response[2].itemName}></Items>
        <ItemDate
          day={response[2].itemDate}
          month={response[2].itemDay}
          year={response[2].itemYear}
        ></ItemDate>
      </Card>
    </div>
  );
}

export default App;
