import React from "react";

function GameOverBanner({ answer, guessCount, gameState, resetGame }) {
  const resultClassName = gameState === 'win' ? 'happy' : 'sad';
  let message = '';
  if (gameState === 'win') {
    message = (
      <>
        <strong>Congratulations!</strong> Got it in
        {' '}
        <strong>{guessCount} guesses</strong>.
      </>
    );
  } else if (gameState === 'lose') {
    message = (
      <>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </>
    );
  }
  return(
    <>
      {gameState &&
        <div className={`banner ${resultClassName}`}>
          <p>
            {message}
          </p>
          <button className="reset-button" onClick={resetGame}>
            Play Again
          </button>
        </div>
      }
    </>
  );
}

export default GameOverBanner;
