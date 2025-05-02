import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let intervalSet = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalSet);
    };
  }, []);

  const formatTime = () => {
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const meridiem = hour > 12 ? "PM" : "AM";

    return `
    ${padZero(hour)} : ${padZero(minute)} : ${padZero(second)} ${meridiem}
    
    `;
  };

  const padZero = (ele) => {
    return ele > 10 ? ele : `0${ele}`;
  };
  return (
    <div className="w-full h-screen bg-gradient-to-br flex flex-col text-center  justify-center from-pink-300 to-purple-600">
      <div className="text-5xl bg-gradient-to-tr from-teal-200 to-red-300 p-3 text-shadow-indigo-200 mx-auto">
        {formatTime()}
      </div>
    </div>
  );
}

export default DigitalClock;
