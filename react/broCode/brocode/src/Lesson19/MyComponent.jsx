// useState() = Re-render the component when the state value changes

// useRef () = 'use reference' does not cause re-render when its value changes
//             when want a component to remeber some information
//             but you dont want that information to trigger new render

// scenarios :- 1. accesing /interacting with dom elements
//              2. Handling focues ,animation and transitions
//              3. Managing Timers and Intervals

import React, { useState, useEffect, useRef } from "react";

function MyComponent() {
  //   let [number, setNumber] = useState(0);
  const ref = useRef(0);

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  //   console.log(ref);

  useEffect(() => {
    console.log("component rendered");
    console.log(inputRef1);
  });

  function handleClick1() {
    // setNumber((n) => n + 1);
    ref.current++;
    // console.log(ref.current);

    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick2() {
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef1.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick3() {
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef1.current.style.backgroundColor = "";
  }
  return (
    <div className="container">
      <div className="d-inline-flex gap-2">
        <button className="w-auto" onClick={handleClick1}>
          Click me 1
        </button>
        <input ref={inputRef1} />
      </div>

      <div className="d-inline-flex gap-2">
        <button className="w-auto" onClick={handleClick2}>
          Click me 2
        </button>
        <input ref={inputRef2} />
      </div>

      <div className="d-inline-flex gap-2">
        <button className="w-auto" onClick={handleClick3}>
          Click me 3
        </button>
        <input ref={inputRef3} />
      </div>
    </div>
  );
}

export default MyComponent;
