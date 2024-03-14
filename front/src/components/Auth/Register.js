// src/components/Auth/Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleRegister = () => {
    const { name, email, password } = user;
    if (name && email && password) {
      axios.post('/api/register', user)
        .then((res) => console.log(res))
        .catch((error) => console.error('Registration failed:', error.message));
    } else {
      alert('Invalid input. Please fill in all fields.');
    }
  };

  return (
    <div>
      <h2>Create a New Account</h2>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Full Name"
      />
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
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
