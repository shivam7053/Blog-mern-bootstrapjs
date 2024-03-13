// routes/comments.js

const express = require('express');
const router = express.Router();
const { addComment, getComments, updateComment, deleteComment } = require('../controllers/commentController');
const verifyToken = require('../middeware/authMiddleware');

// Add a comment to a blog post
router.post('/:postId/comments',verifyToken, addComment);

// Get all comments for a specific blog post
router.get('/:postId/comments', getComments);

// Update a comment
router.put('/:postId/comments/:commentId',verifyToken, updateComment);

// Delete a comment
router.delete('/:postId/comments/:commentId',verifyToken, deleteComment);

module.exports = router;
