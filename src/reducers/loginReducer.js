import {SIGN_IN} from "../actions/types";

const INITIAL_STATE = {
    token: null
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {...state, token: action.payload};
        default:
            return state;
    }
}