import styles from "./Post.module.scss"
// import styles2 from "./Post.module.css"

function Post({ title, text }: { title: string; text: string }): JSX.Element {
    return (
        <article className={styles.post}>
            <h4>{title}</h4>
            <p>{text}</p>
        </article>
    )
}

export default Post;

