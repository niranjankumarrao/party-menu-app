import React from 'react';

export default function IngredientModal({ dish, onClose }) {
  if (!dish) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>{dish.name}</h2>
        <p>{dish.description}</p>
        <h4>Ingredients</h4>
        <ul>
          {dish.ingredients.map((ing, i) => (
            <li key={i}>{ing.name} — {ing.quantity}</li>
          ))}
        </ul>
        <div style={{ display:'flex', justifyContent:'flex-end', gap:8, marginTop:12 }}>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
