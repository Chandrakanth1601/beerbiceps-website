import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductDetail.scss';

const products = [
  {
    id: 1,
    name: 'Video Editing Mastery (Standard)',
    price: 2999,
    image: '/images/Editing.png',
    description: 'Master editing basics to advanced cuts using tools like Premiere Pro. Includes certification and bonus AI modules.'
  },
  {
    id: 2,
    name: 'Video Editing Mastery (Gold Annual)',
    price: 5899,
    image: '/images/Gold.png',
    description: 'All Standard benefits + job support, updated tools, 14+ hrs of content, certification, and live feedback.'
  }, 
  {
    id: 3,
    name: 'Super 30 Video Editing Cohort (Premium)',
    price: 29999,
    image: '/images/Premium.png',
    description: 'Exclusive hands-on 1:1 mentorship, job placement prep, live projects. Premium limited-seat cohort.'
  },
  {
    id: 4,
    name: 'Podcasting 101',
    price: 4999,
    image: '/images/podcast.png',
    description: 'Learn the complete podcast journey—from ideation to launch. Get behind-the-scenes access to The Ranveer Show.'
  },
  {
    id: 5,
    name: 'Content Monetisation Mastery',
    price: 1499,
    image: '/images/Moonk.png',
    description: 'Learn how to earn via content—brand deals, passive income, and creator business frameworks.'
  },
  {
    id: 6,
    name: 'Self-Growth Essentials Pack',
    price: 499,
    image: '/images/Growth.png',
    description: 'Digital PDFs, productivity trackers, journaling templates, and goal-setting blueprints.'
  },
  {
    id: 7,
    name: 'Motivation Wall Pack',
    price: 199,
    image: '/images/Wallpapers.png',
    description: '50+ high-resolution wallpapers curated to inspire you daily.'
  },
  {
    id: 8,
    name: 'Career Blueprint for Creators',
    price: 799,
    image: '/images/Car.png',
    description: 'A starter toolkit to launch your journey as a digital creator—platform strategy, niche building, and audience targeting.'
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p style={{ padding: '2rem' }}>Product not found.</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>₹{product.price}</h3>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
