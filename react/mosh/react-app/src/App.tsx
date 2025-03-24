import React from "react";
import ListGroup from "./components/VanilaCSS";
function App() {
  const items = ["LA", "NY", "GOA", "NGP"];
  return (
    <>
      <ListGroup items={items} heading={"Cities"}></ListGroup>
    </>
  );
}

export default App;
