import { useDispatch, useSelector } from "react-redux";
import { handleFetchPosts } from "../../asyncActions/posts";

function PostsList () {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);

    function displayPostList () {
        dispatch(handleFetchPosts());
    }

    return (
        <div className="content">
            {displayPostList()}
            {posts.length > 0 ?
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                   {posts.map(post =>
                   <tbody>
                        <tr>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                   </tbody>
                   )} 
                </table>
            :
                <div className='error'>
                    <h3>No posts</h3>
                </div>
            }
        </div>
    )
}

export default PostsList;