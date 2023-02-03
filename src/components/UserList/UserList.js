import { useDispatch, useSelector } from 'react-redux';
import { handleFetchUsers } from '../../asyncActions/users';

function UserList () {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);

    function displayUserList() {
        dispatch(handleFetchUsers());
    }

    return (
        <div className='content'>
            {displayUserList()}
            {users.length > 0 ?
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    {users.map(user =>
                    <tbody>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.username}</td>   
                        </tr>    
                    </tbody>   
                    )}
                </table>
            :
                <div className='error'>
                    <h3>No clients</h3>
                </div>
            }
        </div>
    )
}

export default UserList;