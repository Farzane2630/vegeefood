import React from "react";
import { DateTimeDisplay } from "./DateTimeDisplay";

export const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div
      className="show-counter"
      style={{ display: "flex", paddingLeft: 100, paddingTop: 100 }}
    >
      <DateTimeDisplay style={{ padding: 5 }} value={days} type={"Days"} />

      <p style={{ color: "black" }}>|</p>
      <DateTimeDisplay style={{ padding: 5 }} value={hours} type={"Hours"} />
      <p style={{ color: "black" }}>|</p>
      <DateTimeDisplay style={{ padding: 5 }} value={minutes} type={"Mins"} />
      <p style={{ color: "black" }}>|</p>
      <DateTimeDisplay
        style={{ padding: 5 }}
        value={seconds}
        type={"Seconds"}
      />
    </div>
  );
};
