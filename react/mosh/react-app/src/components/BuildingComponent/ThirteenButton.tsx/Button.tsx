import react, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  color?: "primary" | "success" | "secondary" | "danger";
}
function Button({
  children = "default",
  onClick,
  color = "primary",
}: ButtonProps) {
  return (
    <button className={`btn btn-${color}`} onClick={(e) => onClick?.(e)}>
      {children}
    </button>
  );
}

export default Button;
