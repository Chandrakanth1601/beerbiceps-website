import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from 'firebase/auth';
import '../pages/Login.scss';
import { auth } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleEmailLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password.trim()
      );

      const user = userCredential.user;
      localStorage.setItem('user', JSON.stringify({
        name: user.displayName || 'User',
        email: user.email,
        photo: user.photoURL || ''
      }));

      setMessage('✅ Login successful!');
      setTimeout(() => navigate('/'), 1500);
    } catch (error) {
      setMessage(`❌ ${error.message}`);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem('user', JSON.stringify({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      }));

      setMessage('✅ Google login successful!');
      setTimeout(() => navigate('/'), 1500);
    } catch (error) {
      setMessage(`❌ ${error.message}`);
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      setMessage('❌ Please enter your email to reset password.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('✅ Password reset email sent.');
    } catch (error) {
      setMessage(`❌ ${error.message}`);
    }
  };

  return (
    <div className="login-page">
      <h2>Login to BeerBiceps</h2>
      <form className="login-form" onSubmit={handleEmailLogin}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <p className="or">OR</p>
        <button type="button" className="google-btn" onClick={handleGoogleLogin}>
          Sign in with Google
        </button>
        <p className="forgot" onClick={handleResetPassword}>Forgot Password?</p>
        <p className="signup-link">
          Don’t have an account? <NavLink to="/signup">Sign up here</NavLink>
        </p>
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

export default Login;
