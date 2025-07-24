import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.scss';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>BeerBiceps</h2>
      </div>

      <div className="navbar-center">
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
          <NavLink to="/products" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
          <NavLink to="/login" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink>
        </div>
      </div>

      <div className="navbar-right">
        <div className="cart-container">
          <NavLink to="/cart" className="cart-link" onClick={() => setMenuOpen(false)}>
            🛒
          </NavLink>
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </div>
        <button
          className="toggle-button"
          onClick={() => setDarkMode(prev => !prev)}
        >
          {darkMode ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
