import social from "../api/social";
import {SIGN_IN, SIGN_UP} from "./types";

export const signIn = formValues => async dispatch => {
    const response = await social.post('/api/users/signin', formValues);
    dispatch({type: SIGN_IN, payload: response.data});
}

export const signUp = formValues => async dispatch => {
    const response = await social.post(
        '/api/users/signup',
        {
            username: formValues.username,
            password: formValues.password,
            name: formValues.name,
            surname: formValues.surname,
            dateOfBirth: JSON.stringify(new Date()),
            email: formValues.email
        }
    );

    dispatch({type: SIGN_UP, payload: response.data});
}