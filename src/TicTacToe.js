import React, {useState} from 'react'
import { Game } from './Game'
import './TicTacToe.css'

export const TicTacToe = () => {
    const [gameStarted, setGameStarted] = useState(false);   // State variable to track if the game has started
  
    const startGame = () => {
      setGameStarted(true);   // Function to start the game by updating the gameStarted state
    };
    
    return (
      <div>
        {!gameStarted ? (   // Conditionally render the start button or the game component based on the gameStarted state
          <button className="start-button" onClick={startGame}>
            <h2>Start Game</h2>
          </button>
        ) : (
          <Game />  // Render the Game component when the game has started
        )}
      </div>
    );
  };