import React from "react";
import { range } from "../../utils";

function Guess({ word }) {

  const guessLetters = word ? word.split('') : range(5).map(() => '');

  return(
    <p className="guess">
      {guessLetters.map((letter, index) => (
        <span key={index} className="cell">{letter}</span>
      ))}
    </p>
  );
}

export default Guess;
