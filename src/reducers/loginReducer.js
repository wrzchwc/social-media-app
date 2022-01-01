import {SIGN_IN, SIGN_OUT, FETCH_CURRENT_USER} from "../actions/types";

const getLoginState = () => {
    try {
        return localStorage.getItem('token').length !== null;
    } catch (e) {
        return false;
    }
}

const INITIAL_STATE = {
    client: {},
    isSignedIn: getLoginState(),
    token: localStorage.getItem('token')
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {...state, token: action.payload, isSignedIn: true};
        case SIGN_OUT:
            return {...state, token: null, isSignedIn: false, client: {}};
        case FETCH_CURRENT_USER:
            return {...state, client: action.payload};
        default:
            return state;
    }
}