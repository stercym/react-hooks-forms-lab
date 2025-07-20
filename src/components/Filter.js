import React from "react";

function Filter({ onCategoryChange, searchText = "testing", onSearchChange }) {
  return (
    <div className="Filter">
      {/* Search Input Field (Controlled Component) */}
      <input type="text" placeholder="Search items..." value={searchText} onChange={onSearchChange}/>
      <select name="filter" onChange={onCategoryChange}>
       <option value="All">Filter by category</option>
       <option value="Produce">Produce</option>
       <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;


