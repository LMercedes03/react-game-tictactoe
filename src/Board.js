import React from 'react';
import { Cell } from './Cell';

export const Board = ({ board, handleCellClick }) => {
  return (
    <div className="board">
      {board.map((value, index) => (
        <Cell key={index} value={value} onClick={() => handleCellClick(index)} />
      ))}
    </div>
  );
};