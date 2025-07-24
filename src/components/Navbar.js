import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import './Navbar.scss';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const userInfo = {
          name: firebaseUser.displayName || 'User',
          email: firebaseUser.email,
          photo: firebaseUser.photoURL || ''
        };
        setUser(userInfo);
        localStorage.setItem('user', JSON.stringify(userInfo));
      } else {
        setUser(null);
        localStorage.removeItem('user');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem('user');
      setUser(null);
      setMenuOpen(false);
      navigate('/login');
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <h2>BeerBiceps</h2>
      </div>

      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to="/products" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        {!user && (
          <NavLink to="/login" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink>
        )}
        {user && (
          <button className="logout-btn-mobile" onClick={handleLogout}>Logout</button>
        )}
      </div>

      <div className="navbar-right">
        <div className="cart-container">
          <NavLink to="/cart" className="cart-link" onClick={() => setMenuOpen(false)}>🛒</NavLink>
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </div>
        <button className="toggle-button" onClick={() => setDarkMode(prev => !prev)}>
          {darkMode ? '🌙' : '☀️'}
        </button>

        {user && (
          <div className="user-info">
            {user.photo && <img src={user.photo} alt="avatar" className="avatar" />}
            <span className="username">{user.name}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
