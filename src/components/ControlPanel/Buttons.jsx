import React from "react";

const Buttons = props => {
  let onRandomClick = function() {
    props.onResetBoardClick("random");
  };
  return (
    <span>
      <button onClick={props.onStartStopClick}>{props.startStopText}</button>
      <button onClick={onRandomClick}>Randomize</button>
      <button onClick={props.onResetBoardClick}>Clear</button>
    </span>
  );
};

export default Buttons;
