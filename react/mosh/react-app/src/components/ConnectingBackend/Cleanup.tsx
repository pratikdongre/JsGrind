import React, { useEffect, useState } from "react";

const connect = () => console.log("Connecting...");
const disconnect = () => console.log("Disconnecting...");

//Effect clean up generally we clean what our effect was doing
// if it was conencting then return function should ie clean up should disconnecting
// if it was subscribing then clean up shoudl unsubscribing
// if it was showing modal then clean up should hide the modal

function App() {
  useEffect(() => {
    connect();

    return () => disconnect();
  });
  return <div></div>;
}

export default App;
