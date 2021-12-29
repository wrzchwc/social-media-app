import {SIGN_IN} from "../actions/types";

const INITIAL_STATE = {
    token: null,
    isSignedIn: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {...state, token: action.payload, isSignedIn: true};
        default:
            return state;
    }
}