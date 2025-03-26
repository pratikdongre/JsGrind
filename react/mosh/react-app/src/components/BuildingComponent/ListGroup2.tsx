function ListGroup2() {
  let items = ["Nagpur", "Goa", "Mumbai", "Pune", "Delhi"];

  items = [];

  // if (items.length === 0) {
  //   return (
  //     <>
  // <h1>List</h1>
  //       <div>No Items found</div>
  //     </>
  //   );
  // }

  const message = items.length === 0 ? <li>No items found</li> : null;
  let getMessage = () => {
    return items.length === 0 ? <li>No items found</li> : null;
  };

  return (
    <div className="container">
      <p>List of City</p>
      <ul className="list-group">
        {message}
        {getMessage()}
        {/* <li className="list-group-item">City</li> */}
        {items.length === 0 ? <li>No item found</li> : null}
        {items.length === 0 && <li>No items found..</li>}
        {items.map((item, index) => {
          return (
            <li key={index} className="list-group-item">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListGroup2;
