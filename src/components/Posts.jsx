import { use } from "react";
import { fetchData } from "../utils/fetchData";

const Posts = () => {
  const posts = use(fetchData("https://jsonplaceholder.typicode.com/posts"));

  // console.log(posts);

  return (
    <ul>
      <h2 className="text-2xl mb-2 font-bold mt-5">Posts</h2>
      {posts.map((post) => (
        <li key={post.id}> {post.title} </li>
      ))}
    </ul>
  );
};
export default Posts;
