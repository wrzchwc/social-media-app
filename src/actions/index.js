import social from "../api/social";
import {SIGN_IN} from "./types";

export const signIn = formValues => async dispatch => {
    const response = await social.post('/api/users/signin', formValues);
    dispatch({type: SIGN_IN, payload: response.data});
}