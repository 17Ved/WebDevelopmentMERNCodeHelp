import "./ItemDate.css";

function ItemDate(props) {
  // passing 'props' as parameter here.
  // const day = 24; //in order to use values of day, month and year, we'll use {}
  // const month = "June"; // like this <span>{day}</span>
  // const year = 1987; // useful when we'll fetch data from 'api',  the value of fetched data will be displayed, when we use {}.

  const day = props.day; // passing properties / props here, refer to app.js -> line 8 to 13
  const month = props.month;
  const year = props.year;

  return (
    <div className="mfg-date">
      <span>{day}</span>
      <span>{month}</span>
      <span>{year}</span>
    </div>
  );
}

export default ItemDate;
