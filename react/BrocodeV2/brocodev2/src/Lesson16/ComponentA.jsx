import React, { useState, useContext, createContext } from "react";
import ComponentB from "./ComponentB";
export const MyContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Pra tik");

  return (
    <div className="border-2 p-4">
      {`Hello ${user}`}
      <br />
      ComponentA
      <MyContext.Provider value={user}>
        <ComponentB></ComponentB>
      </MyContext.Provider>
    </div>
  );
}

export default ComponentA;
