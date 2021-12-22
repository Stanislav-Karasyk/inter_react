import PostList from "./components/PostList/PostList";
import posts from "../src/dataBase/posts";
import PostsByCategory from "./components/PostsByCategory/PostsByCategory";

function App() {
  return (
    <>
      <PostList posts={posts} />
      <PostsByCategory posts={posts} />
    </>
  );
}

export default App;
