import React, { useState } from "react";
import CommentList from "./CommentList";

function Comment({comment}){
    const[showReplies,setShowReplies]=useState(false)
    return(
        <div>
            <div>
                <p>{comment.text}</p>
                {comment.replies.length > 0 && (
          <button
            onClick={() => setShowReplies(!showReplies)}
            className="text-blue-600 text-sm"
          >
            {showReplies ? "Hide Replies" : "View Replies"}
          </button>
        )}
            </div>
            {showReplies && <CommentList comments={comment.replies} />}
        </div>
    )
}

export default Comment