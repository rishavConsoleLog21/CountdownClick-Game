import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";

//let timer; // using outside of the component so useState not re-evaluated

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const [timerStarted, setTimerStarted] = useState(false); // [1
  const [timeExpired, setTimeExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      {timeExpired && <ResultModal targetTime={targetTime} result="lost" />}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Clicking!!
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running out" : "Time inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
