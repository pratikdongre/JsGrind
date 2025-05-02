import React from "react";
import styles from "./Student.module.css";

function Student({ name = "monu", age = 14, isMarried = false }) {
  return (
    <div className={styles.div}>
      Hello {name}, {age}
      <p>married : {isMarried ? "yes" : "No"}</p>
    </div>
  );
}

export default Student;
