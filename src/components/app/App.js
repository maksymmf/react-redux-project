import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import PostsList from '../PostsList/PostsList';
import TodoList from '../TodoList/TodoList';
import UserList from '../UserList/UserList';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/posts" element={<PostsList />}/>
        <Route path="/todo" element={<TodoList />}/>
        <Route path="/users" element={<UserList />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
