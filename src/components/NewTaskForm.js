import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[1]); // skip "All"

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = { text, category };
    onTaskFormSubmit(newTask);
    setText("");
    setCategory(categories[1]);
  }

  const options = categories
    .filter((cat) => cat !== "All")
    .map((cat) => (
      <option key={cat} value={cat}>
        {cat}
      </option>
    ));

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label htmlFor="details">Details</label>
      <input
        id="details"
        type="text"
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <label htmlFor="category">Category</label>
      <select
        id="category"
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {options}
      </select>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;


