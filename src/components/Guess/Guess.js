import React from "react";

function Guess({ word }) {
  let letters = new Array(5).fill("");

  if (word) {
    letters = word.split("");
  }

  return (
    <p className="guess">
      {letters.map((letter) => (
        <span key={`${letter}-${Math.random()}`} className="cell">
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
