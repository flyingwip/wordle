import React from "react";

function GuessList({ wordList }) {
  return (
    <div className="guess-results">
      {wordList.map(({ value, id }, index) => {
        return (
          <p key={id} className="guess">
            {value}
          </p>
        );
      })}
    </div>
  );
}

export default GuessList;
