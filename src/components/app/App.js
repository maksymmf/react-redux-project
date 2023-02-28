// import './App.css';
import './css/App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import PostsList from '../PostsList/PostsList';
import TodoList from '../TodoList/TodoList';
import UserList from '../UserList/UserList';
import UserData from '../UserData/UserData';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/posts"/>}/>
          <Route path="posts" element={<PostsList />}/>
          <Route path="todo" element={<TodoList />}/>
          <Route path="users" element={<UserList />} /> 
          <Route path="users/:id" element={<UserData />} />
          <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
