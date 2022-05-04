import "./Game.css";
import React from 'react'
import Board from "../Board/Board"

const Game = () => {
  return (
    <div className="game">
      <h1 className="game__title">Tic-Tac-Toe</h1>
      <Board />
    </div>
  )
}

export default Game