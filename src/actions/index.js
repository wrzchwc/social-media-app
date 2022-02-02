import social from "../api/social";
import {
    ADD_POST,
    DROP_POSTS,
    CLEAR_RECENT_REGISTRATION,
    FETCH_CLIENT,
    FETCH_POSTS,
    SIGN_IN,
    SIGN_OUT,
    SIGN_UP
} from "./types";

export const signIn = formValues => async dispatch => {
    try {
        const response = await social.post(
            '/api/users/signin',
            {username: formValues.username, password: formValues.password}
        );
        localStorage.setItem('token', response.data);
        dispatch({type: SIGN_IN, payload: response.data});
    } catch (e) {
        console.log('Login issue!')
    }
}

export const signUp = (formValues, callback) => async dispatch => {
    try {
        await social.post(
            '/api/users/signup',
            {
                username: formValues.username,
                password: formValues.password,
                name: formValues.name,
                surname: formValues.surname,
                dateOfBirth: new Date(Date.parse(formValues.birthdate)).toJSON(),
                email: formValues.email
            }
        );
        dispatch({type: SIGN_UP, payload: {username: formValues.username, password: formValues.password}});
        callback();
    } catch (e) {
        console.log('Registration issue!')
    }
}

export const fetchClient = () => async dispatch => {
    try {
        const response = await social.get('/api/users/me',
            {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
        );
        dispatch({type: FETCH_CLIENT, payload: response.data});
    } catch (e) {
        dispatch(signOut());
    }
}

export const fetchPosts = () => async dispatch => {
    try{
        const response = await social.get('/api/posts',{
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        });
        dispatch({type: FETCH_POSTS, payload: response.data});
    }catch(e){
        dispatch(signOut());
    }
}

export const clearRecentRegistration = () => {
    return {type: CLEAR_RECENT_REGISTRATION};
}

export const signOut = () => dispatch => {
    localStorage.removeItem('token');
    dispatch({type: DROP_POSTS})
    dispatch({type: SIGN_OUT});
}

export const addPost = content => async dispatch => {
    try {
        const response = await social.post('/api/posts',
            {content: content},
            {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            }
        );
        dispatch({type: ADD_POST, payload: response.data})
    } catch (e) {
        console.log('Post addition error!');
        dispatch(signOut());
    }
}

export const likePost = postID => async dispatch => {
    try{
        await social.post(`/api/posts/${postID}/like`,null,{
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        });
        dispatch(fetchPosts());
    } catch (e) {
        console.log('Unable to like post');
        dispatch(signOut());
    }
}

