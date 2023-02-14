import { useDispatch, useSelector } from "react-redux";
import { handleFetch } from "../../utils";
import { displayPosts } from "../../store/actions/index";
import { useEffect, useState } from 'react';

function PostsList () {
    const dispatch = useDispatch();
    // const posts = useSelector(state => state.posts.posts);
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        dispatch(displayPosts(posts));
    }, [posts]);

    useEffect(() => {
        const getPosts = async () => {
            setPosts(await handleFetch(url));
        }

        getPosts();
    }, []);

    return (
        <div className="content">
            {posts.length ? (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                {posts.map((post) => {
                    return (
                        <tbody key={post.id}>
                            <tr>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        </tbody>
                    )
                })}
                </table>
            ) : (
                <div className='loading'></div>
            )}
        </div>
    )
}

export default PostsList;