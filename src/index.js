import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import thunk from "redux-thunk";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const getLoginState = () => {
    try {
        return localStorage.getItem('token').length === 204;
    } catch (e) {
        return false;
    }
}

const store = createStore(reducers,
    {
        authentication: {
            token: localStorage.getItem('token'),
            isSignedIn: getLoginState()
        }
    },
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);