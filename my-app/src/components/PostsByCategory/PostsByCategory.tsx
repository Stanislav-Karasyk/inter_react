import categories from '../../dataBase/categories'
import { IPost } from '../../utils/interfaces/post'
import { ICategory } from '../../utils/interfaces/category'
import Post from '../Post/Post'

function PostsByCategory({ posts }: { posts: IPost[] }): JSX.Element {

    return (
        <ul>
            {categories.map((category: ICategory) => (
                <li key={category.id}>
                    <h2>{category.name}</h2>

                    {posts.map((post: IPost) => {
                        if (category.name === post.category) {
                            return (
                                <Post key={post.id} title={post.title} text={post.text} />
                            )
                        }

                        return null;
                    })}
                </li>
            ))}
        </ul>
    )
}

export default PostsByCategory
