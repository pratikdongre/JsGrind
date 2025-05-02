import React, { useState, useRef, useEffect } from "react";

function Countdown() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervaleRef = useRef(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervaleRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervaleRef.current);
    };
  }, [isRunning]);

  useEffect(() => {
    if (timeLeft == 0) {
      setIsRunning(false);
      clearInterval(intervaleRef.current);
    }
  }, [timeLeft]);

  const handleStop = () => {
    setIsRunning(false);
    clearInterval(intervaleRef.current);
    console.log("stopped");
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(intervaleRef.current);
    setTimeLeft(0);
    console.log("Rsest");
  };

  const handleStart = () => {
    let total = timeLeft;
    if (timeLeft === 0) {
      total = minutes * 60 + seconds;
      setTimeLeft(total);
    }
    if (!isRunning && total > 0) {
      setIsRunning(true);
    }

    console.log("Start");
  };

  const formatTime = (totalSeconds) => {
    const m = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const s = String(Math.floor(totalSeconds % 60)).padStart(2, "0");
    return `${m} : ${s}`;
  };
  return (
    <div className="bg-gradient-to-tl from-red-400 to-blue-400 w-auto h-screen justify-center items-center flex ">
      <div className="border-2 rounded-3xl p-4">
        <p>Timer</p>
        <input
          type="text"
          min={0}
          max={59}
          placeholder="enter minutes"
          value={minutes}
          onChange={(e) =>
            setMinutes(Math.min(59, Math.max(0, +e.target.value)))
          }
        />

        <input
          type="text"
          min={0}
          max={59}
          placeholder="enter seconds"
          value={seconds}
          onChange={(e) =>
            setSeconds(Math.min(59, Math.max(0, +e.target.value)))
          }
        />

        <div>{formatTime(timeLeft || minutes * 60 + seconds)}</div>

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
      </div>
    </div>
  );
}

export default Countdown;
