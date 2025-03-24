import { useState, MouseEvent } from "react";

function ColorChange() {
  let items = ["Nagpur", "Goa", "Mumbai", "Pune"];

  //   const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
  //     e.currentTarget.style.backgroundColor = "yellow";
  //   };

  const [SelectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="container">
      <h2>List of cities</h2>
      <ul className="list-group">
        {items.length === 0 ? (
          <li>NO items found</li>
        ) : (
          items.map((item, index) => {
            return (
              <li
                className={
                  SelectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                key={index}
                onClick={() => {
                  setSelectedIndex(index);
                }}
              >
                {item}
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}

export default ColorChange;
