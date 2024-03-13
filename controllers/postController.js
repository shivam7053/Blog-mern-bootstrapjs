// server/controllers/postController.js

const Post = require('../models/Post'); // Your post model

// Create a new blog post
exports.createPost = async (req, res) => {
  try {
    const { title, picture,article } = req.body;

    // Create a new post
    const newPost = new Post({
      title,
      picture,
      article,
      author: req.user._id, // Assuming you have user authentication middleware
    });

    // Save the post to the database
    await newPost.save();

    res.status(201).json({ message: 'Post created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating post' });
  }
};

// Get all blog posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'username');
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching posts' });
  }
};

// Get a specific blog post by ID
exports.getPostById = async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await Post.findById(postId).populate('author', 'username');
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching post' });
  }
};

// Update a blog post
exports.updatePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const { title, picture,article } = req.body;

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { title, picture,article },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: 'Error updating post' });
  }
};

// Delete a blog post
exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    await Post.findByIdAndDelete(postId);
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting post' });
  }
};
