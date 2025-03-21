import { Fragment, useState } from "react";
import { MouseEvent } from "react";
import "bootstrap/dist/css/bootstrap.css";

function ListGroupOld() {
  let items = ["New York", "LA", "Ohio", "Paris"];
  // let selectedItem = 0;

  //   items = [];

  //   if (items.length == 0) {
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No Item Found</p>
  //       </>
  //     );
  //   }

  const [selectedIndex, setSelectedIndex] = useState(-1);

  // event handler
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No Item Found</p> : null} */}
      {items.length == 0 && <p>No item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            // className="list-group-item active"
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
            // onClick={handleClick}
            // onClick={(event) => {
            //   console.log(event);
            // }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroupOld;
