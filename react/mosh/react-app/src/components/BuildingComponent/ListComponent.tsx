import { MouseEvent } from "react";

function ListComponent() {
  let items = ["Nagpur", "Goa", "Mumbai", "Delhi"];

  const handleClick = (event: MouseEvent) => {
    console.log(event.clientX + "x" + event.clientY + "px");
  };

  const message =
    items.length === 0 ? (
      <li className="list-group-item">No items found</li>
    ) : (
      items.map((item, index) => {
        return (
          <li className="list-group-item" key={index} onClick={handleClick}>
            {item}
          </li>
        );
      })
    );

  return (
    <div className="container">
      <h2>LIst of Cities</h2>

      <ul className="list-group">{message}</ul>
    </div>
  );
}

export default ListComponent;
