import React from 'react'

const SpeedControl = (props) => {
  return (
    <span id="SpeedControl">
      <button onClick={props.onSpeedClick}>{props.speedText}</button>
    </span>
  )
}

const SizeControl = (props) => {
  let incBoardSize = function() {
    props.onSetBoardSize(props.boardSize+1)
  }
  let decBoardSize = function() {
    props.onSetBoardSize(props.boardSize-1)
  }

  return (
    <span className="sizeControl">
      <button onClick={incBoardSize}>+</button>
      <span>{props.boardSize}</span>
      <button onClick={decBoardSize}>-</button>
    </span>
  )
}

const Buttons = (props) => {
  let onRandomClick = function() {
    props.onResetBoardClick('random')
  }
  return (
    <span>
      <button onClick={props.onStartStopClick}>{props.startStopText}</button>
      <button onClick={onRandomClick}>Randomize</button>
      <button onClick={props.onResetBoardClick}>Clear</button>
    </span>
  )
}

const ControlPanel = (props) => {
  return (
    <div id="controlPanel">
      <Buttons
        {...props}
      />
      <SizeControl
        {...props}
      />
      <SpeedControl
        {...props}
      />
    </div>
  )
}

export default ControlPanel
