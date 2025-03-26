import { useState } from "react";

function UpdNestedObject() {
  const [customer, setCustomer] = useState({
    name: "john",
    address: {
      city: "San fran",
      zipCode: 440026,
    },
  });

  const handleClick = () => {
    // console.log("Clicked");
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 45 },
    });
  };
  return (
    <div>
      {customer.address.zipCode}
      <button onClick={handleClick}>Clik</button>
    </div>
  );
}

export default UpdNestedObject;
