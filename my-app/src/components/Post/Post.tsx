import styles from "./Post.module.scss";
import { Component } from "react";

function Post({ title, text }: { title: string; text: string }): JSX.Element {
  return (
    <article className={styles.post}>
      <h4 className={styles.post__title}>{title}</h4>
      <p className={styles.post__text}>{text}</p>
    </article>
  );
}

// _____CLASS_____

// interface IProps {
//   title: string;
//   text: string;
// }
// export class Post extends Component<IProps> {
//   render() {
//     const { title, text } = this.props;

//     return (
//       <article className={styles.post}>
//         <h4 className={styles.post__title}>{title}</h4>
//         <p className={styles.post__text}>{text}</p>
//       </article>
//     );
//   }
// }

export default Post;
