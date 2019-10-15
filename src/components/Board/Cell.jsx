import React from "react";

const Cell = props => {
  let handleCellClick = function() {
    props.onCellClick(props.y, props.x);
  };

  return (
    <rect
      width={props.size}
      height={props.size}
      fill={props.ticked ? "black" : "white"}
      stroke="black"
      strokeWidth="1"
      x={props.x * props.size}
      y={props.y * props.size}
      onClick={handleCellClick}
    ></rect>
  );
};

export default Cell;
