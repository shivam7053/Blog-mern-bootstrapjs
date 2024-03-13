// src/components/Comment/CommentList.js

import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment) => (
        <div key={comment._id}>
          <p>{comment.content}</p>
          {/* Display comment author, date, etc. */}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
