import { DISPLAY_TODO, TOGGLE_TODO } from "../types";

const defaultState = {
    todo: [],
    // completed
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
        case TOGGLE_TODO: {
            return {
                ...state,
                completed: action.payload
            }
        }
    
        default: return state;
      }
      
}