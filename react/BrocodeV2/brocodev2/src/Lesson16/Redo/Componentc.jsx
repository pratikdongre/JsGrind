import React, { useContext, useRef, createContext } from "react";
import Componentd from "./Componentd";

function Componentc({ name }) {
  return (
    <div className="border-2 p-4">
      Componentc
      <Componentd name={name}></Componentd>
    </div>
  );
}

export default Componentc;
