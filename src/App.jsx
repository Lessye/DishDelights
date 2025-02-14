import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Recipes from './views/Recipes';
import Favorites from './views/Favorites';
import About from './views/About';
import Contact from './views/Contact';
import RecipeDetail from './views/RecipeDetail'; // Ensure this file exists

const App = () => {
  return (
    <Router>
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
