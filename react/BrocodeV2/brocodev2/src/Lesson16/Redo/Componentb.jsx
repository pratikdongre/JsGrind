import React, { useContext, useRef, createContext } from "react";
import Componentc from "./Componentc";
function Componentb({ name }) {
  return (
    <div className="border-2 p-4">
      Componentb
      <Componentc name={name}></Componentc>
    </div>
  );
}

export default Componentb;
