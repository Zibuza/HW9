import { useRef, useState } from "react";
import "./timer.css"

export default function Timer() {
  const timerId = useRef(null);
  const [seconds, setSeconds] = useState(0);
  
  const startTimer = () => {
    if (timerId.current === null) {
      timerId.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  };

  return (
    <div className="timer">
      <p>Seconds: {seconds}</p>
        <section className="buttons">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </section>
    </div>
  );
}
