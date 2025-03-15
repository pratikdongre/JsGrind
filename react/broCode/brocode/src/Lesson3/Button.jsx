// style react
// external :- global styles or small proj
// modules :- individuality
// inline :- minimal styling required

// import styles from "./Button.module.css";

function Button() {
  //   return <button className={styles.button}>Click Me</button>;

  // inline method
  const styles = {
    backgroundColor: "aqua",
    padding: "10px 20px",
    borderRadius: "10px",
    border: "none",
    color: "black",
    cursor: "pointer",
  };

  return <button style={styles}>Click me </button>;
}

export default Button;
