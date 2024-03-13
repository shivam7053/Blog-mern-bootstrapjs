// src/components/Blog/CreatePost.js

import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making API requests

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreatePost = () => {
    // Send post data to the backend API
    axios.post('/api/posts', { title, content })
      .then((response) => {
        console.log('Post created successfully:', response.data);
        // Redirect to the post list or show a success message
      })
      .catch((error) => {
        console.error('Error creating post:', error);
      });
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
};

export default CreatePost;
