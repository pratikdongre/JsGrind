import { useState } from "react";

function ButAlert() {
  const [IsVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(true);
  };

  //   if (!IsVisible) {
  //     return null;
  //   }

  return (
    <div className="container">
      {IsVisible && (
        <div className="alert alert-primary d-flex justify-content-between align-items-center">
          <p>Alert</p>
          <p
            className="cursor"
            onClick={() => {
              setIsVisible(false);
            }}
          >
            X
          </p>
        </div>
      )}
      <div className="btn btn-primary" onClick={handleClick}>
        My Button
      </div>
    </div>
  );
}

export default ButAlert;

// style={{ cursor: "pointer" }}
