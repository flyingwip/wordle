import React from "react";

function Banner({ result, answer, amountOfGuesses }) {
  return (
    <>
      {result === 1 && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {amountOfGuesses === 1 ? "1 guess" : `${amountOfGuesses} guesses`}
            </strong>
            .
          </p>
        </div>
      )}
      {result === 2 && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Banner;
