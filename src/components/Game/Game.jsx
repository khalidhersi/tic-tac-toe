import "./Game.css";
import React, { useState } from 'react'
import Board from "../Board/Board"

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);

  // onClick function triggers conditional statment & implements state hooks
  const handleClick = (index) => {
    // if Winning Combination is found Game ends
    if (isWinner(squares) || squares[index]) {
      return;
    }
    // conditional statment decides if square value containes X or O
    if (xTurn) {
      squares[index] = "X";
    } else {
      squares[index] = "O";
    }
    setSquares(squares);
    setXTurn(!xTurn);
  };

  // Array of Each Type of directional win
  const allHorizontalWins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const allVerticalWins = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  const allDiaganalWins = [
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Array holding all Winning Combinations
  const winningCombinations = [];

  // Pushing each directional Win into winningCombinations Array
  allHorizontalWins.map((horizontalWin) => winningCombinations.push(horizontalWin));
  allVerticalWins.map((verticalWin) => winningCombinations.push(verticalWin));
  allDiaganalWins.map((diaganalWin) => winningCombinations.push(diaganalWin));


  // Win Logic
  const isWinner = (squares) => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

// Dynamically changes Text on Screen to show whose turn it is and who won.
  const winner = isWinner(squares)
  let screenText = ``
  if(winner){
    screenText = `${winner} is the Winner!!!`
  }
  else {
    if (xTurn) {
      screenText = `It's X's turn.`
    } else {
      screenText = `It's O's turn.`
    }
  }
  
  return (
    <div className="game">
      <h1 className="game__title">Tic-Tac-Toe</h1>
      <h2 className="game__text">{screenText}</h2>
      <Board squares={squares} handleClick={handleClick}/>
      <button className="game__btn" onClick={() => {setSquares(Array(9).fill(null))}}>Reset</button>
    </div>
  )
}

export default Game