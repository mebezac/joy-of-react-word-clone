import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ answer, word }) {

  const cells = checkGuess(word, answer) ||
    range(5).map(() => ({letter: '', status: ''}));

  const cellClassName = (status) => status ? `cell ${status}` : 'cell';
  return(
    <p className="guess">
      {cells.map(({letter, status}, index) => (
        <span key={index} className={cellClassName(status)}>{letter}</span>
      ))}
    </p>
  );
}

export default Guess;
