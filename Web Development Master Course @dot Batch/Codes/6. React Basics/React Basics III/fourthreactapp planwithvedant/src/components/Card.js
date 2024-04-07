import { useState } from "react";

function Card({ id, image, info, price, name, removeTour }) {
  const [readmore, setReadmore] = useState(false);

  const description = readmore ? info : `${info.substring(0, 200)}....`; // initially in a card, there is only 200 characters displaying, and then there is 'read more' button,
  // for that 200, we're storing 0-200 chars, in a description constant and applying
  // `${info.substring(0,200)}....` method on it.
  // if our readmore is true then display full info, otherwise, display only upto 200 string.
  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="card">
      <img src={image} className="image" alt=""></img>
      <div className="tour_info">
        <div className="tour_details">
          <h4 className="tour_price"> {price} </h4>
          <h4 className="tour_name"> {name} </h4>
        </div>
        <div className="description">
          {description}
          <span className="read_more" onClick={readmoreHandler}>
            {readmore ? `Show Less` : `Read More`}
          </span>
        </div>
      </div>
      <button className="btn_red" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;
