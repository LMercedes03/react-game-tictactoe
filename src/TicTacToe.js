import React, {useState} from 'react'
import { Game } from './Game';

export const TicTacToe = () => {
    const [gameStarted, setGameStarted] = useState(false);
  
    const startGame = () => {
      setGameStarted(true);
    };
  
    return (
      <div>
        {!gameStarted ? (
          <button className="start-button" onClick={startGame}>
            Start Game
          </button>
        ) : (
          <Game />
        )}
      </div>
    );
  };