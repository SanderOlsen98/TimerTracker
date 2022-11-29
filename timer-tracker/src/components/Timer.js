import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  let timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);

      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  const stop = () => {
    clearInterval(timer);
  };

  const restart = () => {
    setSeconds(0);
    setMinutes(0);
  };

  return (
    <div>
      <h1>Timer</h1>
      <h2>
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </h2>
      <button onClick={stop}>Stop</button>
      <button onClick={restart}>Restart</button>
    </div>
  );
};

export default Timer;
