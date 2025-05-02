import React, { useState, useRef } from "react";
// inseconds without useEffect + lapses
function StopWatchWsec() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timeRef = useRef(0);

  let [lapse, setLapse] = useState([]);

  const storeLapse = () => {
    setLapse([...lapse, formatTime()]);
    console.log(lapse);
  };

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      timeRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
    clearInterval(timeRef.current);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    clearInterval(timeRef.current);
  };

  const formatTime = () => {
    const hours = String(Math.floor(time / (60 * 60))).padStart(2, "0");
    const minutes = String(Math.floor((time / 60) % 60)).padStart(2, "0");
    const seconds = String(Math.floor(time % 60)).padStart(2, "0");
    return `${hours} : ${minutes} : ${seconds}`;
  };

  return (
    <div className="bg-gradient-to-bl from-purple-600 to-pink-700 w-full h-screen items-center justify-center flex flex-col ">
      <div className="border-4  rounded-2xl p-10 text-3xl text-center">
        <p className="font-bold text-5xl p-4">{formatTime()}</p>
        <button
          className="bg-green-500 rounded-2xl p-2 m-2"
          onClick={handleStart}
        >
          Start
        </button>
        <button className="bg-red-500 rounded-2xl p-2 m-2" onClick={handleStop}>
          Stop
        </button>
        <button
          className="bg-blue-500 rounded-2xl p-2 m-2"
          onClick={handleReset}
        >
          Reset
        </button>

        <button onClick={() => storeLapse()}>Lapse</button>

        <ul>
          {lapse.map((lap, index) => {
            return (
              <li key={index}>
                {lap} : {index + 1}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default StopWatchWsec;
