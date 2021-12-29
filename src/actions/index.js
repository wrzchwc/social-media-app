import social from "../api/social";
import {SIGN_IN, SIGN_UP} from "./types";

export const signIn = formValues => async dispatch => {
    try {
        const response = await social.post(
            '/api/users/signin',
            {username: formValues.username, password: formValues.password}
        );
        dispatch({type: SIGN_IN, payload: response.data});
        localStorage.setItem('token', response.data);
    } catch (e) {
        console.log('Login issue!')
    }
}

export const signUp = formValues => async dispatch => {
    const response = await social.post(
        '/api/users/signup',
        {
            username: formValues.username,
            password: formValues.password,
            name: formValues.name,
            surname: formValues.surname,
            dateOfBirth: new Date(),
            email: formValues.email
        }
    );

    dispatch({type: SIGN_UP, payload: response.data});
}