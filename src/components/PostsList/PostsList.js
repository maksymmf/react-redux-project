import { handleFetch } from "../../utils";
import { useEffect, useState } from 'react';

function PostsList () {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            setPosts(await handleFetch(`${process.env.REACT_APP_URL}posts`));
        }

        getPosts();
    }, []);

    return (
        <div className="content">
            {posts.length > 0 ? (
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