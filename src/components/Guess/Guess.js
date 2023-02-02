import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ answer, guessChars, word }) {

  const cells = checkGuess(word, answer) || range(5).map(() => ({letter: '', status: ''}));
  const cellClassName = (status) => status ? `cell ${status}` : 'cell';

  let guessSpans = '';
  if (word) {
    guessSpans = (cells.map(({letter, status}, index) => (
      <span key={index} className={cellClassName(status)}>{letter}</span>
    )))
  } else if (guessChars && guessChars.length > 0) {
    guessSpans = (range(5).map((index) => (
      <span key={index} className="cell">{guessChars[index]}</span>
    )))
  } else {
    guessSpans = (range(5).map((index) => (
      <span key={index} className="cell"></span>
    )))
  }

  return(
    <p className="guess">
      {guessSpans}
    </p>
  );
}

export default Guess;
