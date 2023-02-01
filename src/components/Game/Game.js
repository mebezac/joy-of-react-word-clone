import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GameResultBanner from '../GameResultBanner';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameResult, setGameResult] = React.useState('');

  React.useEffect(() => {
    if (guesses[guesses.length - 1] === answer) {
      setGameResult('win');
    } else if (guesses.length === 6) {
      setGameResult('lose');
    }
  }, [guesses]);

  return(
    <>
      <GuessResults
        answer={answer}
        guesses={guesses}
      />
      <GuessInput
        gameResult={gameResult}
        guesses={guesses}
        setGuesses={setGuesses}
      />
      {gameResult &&
        <GameResultBanner
          answer={answer}
          guessCount={guesses.length}
          gameResult={gameResult}
        />
      }
    </>
  );
}

export default Game;
