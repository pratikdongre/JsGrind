import React, { useState, useContext, Component } from "react";
import ComponentD from "./ComponentD";
function ComponentC() {
  return (
    <div className="border-2 p-4">
      ComponentC
      <ComponentD />
    </div>
  );
}

export default ComponentC;
