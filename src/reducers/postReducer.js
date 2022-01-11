import {ADD_POST, DROP_POSTS} from "../actions/types";

const INITIAL_STATE = {
    all:[]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_POST:
            return {...state, all: [...state.all, action.payload]};
        case DROP_POSTS:
            return {...state, all: []}
        default:
            return state;
    }
}