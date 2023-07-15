import React from "react";

export default function CountUp({ end, duration, desc }) {
  return (
    <div className="count-up-wrapper">
      <CountUp end={end} duration={duration} />
      <span className="count-up-desc">{desc}</span>
    </div>
  );
}
