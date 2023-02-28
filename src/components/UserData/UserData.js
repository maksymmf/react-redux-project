import { handleFetch } from '../../utils';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UserData = () => {
    const [users, setUsers] = useState([]);
    const {id} = useParams();
    const userId = +id;
    const navigate = useNavigate();

    useEffect(() => {
        const getUsers = async () => {
            setUsers(await handleFetch(`${process.env.REACT_APP_URL}users`));
        }

        getUsers();
    }, []);

    const handlePreviousRoute = () => {
        navigate('/users');
    }

    return (
        <div className='user-page'>
            <button className='previous-page-button' onClick={() => handlePreviousRoute()}>Go Back</button>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        {user.id === userId ? (
                            <ul className='user-info'>
                                <li>
                                    <span className='mobile-img'></span>
                                    <ul>
                                        <li><a href={`tel:${user.phone}`}>{user.phone}</a></li>
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