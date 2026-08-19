import React, { useState } from 'react';
import './FacultyLogin.css';

const FacultyLogin = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMPORARY: no real auth yet — accept any non-empty email/password
    // Replace this with a real API call once Group 1 exposes a /login endpoint
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setError('');
    onLoginSuccess({ email });
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Faculty Login</h2>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@college.edu"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </label>
        {error && <p className="login-error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default FacultyLogin;