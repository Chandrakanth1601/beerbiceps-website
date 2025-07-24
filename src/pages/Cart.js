import React from 'react';
import './Cart.scss';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <motion.div
      className="cart-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Your Cart 🛒</h2>

      {cartItems.length === 0 ? (
        <p className="empty-message">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <motion.div
              className="cart-item"
              key={index}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={item.image} alt={item.name} />
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </motion.div>
          ))}

          <motion.div
            className="cart-total"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3>Total: ₹{total}</h3>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default Cart;
