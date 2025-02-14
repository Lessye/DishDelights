import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>DishDelights</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;