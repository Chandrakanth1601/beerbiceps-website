import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/App.scss';
import { AnimatePresence } from 'framer-motion';
import { CartProvider } from './context/CartContext';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* ✅ Correct placement */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <CartProvider>
      <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <Router>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <AnimatedRoutes />
          <Footer />
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
