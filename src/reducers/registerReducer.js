import {SIGN_UP, CLEAR_RECENT_REGISTRATION} from "../actions/types";

const INITIAL_STATE = {
    username: '',
    password: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {...state, username: action.payload.username, password: action.payload.password}
        case CLEAR_RECENT_REGISTRATION:
            return {...state, username: '', password: ''}
        default:
            return state;
    }
}