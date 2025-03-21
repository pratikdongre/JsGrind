// useContext = react hook that allows you to share values
// between multiple levels of components
// without passing props through each level

// Provider Component
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value = {value}>
//   <child/>
// </Mycontext.Provider>

// COnumser Component
// 1. import react,{useContext} from 'react';
// 2. import {MyContext} from './componentA';
// const value = useContext(MyContext);

import react, { useEffect, useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Brocode");

  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{`hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB user={user} />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
