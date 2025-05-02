// millisecond,second,countDown timer,lap timer, stopwatch
import React, { useState, useRef, useEffect } from "react";

function StopWatch() {
  const [isRunning, setIsRunning] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    console.log("rendered");
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
    console.log(startTimeRef.current);
  };

  const formatTime = () => {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let ms = Math.floor((elapsedTime % 1000) / 10);
    return `${hours} : ${minutes} : ${seconds} : ${ms}`;
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };
  return (
    <div className="bg-gradient-to-bl from-red-500 to-pink-700 w-full h-screen items-center justify-center flex flex-col ">
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
      </div>
    </div>
  );
}

export default StopWatch;
