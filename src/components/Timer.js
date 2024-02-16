import { useEffect } from "react";

function Timer({ dispatch, timeRemaining }) {
    const mins = Math.floor(timeRemaining/60);
    const seconds = timeRemaining % 60
  useEffect(
    function () {
    const timer =  setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
      return ()=> clearInterval(timer)
    },
    [dispatch]
  );

  return <div className="timer">
  {mins < 10 ? "0":null}
  {mins}
  :
  {seconds < 10 ? "0":null}
  {seconds}
  </div>;
}

export default Timer;
