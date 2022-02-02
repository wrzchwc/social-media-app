import {
    SIGN_UP,
    CLEAR_RECENT_REGISTRATION,
    SIGN_UP_ERROR,
    SIGN_UP_ERROR_ACK
} from "../actions/types";

const INITIAL_STATE = {
    username: '',
    password: '',
    error: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {...state, username: action.payload.username, password: action.payload.password}
        case CLEAR_RECENT_REGISTRATION:
            return {...state, username: '', password: ''}
        case SIGN_UP_ERROR:
            return {...state, error: true};
        case SIGN_UP_ERROR_ACK:
            return {...state, error: false};
        default:
            return state;
    }
}