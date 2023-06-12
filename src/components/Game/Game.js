import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [wordList, setWordList] = useState([]);

  // keep track of game state 0 = playing, 1 = won, 2 = lost
  const [gameState, setGameState] = useState(0);

  function handleGuess(guess) {
    const checkResult = checkGuess(guess, answer);

    const nextGues = {
      value: guess,
      id: `${guess}-${Math.random()}`,
      checkResult: checkResult,
    };

    setWordList([...wordList, nextGues]);
    if (wordList.length < NUM_OF_GUESSES_ALLOWED - 1) {
      if (checkResult.every((result) => result.status === "correct")) {
        setGameState(1);
      }
    } else {
      setGameState(2);
    }
  }

  return (
    <>
      <GuessList wordList={wordList} />
      {gameState === 0 && <GuessInput handleGuess={handleGuess} />}
      {gameState > 0 && <Banner result={gameState} answer={answer} />}
    </>
  );
}

export default Game;
