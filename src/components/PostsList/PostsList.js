import { handleFetch } from "../../utils";
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

function PostsList () {
    const [posts, setPosts] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [isActive, setActive] = useState(false);
    const regEx = (/^([a-zA-Z0-9 _-]+)$/);
    const errorMessage = "This field is required and may contain letters and numbers only";

    useEffect(() => {
        const getPosts = async () => {
            const allPosts = await handleFetch(`${process.env.REACT_APP_URL}posts`);

            setPosts(allPosts.slice(0, 5));
        }

        getPosts();
    }, []);

    const onSubmit = data => {
        setPosts( [...posts, data] );
        reset();
        toggleFormClass();
    }

    const toggleFormClass = () => {
        setActive(!isActive);
        reset();
    }

    return (
        <div className="content">
            <button className={isActive ? "add-post-button-darker" : "add-post-button"} 
            onClick={isActive ? null : toggleFormClass}>Add Post</button>
            <div className={isActive ? "form-active" : "form-inactive"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {isActive ? <div className="close-form" onClick={toggleFormClass}/> : null}
                    <label htmlFor="title-input">Title</label>
                    <input className="title-input" id="title-input"
                    {...register("title", {required: true, maxLength: 50, size:100, validate: (value) => regEx.test(value)})}/>
                    {errors.title && <span className="error">{errorMessage}</span>}
                    <label htmlFor="body-input">Body</label>
                    <textarea className="body-input" id="body-input" rows={5} 
                    {...register("body", {required: true, maxLength: 300, validate: (value) => regEx.test(value)})}/>
                    {errors.body && <span className="error">{errorMessage}</span>}
                    <input type="submit"/>
                </form>
            </div>
            {posts.length ? (
                <table className={isActive ? "table-darker" : null}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                {posts.map((post, index) => {
                    return (
                        <tbody key={index + 1}>
                            <tr>
                                <td>{index + 1}</td>
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