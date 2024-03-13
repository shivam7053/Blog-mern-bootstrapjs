// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Layout from './components/Layout'; // Import your shared layout component
import Home from './components/Home'; // Import your Home component
import Login from './components/Auth/Login'; // Import your Login component
import Register from './components/Auth/Register'; // Import your Register component
import PostList from './components/Blog/PostList'; // Import your PostList component
import CreatePost from './components/Blog/CreatePost'; // Import your CreatePost component
import './styles/main.css'; // Import your global styles

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="blogs" element={<PostList />} />
          <Route path="create-post" element={<CreatePost />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
