import { useDispatch, useSelector } from 'react-redux';
import { handleFetch } from '../../utils';
import { displayUsers } from "../../store/actions/index";
import { useEffect, useState } from 'react';

function UserList () {
    const dispatch = useDispatch();
    // const users = useSelector(state => state.users.users);
    const url = 'https://jsonplaceholder.typicode.com/users';
    const [users, setUsers] = useState([]);

    useEffect(() => {
        dispatch(displayUsers(users));
    }, [users]);

    useEffect(() => {
        const getUsers = async () => {
            setUsers(await handleFetch(url));
        }

        getUsers();
    }, []);

    return (
        <div className='content'>
            {users.length ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    {users.map(user => {
                        return (
                            <tbody key={user.id}>
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>   
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

export default UserList;

    // useEffect(() => {
    //     const displayUserList = () => {
    //         dispatch(handleFetch(url, displayUsers));
    //     }

    //     displayUserList();
    // }, []);