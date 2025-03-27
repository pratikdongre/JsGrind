import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product1", quantity: 1 },
      { id: 2, title: "Product2", quantity: 1 },
    ],
  });

  function handleClick() {
    setCart({
      ...cart,
      items: cart.items.map((item) => {
        return item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item;
      }),
    });
  }

  return (
    <>
      <button onClick={handleClick}>CLick me </button>
      <div>{cart.items[0].quantity}</div>
      <div>{cart.items[1].quantity}</div>
    </>
  );
}

export default App;
