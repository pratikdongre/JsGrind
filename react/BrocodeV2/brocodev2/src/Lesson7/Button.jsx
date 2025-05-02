import React from "react";

function Button() {
  const handleClick = () => {
    console.log("OUCH");
  };

  const handleClick2 = (name) => {
    console.log(`${name} stop it `);
  };
  let count = 0;
  const handleClick3 = (name) => {
    if (count < 3) {
      console.log(`${name} clicked on me ${count} times`);
      count++;
    } else if (count < 5) {
      count++;
      console.log("stop it");
    } else {
      console.log("damn it ");
    }
  };

  const handleDoubleClick = (e) => {
    e.target.innerText = "Heyyyy";
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="bg-amber-400 cursor-pointer p-2 m-2 text-amber-100 rounded-[4px]"
      >
        Click me
      </button>
      <button
        onClick={() => handleClick2("Pratik")}
        className="bg-amber-400 cursor-pointer p-2 m-2 text-amber-100 rounded-[4px]"
      >
        Name
      </button>
      <button
        onClick={() => handleClick3("Pratik")}
        className="bg-amber-400 cursor-pointer p-2 m-2 text-amber-100
      rounded-[4px]"
      >
        Give me a lift
      </button>

      <button
        onDoubleClick={(e) => handleDoubleClick(e)}
        className="bg-green-400 cursor-pointer p-2 m-2 text-amber-100"
      >
        doubleclick
      </button>
    </>
  );
}

export default Button;
