// src/pages/PostDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // For extracting post ID
import axios from 'axios';

const PostDetail = () => {
  const { postId } = useParams(); // Extract post ID from URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/api/posts/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error.message);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {/* Display comments here */}
    </div>
  );
};

export default PostDetail;
