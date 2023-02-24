import { NavLink } from 'react-router-dom';

function Navigation () {
    return (
        <nav>
            <ul>
                <li><NavLink activeclassname="active" to="/posts">Posts</NavLink></li>
                <li><NavLink activeclassname="active" to="/todo">Todo</NavLink></li>
                <li><NavLink activeclassname="active" to="/users">Users</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;