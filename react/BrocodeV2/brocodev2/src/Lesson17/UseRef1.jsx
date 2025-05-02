import React, { useState, useRef, useEffect } from "react";

// useState () Re renders the compoennt when the state of the value changes

// useRef() "use Reference" DOes not cause re-render when its value cahnges
// but the value persists across re renders
// when you want a component to remeber some information
// but you dont want that information to trigger re render

// handling dom/access element
// handling focus,animation and transition
// managing timers and function

function UseRef() {
  let [number, setNumber] = useState(0);

  let text = useRef("Pizza");

  let number2 = useRef(0);

  console.log(text);

  useEffect(() => {
    // after each re-render

    console.log("Component is rendered");
  });

  const handleClick = () => {
    setNumber((n) => n + 1);
  };

  const handleClick2 = () => {
    number2.current++;
    console.log("clicked");
  };

  return (
    <div>
      <button onClick={handleClick}>
        Click me with (stateFull) useState variable {number}
      </button>
      <br />
      <hr />
      <button onClick={handleClick2}>
        Click me with useRef variable so dont cause re-render {number2.current}
      </button>
    </div>
  );
}

export default UseRef;
