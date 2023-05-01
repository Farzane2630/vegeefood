import React from "react";
import { useCountdown } from "../../Hooks/useCountDown";
import { ShowCounter } from "./ShowCounter";

export const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <ShowCounter
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
};
