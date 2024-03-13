// routes/posts.js

const express = require('express');
const router = express.Router();
const { createPost, getPosts, getPostById, updatePost, deletePost } = require('../controllers/postController');
const verifyToken = require('../middeware/authMiddleware');

// Create a new blog post
router.post('/',verifyToken, createPost);

// Get all blog posts
router.get('/', getPosts);

// Get a specific blog post by ID
router.get('/:postId',verifyToken, getPostById);

// Update a blog post
router.put('/:postId',verifyToken, updatePost);

// Delete a blog post
router.delete('/:postId',verifyToken, deletePost);

module.exports = router;
