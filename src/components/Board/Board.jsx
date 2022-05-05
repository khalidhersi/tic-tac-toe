import "./Board.css";
import React from "react";
import Square from "../Square/Square";

const Board = (props) => {
  const { squares, handleClick } = props;

  // Square component JSX
  const squareJSX = (index) => {
    return <Square value={squares[index]} onClick={() => handleClick(index)} />;
  };

  // Creating board
  return (
    <div className="board">
      <div className="board__row">
        {squareJSX(0)}
        {squareJSX(1)}
        {squareJSX(2)}
      </div>
      <div className="board__row">
        {squareJSX(3)}
        {squareJSX(4)}
        {squareJSX(5)}
      </div>
      <div className="board__row">
        {squareJSX(6)}
        {squareJSX(7)}
        {squareJSX(8)}
      </div>
    </div>
  );
};

export default Board;
