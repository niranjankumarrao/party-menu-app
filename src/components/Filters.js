import React from 'react';

export default function Filters({
  categories, active, onCategory, searchTerm, onSearch,
  vegOn, nonVegOn, setVegOn, setNonVegOn, countsByCategory
}) {
  return (
    <div className="filters">
      <div className="tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={cat === active ? 'tab active' : 'tab'}
            onClick={() => onCategory(cat)}
          >
            {cat} {countsByCategory[cat] ? `(${countsByCategory[cat]})` : ''}
          </button>
        ))}
      </div>

      <input
        className="search"
        placeholder="Search dishes..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />

      <div className="toggles">
        <label>
          <input type="checkbox" checked={vegOn} onChange={e => setVegOn(e.target.checked)} /> Veg
        </label>
        <label>
          <input type="checkbox" checked={nonVegOn} onChange={e => setNonVegOn(e.target.checked)} /> Non-Veg
        </label>
      </div>
    </div>
  );
}
