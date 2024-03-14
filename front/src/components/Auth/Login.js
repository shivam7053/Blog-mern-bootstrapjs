// src/components/Auth/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = () => {
    const { email, password } = user;
    if (email && password) {
      axios.post('/api/login', user)
        .then((res) => console.log(res))
        .catch((error) => console.error('Login failed:', error.message));
    } else {
      alert('Invalid input. Please fill in all fields.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
