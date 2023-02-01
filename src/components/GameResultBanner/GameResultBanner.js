import React from "react";

function GameResultBanner({ answer, guessCount, gameResult }) {
  const resultClassName = gameResult === 'win' ? 'happy' : 'sad';
  let message = '';
  if (gameResult === 'win') {
    message = (
      <>
        <strong>Congratulations!</strong> Got it in
        {' '}
        <strong>{guessCount} guesses</strong>.
      </>
    );
  } else if (gameResult === 'lose') {
    message = (
      <>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </>
    );
  }
  return(
    <>
      {gameResult &&
        <div className={`banner ${resultClassName}`}>
          <p>
            {message}
          </p>
        </div>
      }
    </>
  );
}

export default GameResultBanner;
