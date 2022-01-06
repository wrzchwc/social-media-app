import {SIGN_IN, SIGN_OUT, FETCH_CLIENT} from "../actions/types";
import jwtDecode from "jwt-decode";

const isTokenExpired = token => {
    return token.exp * 1000 < new Date().getTime();
}


const getLoginState = () => {
    let token = localStorage.getItem('token');
    try {
        let decodedToken = jwtDecode(token);
        return !isTokenExpired(decodedToken);
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
        case FETCH_CLIENT:
            return {...state, client: action.payload};
        default:
            return state;
    }
}