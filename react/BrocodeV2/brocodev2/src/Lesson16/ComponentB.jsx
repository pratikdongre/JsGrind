import React, { useState, useContext, Component } from "react";
import ComponentC from "./ComponentC";
function ComponentB() {
  return (
    <div className="border-2 p-4">
      ComponentB <ComponentC />
    </div>
  );
}

export default ComponentB;
