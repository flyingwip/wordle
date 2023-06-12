import React, { useState } from "react";

function GuessInput({ handleGuess }) {
  const [guess, setGuess] = useState("");

  function handleChange(event) {
    const guess = event.target.value.toUpperCase();
    setGuess(guess);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guess });
    // list state up to parent
    handleGuess(guess);

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
