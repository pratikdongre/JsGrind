import React, { ReactNode } from "react";

interface AlertProps {
  children?: ReactNode;
}

const Alert = ({ children = "default" }: AlertProps) => {
  return <div className="alert alert-danger">{children}</div>;
};

export default Alert;
