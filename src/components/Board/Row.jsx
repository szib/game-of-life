import React from "react";

import Cell from "./Cell";

const Row = props => {
  let cellNumber = 0;
  return (
    <g>
      {props.row.map(cell => {
        return (
          <Cell
            key={cellNumber}
            x={cellNumber++}
            y={props.rowNumber}
            ticked={cell}
            onCellClick={props.onCellClick}
            size={props.tileSize}
          />
        );
      })}
    </g>
  );
};

export default Row;
