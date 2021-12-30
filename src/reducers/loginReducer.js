import {SIGN_IN, SIGN_OUT} from "../actions/types";

const INITIAL_STATE = {
    token: null,
    isSignedIn: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {...state, token: action.payload, isSignedIn: true};
        case SIGN_OUT:
            return {...state, token: null, isSignedIn: false};
        default:
            return state;
    }
}