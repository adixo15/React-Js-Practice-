import React from "react";
import CommentList from "./CommentList";

const commentsData = [
  {
    id: 1,
    text: "This is the first comment",
    replies: [
      {
        id: 2,
        text: "Reply to first comment",
        replies: [
          {
            id: 3,
            text: "Nested reply to reply",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    text: "This is another top-level comment",
    replies: [],
  },
];

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">💬 Nested Comment System</h1>
      <CommentList comments={commentsData} />
    </div>
  );
}

export default App;
