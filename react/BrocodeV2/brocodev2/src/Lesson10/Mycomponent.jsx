import React, { useState } from "react";

function Mycomponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setpayment] = useState("");
  const [shipping, setShipping] = useState("Pickup");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setpayment(e.target.value);
  };

  const handleShippingChange = (e) => {
    setShipping(e.target.value);
  };
  return (
    <div className="flex flex-col w-fit m-2">
      <p>Name : {name}</p>
      <input
        className="border-1 m-2"
        type="text"
        value={name}
        onChange={(e) => handleNameChange(e)}
      />

      <p>Quantity : {quantity}</p>
      <input
        className="border-1 m-2"
        type="text"
        value={quantity}
        onChange={(e) => handleQuantityChange(e)}
      />

      <p>Comments : {comment}</p>
      <textarea
        className="border-1 m-2"
        id="comment"
        placeholder="Enter Delivery Instruction..."
        onChange={(e) => handleCommentChange(e)}
      ></textarea>

      <p>Payment : {payment}</p>
      <select
        className="border-1 m-2"
        id="payment"
        onChange={(e) => handlePaymentChange(e)}
      >
        <option value="">Select an option</option>
        <option value="UPI">UPI</option>
        <option value="Debit Card">DebitCard</option>
      </select>

      <p>Shipping : {shipping}</p>

      <label>
        <input
          type="radio"
          value={"Pickup"}
          checked={shipping === "Pickup"}
          onChange={(e) => handleShippingChange(e)}
        />
        Pickup
      </label>
      <label>
        <input
          type="radio"
          value={"Delivery"}
          checked={shipping === "Delivery"}
          onChange={(e) => handleShippingChange(e)}
        ></input>
        Delivery
      </label>
    </div>
  );
}

export default Mycomponent;
