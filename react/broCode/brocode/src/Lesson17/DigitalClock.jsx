import react, { useEffect, useState } from "react";
import styles from "./DigitalClock.module.css";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let IntervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(IntervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours > 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )}:${meridiem}`;
  }

  function padZero(number) {
    return number > 10 ? "" + number : "0" + number;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className={`col text-center ${styles.col}`}>
            <div className={styles.box}>{formatTime()}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DigitalClock;
