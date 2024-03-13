// server/middleware/errorMiddleware.js

const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error (you can customize this)
  
    res.status(500).json({ error: 'Something went wrong' });
  };
  
  module.exports = errorHandler;
  