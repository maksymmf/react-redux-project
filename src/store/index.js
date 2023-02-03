import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { usersReducer } from './reducers/users';
import { todoReducer } from './reducers/todo';
import { postsReducer } from './reducers/posts';

const rootReducer = combineReducers ({
    users: usersReducer,
    todo: todoReducer,
    posts: postsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));