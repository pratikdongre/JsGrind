import React from "react";

interface Props {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount = 0 }: Props) => {
  return <div>NavBar : {cartItemsCount}</div>;
};

export default NavBar;
