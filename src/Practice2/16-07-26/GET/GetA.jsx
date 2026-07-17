import axios from "axios";
import { useEffect, useState } from "react";

export default function PostsA() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
        console.log(response)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    <h2>Top 5 Posts</h2>
      {posts.slice(0, 5).map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </>
  );
}