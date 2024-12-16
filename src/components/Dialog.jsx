import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
const DialogModel = forwardRef(function DialogModel(
  { result, targetTime, remainingTime, onReset, score },
  ref
) {
  const dialogRef = useRef();
  useImperativeHandle(ref, () => ({
    openDialog: () => dialogRef.current.showModal(),
  }));

  return createPortal(
    <dialog className="result-model" ref={dialogRef} onClose={onReset}>
      <h2>{result}</h2>
      <p>Your Score is {score}</p>
      <p>
        your target time was <strong>{targetTime} </strong> seconds
      </p>
      <p>
        you stoped the timer before timer{" "}
        <strong>{remainingTime / 1000}</strong> seconds
      </p>
      <form action="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default DialogModel;
