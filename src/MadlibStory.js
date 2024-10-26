import React from "react";

function MadlibStory({ formData, restartGame }) {
  return (
    <div className="story">
      {" "}
      {/* Apply 'story' class to style story display */}
      {/* Display a story template with the values from `formData` inserted */}
      <p>
        Once upon a time, a {formData.adjective} {formData.noun} decided to{" "}
        {formData.verb}.
      </p>
      {/* Button to reset the game and go back to the form */}
      <button className="play-again" onClick={restartGame}>
        Play Again
      </button>
    </div>
  );
}

export default MadlibStory;
