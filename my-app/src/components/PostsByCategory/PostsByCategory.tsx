import categories from "../../dataBase/categories";
import { IPost } from "../../utils/interfaces/post";
import { ICategory } from "../../utils/interfaces/category";
import Post from "../Post/Post";
import styles from "./PostsByCategory.module.scss";
import { Component } from "react";

function PostsByCategory({ posts }: { posts: IPost[] }): JSX.Element {
  return (
    <ul className={styles.postList}>
      {categories.map((category: ICategory) => (
        <li key={category.id} className={styles.postList__item}>
          <h2 className={styles.postList__title}>{category.name}</h2>

          {posts.map((post: IPost) => {
            if (category.name === post.category) {
              return <Post key={post.id} title={post.title} text={post.text} />;
            }

            return null;
          })}
        </li>
      ))}
    </ul>
  );
}

// _____CLASS_____

// interface IProps {
//   [key: string]: IPost[];
// }

// class PostsByCategory extends Component<IProps> {
//   render() {
//     const { posts } = this.props;

//     return (
//       <ul className={styles.postList}>
//         {categories.map((category: ICategory) => (
//           <li key={category.id} className={styles.postList__item}>
//             <h2 className={styles.postList__title}>{category.name}</h2>

//             {posts.map((post: IPost) => {
//               if (category.name === post.category) {
//                 return (
//                   <Post key={post.id} title={post.title} text={post.text} />
//                 );
//               }

//               return null;
//             })}
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

export default PostsByCategory;
