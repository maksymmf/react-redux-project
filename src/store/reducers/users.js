import { DISPLAY_USERS } from "../types";

const defaultState = {
    users: []
}

export const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case DISPLAY_USERS: {
            return {
                ...state,
                users: [
                    ...state.users,
                    ...action.payload
                ]
            }
        }
    
        default: return state;
    }
}