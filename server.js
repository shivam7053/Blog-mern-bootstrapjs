// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('./middeware/errorMiddleware');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(errorHandler)

// Connect to MongoDB (you'll need to set up your MongoDB Atlas connection string)
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Routes (create your routes here)
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
