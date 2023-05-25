import React from 'react';
import { useState } from 'react';

const handleCellClick = (index) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  if (board[index] || winner) {
    return;
  }
}
export const renderCells = () => {

  return board.map((cell, index) => (
    <button
      key={index}
      className="cell"
      onClick={() => handleCellClick(index)}
    >
      {cell}
    </button>
  ));
  }