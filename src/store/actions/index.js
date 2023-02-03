import { DISPLAY_USERS, DISPLAY_POSTS, DISPLAY_TODO } from "../types";

export function displayUsers (payload) {
    return {
        type: DISPLAY_USERS,
        payload
    }
}

export function displayPosts (payload) {
    return {
        type: DISPLAY_POSTS,
        payload
    }
}

export function displayTodo (payload) {
    return {
        type: DISPLAY_TODO,
        payload
    }
}

