import {SIGN_UP} from "../actions/types";

const INITIAL_STATE = {
    user: null
};

export default (state = INITIAL_STATE, action) => {
    if (action.type === SIGN_UP) {
        return {...state, user: action.payload}
    }
    return state;
}