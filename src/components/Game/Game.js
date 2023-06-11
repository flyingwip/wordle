import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("");

  function handleChange(event) {
    const guess = event.target.value.toUpperCase();
    setGuess(guess);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // const guess = event.target;
    console.log({ guess });
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        value={guess}
        onChange={handleChange}
        type="text"
        maxLength={5}
      />
    </form>
  );
}

export default Game;
