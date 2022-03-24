import {ADD_POST, DROP_POSTS,FETCH_POSTS} from "../actions/types";
import _ from 'lodash';

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_POST:
            return {...state};
        case DROP_POSTS:
            return INITIAL_STATE;
        case FETCH_POSTS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        default:
            return state;
    }
}