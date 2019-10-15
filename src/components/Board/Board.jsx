import React from "react";

import Row from "./Row";

const Board = props => {
  let rowNumber = 0;

  let boardDimension = 550;
  let tileSize = 10;

  if (typeof window.innerWidth !== "undefined") {
    let num =
      window.innerWidth > window.innerHeight
        ? window.innerHeight
        : window.innerWidth;
    tileSize = Math.floor(num / (props.boardSize + 20));
    boardDimension = tileSize * props.boardSize;
  }

  const boardStyle = {
    width: boardDimension,
    height: boardDimension,
    backgroundColor: "pink"
  };

  return (
    <div>
      <svg style={boardStyle}>
        {props.rows.map(row => {
          return (
            <Row
              key={rowNumber}
              rowNumber={rowNumber++}
              row={row}
              onCellClick={props.onCellClick}
              tileSize={tileSize}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default Board;
