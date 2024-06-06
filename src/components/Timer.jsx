import React from "react";
import { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevState) => {
          return prevState + 1;
        });
      }, 1000);
    } else if (isActive && interval) {
      clearInterval(interval); 
    }
    return () => {
        clearInterval(interval);
    }
  }, [isActive]);

  function handleStart() {
    setIsActive(true);
  }

  function handleStop() {
    setIsActive(false);
  }

  function handleReset() {
    setTime(0);
  }

  return (
    <div className="timer-container">
      <div>{time}</div>
      <button onClick={handleStart} disabled={isActive} type="submit">
        Start
      </button>
      <button onClick={handleStop} disabled={!isActive} type="submit">
        Stop
      </button>
      <button onClick={handleReset} type="reset">
        Reset
      </button>
    </div>
  );
}
