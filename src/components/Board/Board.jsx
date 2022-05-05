import "./Board.css";
import React, { useState } from "react";
import Square from "../Square/Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const [win, setWin] = useState(false);

  // onClick function triggers conditional statment & implements state hooks
  const handleClick = (index) => {
    if (calculateWinner(squares) || squares[index]) {
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
  const calculateWinner = (squares) => {
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

  // Creating board
  return (
    <div className="board">
      <div className="board__row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board__row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board__row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

export default Board;
