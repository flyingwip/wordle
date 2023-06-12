import React from "react";

function Guess({ word, checkResult }) {
  let letters = new Array(5).fill("");

  if (word) {
    letters = word.split("");
  }

  return (
    <p className="guess">
      {letters.map((letter, index) => {
        return (
          <span
            key={`${letter}-${Math.random()}`}
            className={`cell ${checkResult[index].status}`}
          >
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
