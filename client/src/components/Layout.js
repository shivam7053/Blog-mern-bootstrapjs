// src/components/Layout.js

import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/blogs">View Posts</Link>
          </li>
          <li>
            <Link to="/create-post">Create Post</Link>
          </li>
          {/* Add more navigation links */}
        </ul>
      </nav>
      <Outlet /> {/* Renders the current route selected */}
    </div>
  );
};

export default Layout;
