// src/components/Blog/CommentList.js
import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <div>
      <h4>Comments</h4>
      {comments.map((comment) => (
        <div key={comment._id}>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
