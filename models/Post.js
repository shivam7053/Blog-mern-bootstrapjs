// server/models/blogModel.js
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  picture: String, // You can store the image URL or handle image uploads
  article: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // Add more fields as needed (e.g., author, tags, etc.)
});

const Post = mongoose.model('Post', blogSchema);

module.exports = Post;
