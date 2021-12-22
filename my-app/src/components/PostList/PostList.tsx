import { IPost } from "../../utils/interfaces/post";
import Post from "../Post/Post";
import styles from "./PostList.module.scss";
import { Component } from "react";

function PostList({ posts }: { posts: IPost[] }): JSX.Element {
  return (
    <ul className={styles.postList}>
      {posts.map((post: IPost) => (
        <li key={post.id} className={styles.postList__item}>
          <Post title={post.title} text={post.text} />
        </li>
      ))}
    </ul>
  );
}

// _____CLASS_____

// interface IProps {
//   [key: string]: IPost[];
// }

// class PostList extends Component<IProps> {
//   render() {
//     const { posts } = this.props;

//     return (
//       <ul className={styles.postList}>
//         {posts.map((post: IPost) => (
//           <li key={post.id} className={styles.postList__item}>
//             <Post title={post.title} text={post.text} />
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

export default PostList;
