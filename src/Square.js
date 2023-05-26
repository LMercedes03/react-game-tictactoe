import React from 'react'

// Square component represents each square on the tic-tac-toe board
export const Square = ({ value, onClick }) => (
// The value prop represents the current value of the square ('X', 'O', or null).
// The onClick prop is a function to handle the click event on the square button.
    <button className="square" onClick={onClick}> 
      {value}   
    </button> 
    //The component returns a button element with the CSS class "square" and an onClick event handler.
    //The value prop is rendered inside the button, representing the current value of the square ('X', 'O'), or an empty square if it's null.
);
