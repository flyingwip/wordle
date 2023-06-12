import React, { useState, useEffect } from "react";

function GuessList({ guessedWord }) {
  const [wordList, setWordList] = useState([]);

  // console.log({ guessedWord });

  useEffect(() => {
    if (guessedWord) {
      setWordList((wordList) => [...wordList, guessedWord]);
    }
  }, [guessedWord]);

  return (
    <ol className="guess-results">
      {wordList.map((word, index) => {
        return <li key={index}>{word}</li>;
      })}
    </ol>
  );
}

export default GuessList;
