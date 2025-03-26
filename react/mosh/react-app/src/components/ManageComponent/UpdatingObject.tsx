import React, { useState } from "react";

// treat the state as props ie unmutate
function UpdatingObject() {
  const [bottle, setBottle] = useState({
    title: "jin",
    price: 5,
  });

  function handleClick() {
    setBottle({ ...bottle, price: bottle.price + 1 });
  }

  //   console.log(bottle.price);

  return (
    <div>
      {bottle.price}
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default UpdatingObject;
