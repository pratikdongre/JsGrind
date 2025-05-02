// useEffect()= React hook that tells react do some code when
// component re renders
// component mounts
// the state of value chnages

// useEffect (function,[dependecies])

// 1.  useEffect(()=> {}) // runs after every re-render
// 2. useEffect(()=> {},[]) // runs only on mount
// 3. useEffect(()=> {},[value]) // runs on mount + when values changes

// uses
// 1.event listenser
// 2.dom manipulation
// 3.subscription (real time updates)
// 4.fetching data from an api
// 5.clean up when unmount a components

import React, { useState, useEffect } from "react";

function FirstReturn() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  //   useEffect(() => {
  //     document.title = `Count : ${count} `;
  //   });

  //   useEffect(() => {
  //     document.title = `My counter Program`;
  //   }, []);

  // document.title = `Count : ${count} ${color}`;
  // simply doing this would work
  // but with useEffect keeps the code organized
  // we can opt when to run the code whether every re-render or when component mount
  // or when mount and value changes

  useEffect(() => {
    document.title = `Count : ${count} ${color}`;

    return () => {
      // console.log();
    };
  }, [color]);

  const handleAdd = () => {
    setCount((c) => c + 1);
  };

  const hanldeSubtract = () => {
    setCount((c) => c - 1);
  };

  const changeColor = () => {
    setColor((c) => (c === "green" ? "red" : "green"));
  };
  return (
    <div className="flex flex-col">
      <p className="w-auto" style={{ color: color }}>
        Count : {count}
      </p>
      <div>
        <button onClick={() => handleAdd()}> ADD </button>
        <button onClick={() => hanldeSubtract()}>Subtract</button>
        <br />
        <button onClick={changeColor}>Change color </button>
      </div>
    </div>
  );
}

function SecondReturn() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("event Listener added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("event listener removed");
    };
  }, []);

  useEffect(() => {
    document.title = `${width} x ${height}`;
  }, [height, width]);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return (
    <div>
      <p>
        {width} X {height}
      </p>
    </div>
  );
}

function SideCode() {
  return <SecondReturn></SecondReturn>;
}
export default SideCode;
