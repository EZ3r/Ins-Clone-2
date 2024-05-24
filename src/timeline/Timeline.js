import React, { useState } from 'react';
import Suggestions from './Suggestions';
import Post from './Post/Post';

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "Elvis",
      postImage:
        "https://images.unsplash.com/photo-1502219684198-fa9b5164d9d7?q=80&w=3135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 43,
      timestamp: "2h",
    },
    {
      user: "Bravo",
      postImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Future_-_Openair_Frauenfeld_2019_01_%28cropped%29.jpg/1920px-Future_-_Openair_Frauenfeld_2019_01_%28cropped%29.jpg",
      likes: 999,
      timestamp: "6h",
    },
    {
      user: "Barry",
      postImage:
        "https://images.unsplash.com/photo-1565520651265-1148c3b277f4?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 60,
      timestamp: "2d",
    },
  ]);

  return (
    <div className="flex flex-row">
      <div className="flex-[0.7]">
        <div>
          {posts.map((post, index) => (
            <Post
              key={index}
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="flex-[0.3]">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
