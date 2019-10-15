import React from "react";

const SpeedControl = props => {
  return (
    <span id="SpeedControl">
      <button onClick={props.onSpeedClick}>{props.speedText}</button>
    </span>
  );
};

export default SpeedControl;
