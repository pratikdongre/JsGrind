import React, { useState } from "react";

function UpdaterFunction() {
  const [count, setCount] = useState(0);

  const IncrementCount = () => {
    // setCount(count +1);
    // use current state to calculate next state
    // set function do not trigger the update
    // next state becomes the current state after an update.
    // react batches state together for perfomance reasons
    // setCount(count +1);
    // setCount(count +1);
    // setCount(count +1);
    // would be same as
    // setCount(0 +1);
    // setCount(0 +1);
    // setCount(0 +1);
    // updatefunction generally a good practice and has to be used with asyncrhounous and multiple state updates .
    // uses previuos state to caclcuate the next state
    // re render after each update
    // batches them and call them in the same order during next render
    //setCount(c => c+1)

    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  function DecrementCount() {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  }

  function reset() {
    setCount((c) => 0);
  }
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={IncrementCount}>Increment</button>
      <button onClick={DecrementCount}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default UpdaterFunction;
