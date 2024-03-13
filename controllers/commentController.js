// server/controllers/commentController.js

const Comment = require('../models/Comment'); // Your comment model

// Add a comment to a blog post
exports.addComment = async (req, res) => {
  try {
    const postId = req.params.postId;
    const { text } = req.body;

    // Create a new comment
    const newComment = new Comment({
      text,
      author: req.user._id, // Assuming you have user authentication middleware
      post: postId,
    });

    // Save the comment to the database
    await newComment.save();

    res.status(201).json({ message: 'Comment added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error adding comment' });
  }
};

// Get all comments for a specific blog post
exports.getComments = async (req, res) => {
  try {
    const postId = req.params.postId;
    const comments = await Comment.find({ post: postId }).populate('author', 'username');
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching comments' });
  }
};

// Update a comment
exports.updateComment = async (req, res) => {
  try {
    const commentId = req.params.commentId;
    const { text } = req.body;

    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      { text },
      { new: true }
    );

    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ error: 'Error updating comment' });
  }
};

// Delete a comment
exports.deleteComment = async (req, res) => {
  try {
    const commentId = req.params.commentId;
    await Comment.findByIdAndDelete(commentId);
    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting comment' });
  }
};
