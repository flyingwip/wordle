import React, { useState } from "react";

function GuessInput() {
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

export default GuessInput;
