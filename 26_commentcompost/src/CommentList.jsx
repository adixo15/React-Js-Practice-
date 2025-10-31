import React from "react";
import Comment from "./Comment";

function CommentList({ comments }) {
  return (
    <div className="ml-4 border-l pl-4">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;
