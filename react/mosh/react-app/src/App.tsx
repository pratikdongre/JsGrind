import React from "react";
// import { BsCalendar2MinusFill } from "react-icons/bs";

// import Button from "./components/ExcerciseCssModules/Button";

import Like from "./components/Like/Like";

function App() {
  const items = ["LA", "NY", "GOA", "NGP"];
  return (
    <>
      {/* <BsCalendar2MinusFill color="red" size={15} /> */}
      {/* <ListGroup items={items} heading={"Cities"}></ListGroup> */}
      {/* <Button onClick={() => {}}></Button> */}
      <Like
        onClick={() => {
          console.log("Clicked");
        }}
      />
    </>
  );
}

export default App;
