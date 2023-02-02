import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GameOverBanner from '../GameOverBanner';
import GuessResults from '../GuessResults';
import KeyboardInput from '../KeyboardInput';

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState('');
  const [guessChars, setGuessChars] = React.useState([]);

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
    setGuessChars([]);
  }, [answer, gameState, guesses]);

  React.useEffect(() => {
    if (answer) {
      console.info({ answer });
    }
  }, [answer]);

  React.useEffect(() => {
    if (guessChars.length === 5) {
      return setGuesses(prevGuesses => [...prevGuesses, guessChars.join('')]);
    }
  }, [guessChars]);

  return(
    <>
      <GuessResults
        answer={answer}
        guesses={guesses}
        guessChars={guessChars}
      />
      <KeyboardInput
        answer={answer}
        guesses={guesses}
        guessChars={guessChars}
        setGuessChars={setGuessChars}
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
