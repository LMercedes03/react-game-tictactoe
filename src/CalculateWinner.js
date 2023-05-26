export const CalculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],   // Top row
    [3, 4, 5],   // Middle row
    [6, 7, 8],   // Bottom row
    [0, 3, 6],   // Left column
    [1, 4, 7],   // Middle column
    [2, 5, 8],   // Right column
    [0, 4, 8],   // Diagonal from top-left to bottom-right
    [2, 4, 6],   // Diagonal from top-right to bottom-left
  ];

  // Iterate over each winning combination
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];   // Destructure the current combination into variables
    
    // Check if the squares at the current combination positions are filled with the same symbol
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];   // Return the symbol (X or O) of the winner
    }
  }
  return null;   // If there is no winner, return null
};