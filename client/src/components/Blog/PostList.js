// src/components/Blog/PostList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for making API requests

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the backend API
    axios.get('/api/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          {/* Add a link to view the full post */}
        </div>
      ))}
    </div>
  );
};

export default PostList;
