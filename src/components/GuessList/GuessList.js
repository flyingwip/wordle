import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessList({ wordList }) {
  const guessedWords = wordList.map(({ value, checkResult }) => {
    return { value: value, id: `${value}-${Math.random()}`, checkResult };
  });

  const emptyWords = range(0, NUM_OF_GUESSES_ALLOWED - wordList.length).map(
    (index) => {
      return {
        value: "",
        id: `${Math.random()}`,
        checkResult: new Array(5).fill({}),
      };
    }
  );

  const grid = [...guessedWords, ...emptyWords];

  return (
    <div className="guess-results">
      {grid.map(({ value, id, checkResult }, index) => {
        return <Guess key={id} word={value} checkResult={checkResult} />;
      })}
    </div>
  );
}

export default GuessList;
