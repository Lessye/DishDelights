import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const recipesData = [
  { id: 1, title: 'Pancakes', category: 'breakfast', ingredients: ['Flour', 'Milk', 'Eggs'], instructions: 'Mix and cook on a pan.', image: 'https://images.unsplash.com/photo-1555813456-94a3dd418cd3?q=80&w=3126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, title: 'Caesar Salad', category: 'lunch', ingredients: ['Lettuce', 'Croutons', 'Chicken'], instructions: 'Toss everything together.', image: 'https://plus.unsplash.com/premium_photo-1701699258166-b14d782a4188?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, title: 'Spaghetti Bolognese', category: 'dinner', ingredients: ['Pasta', 'Tomato Sauce', 'Ground Beef'], instructions: 'Cook pasta and prepare sauce.', image: 'https://images.unsplash.com/photo-1600803734709-83f30a78e312?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 4, title: 'Chocolate Cake', category: 'desserts', ingredients: ['Flour', 'Sugar', 'Cocoa Powder'], instructions: 'Bake at 180°C for 30 minutes.', image: 'https://images.unsplash.com/photo-1582650949464-21b3ac9d0e23?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
];

const Recipes = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const filteredRecipes = selectedCategory === 'all'
    ? recipesData
    : recipesData.filter(recipe => recipe.category === selectedCategory);

  const toggleFavorite = (recipe) => {
    const newFavorites = favorites.some(fav => fav.id === recipe.id)
      ? favorites.filter(fav => fav.id !== recipe.id)
      : [...favorites, recipe];

    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites)); // Save to localStorage
  };

  return (
    <div className="container">
      <h1>Recipes</h1>
      <div className="filter-dropdown">
        <label>Filter by Category: </label>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="desserts">Desserts</option>
        </select>
      </div>
      <div className="recipe-grid">
        {filteredRecipes.map(recipe => (
          <div className="recipe-card" key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <img src={recipe.image} alt={recipe.title} />
              <h2>{recipe.title}</h2>
            </Link>
            <button onClick={() => toggleFavorite(recipe)}>
              {favorites.some(fav => fav.id === recipe.id) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
