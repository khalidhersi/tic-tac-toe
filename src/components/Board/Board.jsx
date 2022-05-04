import "./Board.css";
import React from 'react'
import Square from "../Square/Square"

const Board = () => {
  return (
    <div className="board">
      <div className="board__row">
        <Square value={"O"} />
        <Square value={"X"} />
        <Square value={"X"} />
      </div>
      <div className="board__row">
        <Square value={"O"} />
        <Square value={"X"} />
        <Square value={"O"} />
      </div>
      <div className="board__row">
        <Square value={"O"} />
        <Square value={"O"} />
        <Square value={"X"} />
      </div>
    </div>
  )
}

export default Board