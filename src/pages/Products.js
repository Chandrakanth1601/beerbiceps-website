// --- File: src/pages/Products.js ---
import React from 'react';
import { Link } from 'react-router-dom';
import './Products.scss';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Video Editing Mastery (Standard)',
    price: 2999,
    image: '/images/Editing.png',
  },
  {
    id: 2,
    name: 'Video Editing Mastery – Gold (Annual)',
    price: 5899,
    image: '/images/Gold.png',
  },
  {
    id: 3,
    name: 'Super 30 Video Editing Cohort (Premium)',
    price: 29999,
    image: '/images/Premium.png',
  },
  {
    id: 4,
    name: 'Podcasting 101',
    price: 4999,
    image: '/images/podcast.png',
  },
  {
    id: 5,
    name: 'Content Monetisation Mastery',
    price: 1499,
    image: '/images/Moonk.png',
  },
  {
    id: 6,
    name: 'Self-Growth Essentials Pack',
    price: 499,
    image: '/images/Growth.png',
  },
  {
    id: 7,
    name: 'Motivation Wallpapers Pack',
    price: 199,
    image: '/images/Wall.png',
  },
  {
    id: 8,
    name: 'Career Blueprint for Creators',
    price: 799,
    image: '/images/Car.png',
  },
];

const Products = () => {
  return (
    <div className="products-page">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <motion.div
            className="product-card"
            key={product.id}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: product.id * 0.1 }}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <Link to={`/product/${product.id}`} className="buy-button">
              View Details
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;
