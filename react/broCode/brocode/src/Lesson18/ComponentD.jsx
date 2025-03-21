// useContext = react hook that allows you to share values
// between multiple levels of components
// without passing props through each level

import react, { useEffect, useState, useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentD() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>ComponentD</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  );
}

export default ComponentD;
