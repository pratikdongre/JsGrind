import react, { useState, useEffect, useRef } from "react";

import styles from "./Stopwatch.module.css";
function Stopwatch() {
  const [isRunning, SetIsRunning] = useState(false);
  const [elapsedTime, SetElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);

  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        SetElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function start() {
    SetIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
    // console.log(startTimeRef);
  }

  function stop() {
    SetIsRunning(false);
  }

  function reset() {
    SetElapsedTime(0);
    SetIsRunning(false);
  }

  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }
  return (
    <div>
      <div className="container-fluid border border-4 border-dark rounded-4 p-4">
        <div className={styles.display}>{formatTime()}</div>
        <div className="controls d-flex gap-3">
          <button onClick={start} className="start-button btn btn-success ">
            Start
          </button>

          <button onClick={stop} className="stop-button btn btn-danger">
            Stop
          </button>
          <button onClick={reset} className="reset-button btn btn-dark">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
