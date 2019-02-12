import React, { Component } from 'react';
import Board from './components/Board'
import ControlPanel from './components/ControlPanel'
import Generations from './components/Generations'

class App extends Component {

  state = {
    isRunning: false,
    speed: 1,
    speedText: "normal",
    coverage: 0.3,
    boardSize: 55,
    rows: [],
    generations: 0,
    lastStategy: "random",
  }

  getTickDelay = (speed) => {
    switch (speed) {
      case 0:
        return 1000;
      case 2:
        return 5;
      default:
        return 500;
    }
  }

  toggleSpeed = () => {
    clearInterval(this.state.timer)
    let speed = this.state.speed + 1
    if (speed === 3) speed = 0

    let speedText = ""
    switch(speed) {
      case 0:
       speedText = "slow"
       break
      case 2:
       speedText = "fast"
       break
      default:
       speedText = "normal"
    }

    this.setState({
      speed: speed,
      speedText: speedText,
    })

    if(this.state.isRunning) {
      this.setState({
        timer: setInterval(this.tick, this.getTickDelay(speed)),
      })
    }
  }

  setBoardSize = (size) => {
    if (!this.state.isRunning && size>=20 && size<=80) {
      this.setState(
        {
          boardSize: size,
        },
        this.resetBoard
      )
    }
  }

  toggleCell = (row, col) => {
    if (!this.state.isRunning) {
      let newRows = this.state.rows
      newRows[row][col] = !newRows[row][col]
      this.setState({
        rows: newRows,
      })
    }
  }

  resetBoard = (strategy) => {
    this.stop()
    if (typeof strategy === "undefined") {
      strategy = this.state.lastStategy
    }
    let newRows = []
    for (let row = 0; row<this.state.boardSize; row++) {
      let newRow = []
      for (let col = 0; col<this.state.boardSize; col++) {
        newRow[col] = strategy === 'random'
          ? Math.random() < this.state.coverage
          : newRow[col] = false
      }
      newRows[row] = newRow
    }
    this.setState({
      rows: newRows,
      generations: 0,
      lastStategy: strategy,
    })
  }

  newState = () => {
    let newRows = [];
    for (let row = 0; row < this.state.rows.length; row++) {
      let newRow = []
      for (let col = 0; col < this.state.rows[0].length; col++) {
        newRow[col] = this.newCell(row,col)
      }
      newRows[row] = newRow
    }
    return newRows
  }

  newCell = (posX, posY) => {
    let neighbors = this.numOfNeighbors(posX,posY)
    if ((!this.state.rows[posX][posY] && neighbors === 3)
        || (this.state.rows[posX][posY] && (neighbors === 2 || neighbors === 3 ))){
        return true
      } else {
        return false
      }
  }

  numOfNeighbors = (posX, posY) => {
    let neighbors = 0;
    for (let x=posX-1; x<=posX+1; x++) {
      for (let y=posY-1; y<=posY+1; y++) {
        if (x<0 || y<0 || x>this.state.rows[0].length-1 || y>this.state.rows.length-1) {
          continue
        }
        if (this.state.rows[x][y] && (x !== posX || y !== posY)) neighbors++
        if (neighbors > 3) {
          break
        }
      }
    }
    return neighbors
  }

  componentDidMount = () => {
    this.resetBoard('random')
    this.start()
  }

  componentWillUnmount = () => {
    clearInterval(this.state.timer)
  }

  start = (e) => {
    if (!this.state.isRunning) {
      this.setState({
        timer: setInterval(this.tick, this.getTickDelay(this.state.speed)),
        isRunning: true,
      })
    }
  }

  stop = (e) => {
    this.setState({
      isRunning: false,
    })
    clearInterval(this.state.timer)
  }

  tick = () => {
    this.setState({
      rows: this.newState(),
      generations: this.state.generations + 1,
    })
  }

  render = () => {
    return (
      <div id="container">
        <ControlPanel
          onStartStopClick={this.state.isRunning ? this.stop : this.start}
          startStopText={this.state.isRunning ? "Stop ": "Start"}
          onResetBoardClick={this.resetBoard}
          boardSize={this.state.boardSize}
          onSetBoardSize={this.setBoardSize}
          speedText={this.state.speedText}
          onSpeedClick={this.toggleSpeed}
        />
        <Board
          boardSize={this.state.boardSize}
          rows={this.state.rows}
          onCellClick={this.toggleCell}
        />
        <Generations
          generations={this.state.generations}
        />
      </div>
    );
  }
}

export default App;
