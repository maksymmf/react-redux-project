import { combineReducers } from 'redux';
import { usersReducer } from './reducers/users';
import { todoReducer } from './reducers/todo';
import { postsReducer } from './reducers/posts';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers ({
    users: usersReducer,
    todo: todoReducer,
    posts: postsReducer
})

export const store = configureStore({
    reducer: rootReducer
});