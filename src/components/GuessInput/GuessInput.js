import React from "react";

function GuessInput({guesses, setGuesses}) {
  const [guess, setGuess] = React.useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (guess.length !== 5) {
      window.alert('Guess must be exactly 5 letters long.')
      return;
    }
    const newGuess = {
      id: crypto.randomUUID(),
      word: guess
    };
    setGuesses([...guesses, newGuess]);
    setGuess('');
  };

  const setValidityMessage = e => {
    if (e.target.validity.patternMismatch) {
      e.target.setCustomValidity("Guess must be exactly 5 letters long.");
    } else {
      e.target.setCustomValidity("");
    }
  };

  return(
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
        type="text"
        value={guess}
        required={true}
        onChange={(e) => {
          setValidityMessage(e);
          const newGuess = e.target.value.toUpperCase();
          setGuess(newGuess);
        }}
      />
    </form>
  )
}

export default GuessInput;
