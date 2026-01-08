import { useState } from "react";

type TimerPropsT = {
  startTime?: number;
  isCountdown?: boolean;
  startOnRender: boolean;
};

function TimeCounter(props: TimerPropsT) {
  const [counter, setCounter] = useState(props.startTime || 0);
  const [interval, _setInterval] = useState<NodeJS.Timer>();
  const [isPaused, setIsPaused] = useState(true);

  const getNewCounterValue = (_counter: number) => {
    let newCounter: number;

    if (props.isCountdown) {
      newCounter = _counter - 1;
      return newCounter < 0 ? 0 : newCounter;
    }

    newCounter = _counter + 1;

    return newCounter;
  };

  const startCount = () => {
    _setInterval(
      setInterval(() => {
        setCounter((prevCounter) => getNewCounterValue(prevCounter));
      }, 1000)
    );

    setIsPaused(false);
  };

  const stopCount = () => {
    if (!interval) return;
    clearInterval(interval);

    setIsPaused(true);
  };

  const resetTimer = () => {
    setCounter(props.startTime || 0);
  };
  return (
    <div>
      <span>{counter}</span>
      {!props.startOnRender && <button onClick={startCount}>Start</button>}
      <button onClick={stopCount}>Pause</button>
      <button disabled={!isPaused} onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
}

export default TimeCounter;
