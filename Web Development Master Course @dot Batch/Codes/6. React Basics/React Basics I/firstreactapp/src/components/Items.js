import "./Items.css"; // importing items.css in order to apply css to the components present in this (items.js) file.

// syntax to create a component
function Items(props) {
  // created a component
  const name = props.name;
  return (
    <div>
      <p className="leo">{name}</p>
      {props.children}
    </div>
  ); // jsx code (user-friendly), browser doesn't understand this code.
}

// syntax to export component
export default Items; // exporting component
