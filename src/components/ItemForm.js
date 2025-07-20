import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  // Initial value is set to "Produce" as it's the first option
  const [category, setCategory] = useState("Produce");

  function handleSubmit(event) {
    event.preventDefault();

    // Generate a unique ID using the current timestamp
    const newItem = {id: uuid(), name, category};
    onItemFormSubmit(newItem);
    // clear form awaiting the next product to be added in the list
    setName(""); 
    setCategory("Produce");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
