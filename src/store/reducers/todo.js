import { DISPLAY_TODO } from "../types";

const defaultState = {
    todo: []
}

export const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case DISPLAY_TODO: {
            return {
                ...state,
                todo: [
                    ...state.todo,
                    ...action.payload
                ]
            }
        }

        default: return state;
    }
}