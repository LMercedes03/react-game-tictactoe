import React, { useState } from "react"
import { Board } from "./Board"
import { CalculateWinner } from "./CalculateWinner"
import "./Game.css"

export const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));   // State variable to track the state of each square on the board
  const [xIsNext, setXIsNext] = useState(true);   // State variable to track whose turn it is (X or O)
  const [gameOver, setGameOver] = useState(false);   // State variable to track if the game is over

  const handleClick = (i) => {
    if (squares[i] || gameOver) return;   // If the square is already filled or the game is over, do nothing

    const newSquares = squares.slice();   // Create a copy of the squares array to modify it
    newSquares[i] = xIsNext ? "X" : "O";  // Set the value of the clicked square based on whose turn it is 

    setSquares(newSquares);   // Update the squares state with the modified array
    setXIsNext(!xIsNext);    // Toggle the turn to the next player

    if (CalculateWinner(newSquares) || newSquares.every((square) => square)) {
      // If there is a winner or all squares are filled
      setGameOver(true);   // Set the game over state to true
    }
  };

  const restartGame = () => {
    setSquares(Array(9).fill(null));   // Reset the squares to an array of null values
    setXIsNext(true);                  // Set the turn back to player X
    setGameOver(false);                // Reset the game over state to false
  };

  const renderStatus = () => {
    const winner = CalculateWinner(squares);   // Check if there is a winner
    let status;

    if (winner) {
      status = `Winner: ${winner}🎉🎊`;   // If there is a winner, set the status message with the winner's symbol
    } else if (squares.every((square) => square)) {
      status = "It's a tie!";
    } else {
      status = `Next Player: ${xIsNext ? "X" : "O"}`;   // Set the status message with the next player's symbol
    }

    return <div className="status">{status}</div>;   // Render the status message 
  };

  return (
    <div className="game"> 
      {renderStatus()} 
      <Board squares={squares} onClick={handleClick} /> 
      {gameOver && (   // If the game is over, render the restart button
        <button className="restart-button" onClick={restartGame}>
          Restart
        </button>
      )}
    </div>
  );
};