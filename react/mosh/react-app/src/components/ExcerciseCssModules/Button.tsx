import react, { ReactNode } from "react";

import styles from "./Button.module.css";

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
function Button({ onClick }: ButtonProps) {
  return (
    <button
      className={[styles.but, styles.ton].join(" ")}
      onClick={(e) => onClick?.(e)}
    >
      My button
    </button>
  );
}

export default Button;
