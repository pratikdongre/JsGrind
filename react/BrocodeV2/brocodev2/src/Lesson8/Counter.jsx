import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <p>{count}</p>
      <div className=" flex w-fit flex-col gap-2">
        <button className="bg-amber-200" onClick={increment}>
          Increment
        </button>
        <button className="w-auto" onClick={decrement}>
          Decrement
        </button>
        <button className="w-auto" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
