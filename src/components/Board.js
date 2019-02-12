import React from 'react'

const Cell = (props) => {
  let handleCellClick = function() {
    props.onCellClick(props.y, props.x)
  }

  return (
    <rect width={props.size} height={props.size} fill={props.ticked ? "black" : "white"} stroke="black" strokeWidth="1" x={props.x * props.size} y={props.y * props.size} onClick={handleCellClick}></rect>
  )
}

const Row = (props) => {
  let cellNumber = 0
  return (
    <g>
      {
        props.row.map(cell => {
          return (
            <Cell
              key={cellNumber}
              x={cellNumber++}
              y={props.rowNumber}
              ticked={cell}
              onCellClick={props.onCellClick}
              size={props.tileSize}
            />
          )
        })
      }
    </g>
  )
}

const Board = (props) => {
    let rowNumber = 0

    let boardDimension = 550
    let tileSize = 10

    if (typeof window.innerWidth !== 'undefined') {
      let num = window.innerWidth > window.innerHeight
        ? window.innerHeight
        : window.innerWidth
      tileSize = Math.floor(num / (props.boardSize+20))
      boardDimension = tileSize * props.boardSize
    }

    const boardStyle = {
      width: boardDimension,
      height: boardDimension,
      backgroundColor: "pink"
    }

    return (
      <div >
        <svg style={boardStyle}>
          {
            props.rows.map(row => {
              return (
                <Row
                  key={rowNumber}
                  rowNumber={rowNumber++}
                  row={row}
                  onCellClick={props.onCellClick}
                  tileSize={tileSize}
                />
              )
            })
          }
        </svg>
      </div>
    )
}

export default Board
