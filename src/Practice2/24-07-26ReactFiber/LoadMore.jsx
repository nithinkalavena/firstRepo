import { useState } from "react";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  function loadMore() {
    const newPosts = Array.from(
      { length: 100 },
      (_, i) => `Post ${posts.length + i}`
    );

    setPosts([...posts, ...newPosts]);
  }

  return (
    <>
      <button onClick={loadMore}>
        Load More
      </button>

      {posts.map((post) => (
        <p key={post}>{post}</p>
      ))}
    </>
  );
}