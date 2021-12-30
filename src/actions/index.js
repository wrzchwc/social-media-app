import social from "../api/social";
import {CLEAR_RECENT_REGISTRATION, SIGN_IN, SIGN_OUT, SIGN_UP} from "./types";

export const signIn = (formValues, callback) => async dispatch => {
    try {
        const response = await social.post(
            '/api/users/signin',
            {username: formValues.username, password: formValues.password}
        );
        dispatch({type: SIGN_IN, payload: response.data});
        localStorage.setItem('token', response.data);
        callback();
    } catch (e) {
        console.log('Login issue!')
    }
}

export const signUp = (formValues, callback) => async dispatch => {
    try{
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
        dispatch({type: SIGN_UP, payload: {username: formValues.username, password: formValues.password}});
        callback();
    } catch (e) {
        console.log('Registration issue!')
    }
}

export const clearRecentRegistration = () => {
    return {type: CLEAR_RECENT_REGISTRATION};
}

export const signOut = callback => {
    localStorage.removeItem('token');
    callback();
    return {type: SIGN_OUT};
}