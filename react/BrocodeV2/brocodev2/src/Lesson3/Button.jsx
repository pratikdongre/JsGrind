// css
// external go to index.css :- global styles
//  module individuality
// inline

import React from "react";
import styles from "./Button.module.css";

function Button() {
  const styles = {
    backgroundColor: "rgb(18, 206, 178)",
    padding: "8px 10px",
    margin: "4px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };
  // return <button className={styles.button}>Click me </button>;
  return <button style={styles}>Click me </button>;
}

export default Button;
