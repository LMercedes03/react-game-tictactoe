import React, { useState } from "react";
import { Board } from "./Board";
import { calculateWinner } from "./CalculateWinner";
import "./TicTacToe.css";

export const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (i) => {
    if (squares[i] || gameOver) return;

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";

    setSquares(newSquares);
    setXIsNext(!xIsNext);

    if (calculateWinner(newSquares) || newSquares.every((square) => square)) {
      setGameOver(true);
    }
  };

  const restartGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setGameOver(false);
  };

  const renderStatus = () => {
    const winner = calculateWinner(squares);
    let status;

    if (winner) {
      status = `Winner: ${winner}`;
    } else if (squares.every((square) => square)) {
      status = "It's a tie!";
    } else {
      status = `Next Player: ${xIsNext ? "X" : "O"}`;
    }

    return <div className="status">{status}</div>;
  };

  return (
    <div className="game">
      {renderStatus()}
      <Board squares={squares} onClick={handleClick} />
      {gameOver && (
        <button className="restart-button" onClick={restartGame}>
          Restart
        </button>
      )}
    </div>
  );
};
