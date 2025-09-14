import React from 'react';
import DishCard from './DishCard';

export default function DishList({ dishes, onToggle, selectedIds, onViewIngredients }) {
  if (!dishes.length) return <p>No dishes found.</p>;
  return (
    <div className="dish-list">
      {dishes.map(d => (
        <DishCard
          key={d.id}
          dish={d}
          isSelected={selectedIds.includes(d.id)}
          onToggle={() => onToggle(d.id)}
          onViewIngredients={() => onViewIngredients(d)}
        />
      ))}
    </div>
  );
}
