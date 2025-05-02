// react hooks a special function that let is used in function componennt
// to use the react features wihtout using  class compoenent

// useState :- a react hook to let us create a stateful varialbe with a setter function that updates in virtual dom in modification

import React, { useState } from "react";

function Mycomponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);

  const [isEmployed, setIsEmployed] = useState(false);

  const incrementAge = () => {
    setAge((age) => age + 2);
  };

  const toggleEmp = () => {
    setIsEmployed(!isEmployed);
  };
  return (
    <div>
      <p>Name : {name}</p>
      <button className="bg-amber-300 m-2" onClick={() => setName("Pratik")}>
        Set Name
      </button>
      <p>Age : {age}</p>
      <button className="bg-amber-300 m-2" onClick={incrementAge}>
        Increase Age
      </button>

      <p>Employed :- {isEmployed ? "yes" : "no"}</p>
      <button className="bg-amber-300 m-2" onClick={toggleEmp}>
        Toggle
      </button>
    </div>
  );
}

export default Mycomponent;
