import React from 'react'
import { Square } from './Square'

export const Board = ({ squares, onClick }) => {
// Helper function to render each square of game board
  const renderSquare = (i) => ( 
    // Renders the Square component with the corresponding value from the squares array and 
    // attaches the onClick function with the current index i.
    <Square value={squares[i]} onClick={() => onClick(i)} />
  ); 
  
  // Renders three rows of squares using the renderSquare helper function.
  // Each row consists of three calls to renderSquare with different indices 
  // (0, 1, 2 for the first row, 3, 4, 5 for the second row, and 6, 7, 8 for the third row).
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
};