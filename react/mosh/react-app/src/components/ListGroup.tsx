import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "LA", "Ohio", "Paris"];
  //   items = [];

  //   if (items.length == 0) {
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No Item Found</p>
  //       </>
  //     );
  //   }

  const handler = 

  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No Item Found</p> : null} */}
      {items.length == 0 && <p>No item Found</p>}
      <ul className="list-group">
        {items.map((item,index) => (
          <li
            className="list-group-items"
            key={item}
            onClick={(event) => {
              console.log(event);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
