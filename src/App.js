import React, { useState, useMemo } from 'react';
import { dishes } from './data/mockDishes';
import Filters from './components/Filters';
import DishList from './components/DishList';
import IngredientModal from './components/IngredientModal';

const CATEGORIES = ['STARTER', 'MAIN COURSE', 'DESSERT', 'SIDES'];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('STARTER');
  const [searchTerm, setSearchTerm] = useState('');
  const [vegOn, setVegOn] = useState(false);
  const [nonVegOn, setNonVegOn] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [modalDish, setModalDish] = useState(null);

  const toggleSelect = (id) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const countsByCategory = useMemo(() => {
    const map = {};
    CATEGORIES.forEach(cat => map[cat] = 0);
    selectedIds.forEach(id => {
      const d = dishes.find(x => x.id === id);
      if (d) map[d.mealType] = (map[d.mealType] || 0) + 1;
    });
    return map;
  }, [selectedIds]);

  const filtered = useMemo(() => {
    return dishes
      .filter(d => d.mealType === selectedCategory)
      .filter(d => {
        if (!searchTerm) return true;
        return d.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .filter(d => {
        // Veg/Non-Veg toggle logic:
        if (!vegOn && !nonVegOn) return true;
        if (vegOn && d.type === 'VEG') return true;
        if (nonVegOn && d.type !== 'VEG') return true;
        return false;
      });
  }, [selectedCategory, searchTerm, vegOn, nonVegOn]);

  return (
    <div className="app-container">
      <h1 className="title">Party Menu Selection</h1>
      <Filters
        categories={CATEGORIES}
        active={selectedCategory}
        onCategory={setSelectedCategory}
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        vegOn={vegOn}
        nonVegOn={nonVegOn}
        setVegOn={setVegOn}
        setNonVegOn={setNonVegOn}
        countsByCategory={countsByCategory}
      />
      <DishList
        dishes={filtered}
        onToggle={toggleSelect}
        selectedIds={selectedIds}
        onViewIngredients={setModalDish}
      />
      <div className="summary">
        <div>
          {CATEGORIES.map(cat => (
            <span key={cat} className="summary-item">
              {cat}: {countsByCategory[cat] || 0}
            </span>
          ))}
        </div>
        <div className="bottom-row">
          <strong>Total selected: {selectedIds.length}</strong>
          <button className="continue-button" onClick={() => { /* no navigation required */ }}>
            Continue
          </button>
        </div>
      </div>

      <IngredientModal dish={modalDish} onClose={() => setModalDish(null)} />
    </div>
  );
}
