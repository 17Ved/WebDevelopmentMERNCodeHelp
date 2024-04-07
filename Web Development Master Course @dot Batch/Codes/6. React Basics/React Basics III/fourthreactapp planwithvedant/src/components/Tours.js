import Card from "./Card";

function Tours({ tours, removeTour }) {
  return (
    <div className="container">
      <div>
        <h2 className="title"> Plan With Vedant </h2>
      </div>
      <div className="cards">
        {tours.map((tour) => {
          // for each particular tour, you're returning <Card></Card>,
          return (
            <Card key={tour.id} {...tour} removeTour={removeTour}>
              {" "}
            </Card>
          ); // {...tour} -> by declaring {...tour} object like this, we're passing a copy of whole tour object, which contains 7 cards. This is also known as Cloning.
        })}{" "}
        {/** In simple terms we're displaying our Card component and passing the required data with it, which is in {...tour} */}
        {/** passing removeTour further to Card*/}
        {/** NOTE - whenever you're using 'map' function with 'components', don't forget to pass 'key' with that 'map' function */}
      </div>
    </div>
  );
}

export default Tours;
