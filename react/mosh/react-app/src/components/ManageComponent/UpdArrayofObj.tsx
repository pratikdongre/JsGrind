import { useState } from "react";

function UpdArrayofObj() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug1", fixed: false },
    { id: 2, title: "Bug2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };
  return (
    <div>
      <div>{bugs[0].fixed ? "true" : "false"}</div>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default UpdArrayofObj;
