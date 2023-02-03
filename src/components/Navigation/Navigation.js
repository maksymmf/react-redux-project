import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation () {
    return (
        <nav>
            <ul>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/todo">Todo</Link></li>
                <li><Link to="/users">Users</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;