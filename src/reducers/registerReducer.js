import {SIGN_UP} from "../actions/types";

const INITIAL_STATE = {
    recentlyRegisteredUser: null
};

export default (state = INITIAL_STATE, action) => {
    if (action.type === SIGN_UP) {
        return {...state, recentlyRegisteredUser: action.payload}
    }
    return state;
}