import React, { useEffect, useRef } from "react";

function Effect() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []); // runs only after mount

  useEffect(() => {
    document.title = "Effect";
  }, []);

  return (
    <div className="container mt-3">
      <input ref={inputRef} type="text" className="form-control" />
    </div>
  );
}

export default Effect;
