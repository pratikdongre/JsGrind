import { useState } from "react";

let count = 0;

function FifthStrict() {
  //   const [count, setCount] = useState(0);
  console.log("Message" + count);

  count++;

  return (
    <>
      <div>Message {count}</div>
    </>
  );
}

export default FifthStrict;

// react render twice in development mode ie (strictMode) to check for impure components
// it does this to check for sideffects
// it does not render twice in production mode
// first time to tell the us about the issues
// second time to render it in ui
