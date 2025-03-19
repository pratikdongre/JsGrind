// useEffect() = React hook that tells react to do some code when (Pick one):
//               This Component re-renders
//               THis component mounts
//               The state of a value

// useEffect(function,[dependencies])

// 1. useEffect(()=> {})            // Runs after every re-render
// 2. useEffect(()=> {},[])           // Run only on mount
// 3. useEffect(()=> {},[value])     // Runs on mount + when values chnages

// Uses
// 1. Event listener
// 2. DOM manipulation
// 3. Subscription (real-time updates)
// 4. Fetching Data from an api
// 5. Clean up when a component unmounts

import react, { useEffect, useState } from "react";

function SideCode() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  // useEffect(() => {
  //   document.title = `Count : ${count}`;
  // });
  // runs after every re-render

  // useEffect(() => {
  //   document.title = `My counter Program`;
  // });
  // runs only after mount

  // useEffect(() => {
  //   document.title = `Count : ${count}`;
  // }, [count]);
  // Runs on mount + when values chnages

  useEffect(() => {
    document.title = `Count : ${count} ${color}`;
  }, [count, color]);

  // document.title = `Count : ${count} ${color}`;
  // simply doing this would work
  // but with useEffect keeps the code organized
  // we can opt when to run the code whether every re-render or when component mount
  // or when mount and value changes

  function colorChange() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  function handleAdd() {
    setCount((c) => c + 1);
  }

  function handleSubtract() {
    setCount((c) => c - 1);
  }

  return (
    <>
      <p style={{ color: color }}>Count : {count}</p>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
      <br />
      <button onClick={colorChange}>Color Change</button>
    </>
  );
}

export default SideCode;
