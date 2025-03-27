import React, { useState } from "react";

interface Props {
  children: string;
  maxNumber?: number;
}

function Expandable({ children = "", maxNumber = 100 }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  if (children.length <= maxNumber) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxNumber);

  return (
    <p>
      {text}...
      <button
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded ? "less" : "more"}
      </button>
    </p>
  );
}

export default Expandable;
