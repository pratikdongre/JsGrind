import { useState } from "react";

// react updates the state asynchronously , for performance reasons it batches the state and re-renders
// state is stored outside of componenents(the state is maintained in react internal system) as longs athe components is visible
// use Hook at the top level of your componenent because react maintains the order of state we cant just use them inside nested loops or such

function First() {
  const [isVisible, setVisiblity] = useState(false);

  const handleClick = () => {
    setVisiblity((prev) => (prev = !prev));
    console.log(isVisible);
  };
  return (
    <div>
      <button onClick={handleClick}>Show</button>
    </div>
  );
}

export default First;
