import { useState } from "react";

type TimerPropsT = {
  startTime?: number;
  isCountdown?: boolean;
  startOnRender: boolean;
};

function TimeCounter(props: TimerPropsT) {
  const [counter, setCounter] = useState(0);

  const [interval, _setInterval] = useState<NodeJS.Timer>();

  const startCount = () => {
    _setInterval(
      setInterval(() => {
        console.log("111", counter);
        setCounter(counter + 1);
        console.log("222", counter);
      }, 1000)
    );
  };

  const stopCount = () => {
    console.log(interval);
    if (!interval) return;
    clearInterval(interval);
  };

  return (
    <div>
      <span>{counter}</span>
      {!props.startOnRender && <button onClick={startCount}>Start</button>}
      <button onClick={stopCount}>Pause</button>
    </div>
  );
}

export default TimeCounter;
