import React from "react";

interface Props {
  cartItems: string[];
  onClear: () => void;
}

function Cart({ cartItems, onClear }: Props) {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <button onClick={onClear}>Clear</button>
    </>
  );
}

export default Cart;
