import React from "react";
import { checkGuess } from "../../game-helpers";

function KeyboardInput({answer, guesses, guessChars, setGuessChars}) {
  const [correctKeys, setCorrectKeys] = React.useState([]);
  const [incorrectKeys, setIncorrectKeys] = React.useState([]);
  const [misplacedKeys, setMisplacedKeys] = React.useState([]);

  const keyboardKeys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];

  React.useEffect(() => {
    if (guesses.length > 0) {
      const guess = guesses[guesses.length - 1];
      const letters = checkGuess(guess, answer);
      const incorrectLetters = letters.filter(letter => letter.status === 'incorrect').map(letter => letter.letter);
      const correctLetters = letters.filter(letter => letter.status === 'correct').map(letter => letter.letter);
      const misplacedLetters = letters.filter(letter => letter.status === 'misplaced').map(letter => letter.letter);

      setIncorrectKeys(prevIncorrectKeys => [...prevIncorrectKeys, ...incorrectLetters]);
      setCorrectKeys(prevCorrectKeys => [...prevCorrectKeys, ...correctLetters]);
      setMisplacedKeys(prevMisplaceKeys => [...prevMisplaceKeys, ...misplacedLetters]);
    } else {
      setIncorrectKeys([]);
      setCorrectKeys([]);
      setMisplacedKeys([]);
    };
  }, [answer, guesses]);

  const keyClassName = (key) => {
    if (correctKeys.includes(key)) {
      return 'correct';
    } else if (incorrectKeys.includes(key)) {
      return 'incorrect';
    } else if (misplacedKeys.includes(key)) {
      return 'misplaced';
    } else {
      return 'unguessed';
    }
  };

  const handleClick = (key) => {
    const newGuessChars = [...guessChars, key];
    setGuessChars(newGuessChars);
  };

 return (
    <div className="keyboard">
      {keyboardKeys.map((row, i) => (
        <div key={i}>
          {row.map((key, j) => (
            <button
              key={j}
              className={`key ${keyClassName(key)}`}
              onClick={() => handleClick(key)}
              disabled={incorrectKeys.includes(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default KeyboardInput;
