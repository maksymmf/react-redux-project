import { handleFetch } from '../../utils';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UserData = () => {
    const [users, setUsers] = useState([]);
    const [toggleState, setToggleState] = useState(1);
    const [userTodo, setUserTodo] = useState([]);
    const [userPosts, setUserPosts] = useState([]);
    const [userAlbums, setUserAlbums] = useState([]);
    const {id} = useParams();
    const userId = +id;
    const navigate = useNavigate();

    useEffect(() => {
        const getUsers = async () => {
            setUsers(await handleFetch(`${process.env.REACT_APP_URL}users`));
        }

        const getUserAlbums = async () => {
            setUserAlbums(await handleFetch(`${process.env.REACT_APP_URL}users/${userId}/albums`));
        }

        const getUserTodo = async () => {
            setUserTodo(await handleFetch(`${process.env.REACT_APP_URL}users/${userId}/todos`));
        }

        const getUserPosts = async () => {
            setUserPosts(await handleFetch(`${process.env.REACT_APP_URL}users/${userId}/posts`));
        }

        getUsers();
        getUserAlbums();
        getUserTodo();
        getUserPosts();
    }, []);

    const handlePreviousRoute = () => {
        navigate('/users');
    }

    const switchTab = (index) => {
        setToggleState(index);
    }

    const handleTodoToggle = (id) => {
        const updatedTodo = userTodo.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            
            return todo;
        });

        setUserTodo(updatedTodo);
    }

    return (
        <div className='user-page'>
            <button className='previous-page-button' onClick={() => handlePreviousRoute()}>Go Back</button>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        {user.id === userId ? (
                            <div className='user-page-wrapper'>
                                <div className='tabs'>
                                    <ul className='tabs-header'>
                                        <li><a 
                                        onClick={() => switchTab(1)} 
                                        className={toggleState === 1 ? 'active-link' : null}
                                        >albums</a></li>
                                        <li><a 
                                        onClick={() => switchTab(2)} 
                                        className={toggleState === 2 ? 'active-link' : null}
                                        >todo</a></li>
                                        <li><a 
                                        onClick={() => switchTab(3)} 
                                        className={toggleState === 3 ? 'active-link' : null}
                                        >posts</a></li>
                                    </ul>
                                    <div className='tabs-content'>
                                        <table className={toggleState === 1 ? 'tab-active' : 'tab-inactive'}>
                                            <thead>
                                                <tr>
                                                    <th>title</th>
                                                </tr>
                                            </thead>
                                            {userAlbums.map((album) => {
                                                return (
                                                    <tbody key={album.id}>
                                                        <tr>
                                                            <td>{album.title}</td>
                                                        </tr>
                                                    </tbody>
                                                )
                                            })}
                                        </table>
                                        <table className={toggleState === 2 ? 'tab-active' : 'tab-inactive'}>
                                            <thead>
                                                <tr>
                                                    <th>title</th>
                                                    <th>completed</th>
                                                </tr>
                                            </thead>
                                            {userTodo.map((todo) => {
                                            return (
                                                <tbody key={todo.id}>
                                                    <tr>
                                                        <td>{todo.title}</td>
                                                        <td 
                                                        onClick={() => handleTodoToggle(todo.id)}
                                                        className={todo.completed ? 'todo-completed' : 'todo-not-completed'}
                                                        ></td>
                                                    </tr>
                                                </tbody>
                                            )
                                            })}
                                        </table>
                                        <table className={toggleState === 3 ? 'tab-active' : 'tab-inactive'}>
                                            <thead>
                                                <tr>
                                                    <th>title</th>
                                                    <th>body</th>
                                                </tr>
                                            </thead>
                                            {userPosts.map((post) => {
                                                return (
                                                    <tbody key={post.id}>
                                                        <tr>
                                                            <td>{post.title}</td>
                                                            <td>{post.body}</td>
                                                        </tr>
                                                    </tbody>
                                                )
                                            })}
                                        </table>
                                    </div>
                                </div>
                                <ul className='user-info'>
                                    <li>
                                        <span className='mobile-img'></span>
                                        <ul>
                                            <li>
                                                <a href={`tel:${user.phone.split(" ")[0].replace(/\D/g, '')}`}
                                                >{user.phone.split(" ")[0]}
                                                </a>
                                            </li>
                                            <li><p>Phone</p></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className='email-img'></span>
                                        <ul>
                                            <li><a href={`mailto:${encodeURIComponent((user.email))}`}>{user.email}</a></li>
                                            <li><p>Email</p></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className='location-img'></span>
                                        <ul>
                                            <li>{user.address.street}</li>
                                            <li>{user.address.suite}</li>
                                            <li>{user.address.city}</li>
                                            <li><p>Address</p></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className='social-img'></span>
                                        <ul>
                                            <li>{user.website}</li>
                                            <li><p>Social Media</p></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className='company-img'></span>
                                        <ul>
                                            <li>{user.company.name}</li>
                                            <li>{user.company.catchPhrase}</li>
                                            <li>{user.company.bs}</li>
                                            <li><p>Company</p></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            null
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default UserData;