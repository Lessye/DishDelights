import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const toggleFavorite = (recipe) => {
    const newFavorites = favorites.filter(fav => fav.id !== recipe.id);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites)); // Save to localStorage
  };

  return (
    <div className="container">
      <h1>Favorite Recipes</h1>
      <div className="favorites-grid">
        {favorites.length > 0 ? favorites.map(fav => (
          <div className="recipe-card" key={fav.id}>
            <Link to={`/recipe/${fav.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <img src={fav.image} alt={fav.title} />
              <h2>{fav.title}</h2>
            </Link>
            <button onClick={() => toggleFavorite(fav)}>Remove from Favorites</button>
          </div>
        )) : <p>No favorite recipes yet.</p>}
      </div>
    </div>
  );
};

export default Favorites;
