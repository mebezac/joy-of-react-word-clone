import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GameOverBanner from '../GameOverBanner';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState('');

  const resetGame = () => {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameState('');
  };

  React.useEffect(() => {
    if (guesses[guesses.length - 1] === answer) {
      setGameState('win');
    } else if (guesses.length === 6) {
      setGameState('lose');
    }
  }, [answer, guesses]);

  React.useEffect(() => {
    if (answer) {
      console.info({ answer });
    }
  }, [answer]);

  return(
    <>
      <GuessResults
        answer={answer}
        guesses={guesses}
      />
      <GuessInput
        gameState={gameState}
        guesses={guesses}
        setGuesses={setGuesses}
      />
      {gameState &&
        <GameOverBanner
          answer={answer}
          guessCount={guesses.length}
          gameState={gameState}
          resetGame={resetGame}
        />
      }
    </>
  );
}

export default Game;
