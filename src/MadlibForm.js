import React from "react";

function MadlibForm({ formData, setFormData, handleSubmit }) {
  // Update form data in Madlib component when an input changes
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure the input's `name` and `value`
    // Update the formData state with the new value, using `name` to match the field
    setFormData((data) => ({ ...data, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Controlled input fields, where `value` is bound to state in Madlib */}
      <label>
        Noun:
        <input
          type="text"
          name="noun"
          value={formData.noun}
          onChange={handleChange}
        />
      </label>
      <label>
        Adjective:
        <input
          type="text"
          name="adjective"
          value={formData.adjective}
          onChange={handleChange}
        />
      </label>
      <label>
        Verb:
        <input
          type="text"
          name="verb"
          value={formData.verb}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Create Story</button> {/* Form submit button */}
    </form>
  );
}

export default MadlibForm;
