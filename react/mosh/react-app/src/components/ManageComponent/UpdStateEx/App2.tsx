import { useState } from "react";

function App() {
  const [pizza, SetPizza] = useState({
    name: "Spicy Pepproni",
    topping: ["Mushroom"],
  });

  const handleClick = () => {
    SetPizza({ ...pizza, topping: [...pizza.topping, "Panner"] });
  };

  return (
    <>
      <button onClick={handleClick}>Add Panner Topping</button>
      <div>
        {pizza.name} {pizza.topping}
      </div>
    </>
  );
}

export default App;
