import { NavLink, Outlet } from 'react-router-dom';

function Navigation () {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink activeclassname="active" to="/posts">Posts</NavLink></li>
                    <li><NavLink activeclassname="active" to="/todo">Todo</NavLink></li>
                    <li><NavLink activeclassname="active" to="/users">Users</NavLink></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navigation;