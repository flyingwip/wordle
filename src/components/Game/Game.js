import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // const [guessedWord, setGuessedWord] = useState("");
  const [wordList, setWordList] = useState([]);

  function handleGuess(guess) {
    const nextGues = {
      value: guess,
      id: `${guess}-${Math.random()}`,
    };

    if (wordList.length < NUM_OF_GUESSES_ALLOWED) {
      setWordList([...wordList, nextGues]);
    } else {
      alert("You lose!");
    }
  }

  return (
    <>
      <GuessList wordList={wordList} />
      <GuessInput handleGuess={handleGuess} />
    </>
  );
}

export default Game;
