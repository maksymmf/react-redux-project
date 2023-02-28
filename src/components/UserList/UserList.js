import { handleFetch } from '../../utils';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UserList () {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            setUsers(await handleFetch(`${process.env.REACT_APP_URL}users`));
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
                            <th className='user-data-table-header'>User Data</th>
                        </tr>
                    </thead>
                    {users.map(user => {
                        return (
                            <tbody key={user.id}>
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td className='user-contact'><Link to={`${user.id}`}></Link></td>
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