import { useState } from "react";
import { useEffect } from "react";
import { convertMillis } from "../utils";

const Timer = ({ seconds, onFinish }: { seconds: number, onFinish?: Function }) => {
  // initialize timeLeft with the seconds prop
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (!timeLeft) return;
    if (timeLeft <= 0) {
      if (onFinish) {
        onFinish();
      }
    }

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1000);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, onFinish]);

  return (
    <span>
      {convertMillis(timeLeft)}
    </span>
  );
};

export default Timer;
