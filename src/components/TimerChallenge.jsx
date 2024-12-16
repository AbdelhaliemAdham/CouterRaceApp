import React, { useRef, useState } from "react";
import DialogModel from "./Dialog.jsx";

function TimerChallenge({ title, targetTime }) {
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);
  let timer = useRef();
  let dialogRef = useRef();

  let timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;
  if (remainingTime === 0) {
    clearInterval(timer.current);
    setRemainingTime(targetTime * 1000);
    dialogRef.current.openDialog();
  }
  function handleButtonClicked() {
    timer.current = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
  }
  function resetTimer() {
    setRemainingTime(targetTime * 1000);
  }
  function handleTimerStop() {
    clearInterval(timer.current);
    dialogRef.current.openDialog();
  }
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  return (
    <>
      {
        <DialogModel
          targetTime={targetTime}
          result={remainingTime > 0 ? "You won" : "You Lost"}
          ref={dialogRef}
          remainingTime={remainingTime}
          onReset={resetTimer}
          score={score}
        />
      }

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">Target Time: {targetTime} seconds</p>
        <p>{!timerIsActive && "Timer Expired"}</p>
        <p>
          <button
            onClick={!timerIsActive ? handleButtonClicked : handleTimerStop}
          >
            {timerIsActive ? "Stop Timer" : "Start Timer"}
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer is Active" : "Timer is not Active"}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
