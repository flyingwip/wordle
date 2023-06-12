import React, { useState } from "react";

function GuessList({ guessedWord }) {
  // const [wordList, setWordList] = useState([]);

  console.log({ guessedWord });

  return (
    <div className="guess-results">
      <p className="guess">FIRST</p>
      <p className="guess">GUESS</p>
      <p className="guess">{guessedWord}</p>
    </div>
  );
}

export default GuessList;
