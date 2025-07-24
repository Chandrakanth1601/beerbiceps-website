import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import '../pages/Login.scss'; // Reuse the same SCSS for consistent styling

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password.trim()
      );

      const user = userCredential.user;

      // Save user info
      localStorage.setItem('user', JSON.stringify({
        name: user.displayName || 'User',
        email: user.email,
        photo: user.photoURL || ''
      }));

      setMessage('✅ Signup successful!');
      setTimeout(() => navigate('/'), 1500);
    } catch (error) {
      let customMsg = '❌ Something went wrong.';

      if (error.code === 'auth/email-already-in-use') {
        customMsg = '❌ This email is already registered. Please log in instead.';
      } else if (error.code === 'auth/weak-password') {
        customMsg = '❌ Password should be at least 6 characters.';
      } else if (error.code === 'auth/invalid-email') {
        customMsg = '❌ Please enter a valid email address.';
      }

      setMessage(customMsg);
    }
  };

  return (
    <div className="login-page">
      <h2>Sign Up for BeerBiceps</h2>
      <form className="login-form" onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password (min 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
        {message && (
          <p
            className={`login-msg ${
              message.includes('success') || message.includes('✅') ? 'success' : 'error'
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Signup;
