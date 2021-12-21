import { IPost } from '../../utils/interfaces/post'
import Post from '../Post/Post'


function PostList({ posts }: { posts: IPost[] }): JSX.Element {
    return (
        <ul>
            {posts.map((post: IPost) => (
                <li key={post.id}>
                    <Post title={post.title} text={post.text} />
                </li>
            ))}
        </ul>
    )
}

export default PostList;
