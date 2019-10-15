import React from "react";

const SizeControl = props => {
  let incBoardSize = function() {
    props.onSetBoardSize(props.boardSize + 1);
  };
  let decBoardSize = function() {
    props.onSetBoardSize(props.boardSize - 1);
  };

  return (
    <span className="sizeControl">
      <button onClick={incBoardSize}>+</button>
      <span>{props.boardSize}</span>
      <button onClick={decBoardSize}>-</button>
    </span>
  );
};

export default SizeControl;
