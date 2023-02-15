import React from "react";

function Searchbar({ value, onChange, onSubmit }) {
  return (
    <div className="search-bar">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter city..."
          value={value}
          onChange={onChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Searchbar;
