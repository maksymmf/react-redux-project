import { DISPLAY_POSTS } from "../types";

const defaultState = {
    posts: []
}

export const postsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case DISPLAY_POSTS: {
            return {
                ...state,
                posts: [
                    ...state.posts,
                    ...action.payload
                ]
            }
        }

        default: return state;
    }
}