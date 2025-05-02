import React, { useState, useRef, useEffect } from "react";

function StopWatch1() {
  const [elapseTime, setelapseTime] = useState(0);
  const startTimeRef = useRef(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervaleRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervaleRef.current = setInterval(() => {
        setelapseTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervaleRef.current);
    };
  }, [isRunning]);

  const handleStart = () => {
    console.log("handleStart");
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapseTime;
    // console.log(startTimeRef.current);s
  };

  const handleStop = () => {
    console.log("handleStop");
    setIsRunning(false);
  };

  const handleReset = () => {
    console.log("handleReset");
    setIsRunning(false);
    setelapseTime(0);
  };

  const formatTime = () => {
    const hours = Math.floor(elapseTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapseTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapseTime / 1000) % 60);
    const ms = Math.floor((elapseTime % 1000) / 10);
    return `${hours} : ${minutes} : ${seconds} : ${ms}`;
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
      </div>
    </div>
  );
}
export default StopWatch1;
