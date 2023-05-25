import React, { useState } from 'react';
import './TicTacToe.css'

export const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleCellClick = (index) => {
    if (board[index] || winner) {
      return;
    }

    const updatedBoard = [...board];
    updatedBoard[index] = currentPlayer ? 'X' : 'O';
    setBoard(updatedBoard);

    const winningPlayer = checkForWinner(updatedBoard);
    if (winningPlayer) {
      setWinner(winningPlayer);
    }

    setCurrentPlayer(!currentPlayer);
  };

  const checkForWinner = (currentBoard) => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return currentBoard[a];
      }
    }

    return null;
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer(true);
    setWinner(null);
  };

  const renderCells = () => {
    return board.map((cell, index) => (
      <button
        key={index}
        className="cell"
        onClick={() => handleCellClick(index)}
      >
        {cell}
      </button>
    ));
  };

  return (
    <div className="tic-tac-toe">
      <div className="board">{renderCells()}</div>
      <div className="status">{winner ? `Winner: ${winner}` : `Current Player: ${currentPlayer ? 'X' : 'O'}`}</div>
      <button className="reset-button" onClick={handleReset}>Reset</button>
    </div>
  );
};

export default TicTacToe;

