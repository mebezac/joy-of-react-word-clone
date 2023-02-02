import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({answer, guesses, guessChars}) {
  const guessComponent = (index) => {
    if (guesses[index]) {
      return <Guess key={index} answer={answer} word={guesses[index]} />;
    } else if (index === guesses.length) {
      return <Guess key={index} guessChars={guessChars} />;
    } else {
      return <Guess key={index} />;
    }
  };

  return(
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        guessComponent(index)
      ))}
    </div>
  );
}

export default GuessResults;
