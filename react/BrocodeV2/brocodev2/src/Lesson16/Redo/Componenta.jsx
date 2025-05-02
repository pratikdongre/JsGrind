import React, { useContext, useRef, useState, createContext } from "react";
import Componentb from "./Componentb";

export const MyContext = createContext();

function Componenta() {
  const ref = useRef("Pratik");
  const [user, setUser] = useState("Dongre");
  return (
    <div className="border-2 p-4">
      <p>{ref.current}</p>
      Componenta
      <MyContext.Provider value={user}>
        <Componentb name={ref.current}></Componentb>
      </MyContext.Provider>
    </div>
  );
}

export default Componenta;
