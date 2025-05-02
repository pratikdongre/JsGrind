import React, { useState, useContext } from "react";
import { MyContext } from "./ComponentA";

function ComponentD() {
  const value = useContext(MyContext);
  return (
    <div className="border-2 p-4">
      {`Hello ${value}`}
      <br />
      ComponentD
    </div>
  );
}

export default ComponentD;
