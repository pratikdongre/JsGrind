import React, { useRef } from "react";

function UseRef2() {
  let inputRef1 = useRef(null);
  let inputRef2 = useRef(null);
  let inputRef3 = useRef(null);

  const handleClick1 = () => {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "green";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  };

  const handleClick2 = () => {
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = "green";
    inputRef1.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  };

  const handleClick3 = () => {
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor = "green";
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
  };
  return (
    <div>
      <button onClick={handleClick1}>Click me </button>
      <input type="text" ref={inputRef1} />

      <button onClick={handleClick2}>Click me </button>
      <input type="text" ref={inputRef2} />

      <button onClick={handleClick3}>Click me </button>
      <input type="text" ref={inputRef3} />
    </div>
  );
}

export default UseRef2;
