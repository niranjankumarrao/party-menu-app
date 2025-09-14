import React from 'react';

export default function DishCard({ dish, isSelected, onToggle, onViewIngredients }) {
  return (
    <div className="dish-card" style={{ border: isSelected ? '2px solid #1f6feb' : undefined }}>
      <img className="dish-image" src={dish.image} alt={dish.name} />
      <div style={{ display:'flex', gap:8, alignItems:'center' }}>
        <div className="dish-meta">{dish.type}</div>
        {isSelected && <div className="selected-badge">Selected</div>}
      </div>
      <div className="actions">
        <button onClick={onToggle}>{isSelected ? 'Remove' : 'Add'}</button>
        <button onClick={onViewIngredients}>Ingredients</button>
      </div>
    </div>
  );
}
