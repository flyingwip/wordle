import React, { useState } from "react";

function GuessInput({ handleGuess, gameState }) {
  const [guess, setGuess] = useState("");

  function handleChange(event) {
    const guess = event.target.value.toUpperCase();
    setGuess(guess);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // list state up to parent
    handleGuess(guess);
    // clear input
    setGuess("");
  }

  return (
    <form
      style={{ opacity: gameState > 0 ? 0 : 1 }}
      className="guess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        value={guess}
        disabled={gameState > 0 ? true : false}
        onChange={handleChange}
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letters only"
      />
    </form>
  );
}

export default GuessInput;
