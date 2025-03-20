// useContext = react hook that allows you to share values
// between multiple levels of components
// without passing props through each level

import react, { useEffect, useState } from "react";

function ComponentA() {
  return (
    <div className="box">
      <h1>ComponentA</h1>
    </div>
  );
}

export default ComponentA;
