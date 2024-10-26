import React, { useState } from "react";
import MadlibForm from "./MadlibForm";
import MadlibStory from "./MadlibStory";
import "./App.css"; // Import the CSS file here

function Madlib() {
  // Initialize the form data state with empty values for each part of speech
  const [formData, setFormData] = useState({
    noun: "",
    adjective: "",
    verb: "",
  });
  // `submitted` determines whether to show the form or the completed story
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission by setting `submitted` to true, showing the story
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading on form submit
    setSubmitted(true); // Switches view to display the story
  };

  // Reset the form data and set `submitted` back to false to restart the game
  const restartGame = () => {
    setFormData({ noun: "", adjective: "", verb: "" }); // Clears out form data
    setSubmitted(false); // Switches view back to show the form
  };

  return (
    <div className="container">
      {" "}
      {/* Add a container class for centered layout and styling */}
      <h1>MadLibs Game</h1> {/* Title for the game */}
      {/* Conditionally render either the form or the story based on `submitted` */}
      {submitted ? (
        // Show the MadlibStory component if form was submitted
        <MadlibStory formData={formData} restartGame={restartGame} />
      ) : (
        // Otherwise, show the form to collect user input
        <MadlibForm
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default Madlib;
