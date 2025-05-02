import React, { useRef, useContext } from "react";
import Componentc from "./Componentc";
import { MyContext } from "./Componenta";
function Componentd({ name }) {
  const value = useContext(MyContext);
  return (
    <div className="border-2 p-4">
      <p>{name}</p>Componentd
      <p>{value}</p>
    </div>
  );
}

export default Componentd;
